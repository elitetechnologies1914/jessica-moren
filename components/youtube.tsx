"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const videoId = "MDIyID3jvso";
const startTime = 9 * 60 + 54;
const endTime = 13 * 60 + 10;
const clipDuration = endTime - startTime;

type YoutubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getCurrentTime: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
};

function isYoutubePlayer(player: unknown): player is YoutubePlayer {
  if (!player || typeof player !== "object") return false;

  const candidate = player as Partial<Record<keyof YoutubePlayer, unknown>>;
  return (
    typeof candidate.playVideo === "function" &&
    typeof candidate.pauseVideo === "function" &&
    typeof candidate.mute === "function" &&
    typeof candidate.unMute === "function" &&
    typeof candidate.isMuted === "function" &&
    typeof candidate.setVolume === "function" &&
    typeof candidate.getCurrentTime === "function" &&
    typeof candidate.seekTo === "function" &&
    typeof candidate.destroy === "function"
  );
}

type YoutubePlayerStateEvent = {
  data: number;
  target: YoutubePlayer;
};

type YoutubeReadyEvent = {
  target: YoutubePlayer;
};

type YoutubeConstructor = new (
  element: HTMLElement,
  options: {
    videoId: string;
    playerVars: Record<string, string | number>;
    events: {
      onReady: (event: YoutubeReadyEvent) => void;
      onStateChange: (event: YoutubePlayerStateEvent) => void;
    };
  }
) => YoutubePlayer;

declare global {
  interface Window {
    YT?: {
      Player: YoutubeConstructor;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYoutubeApi() {
  if (window.YT?.Player) return Promise.resolve();

  youtubeApiPromise ??= new Promise<void>((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
  });

  return youtubeApiPromise;
}

export default function YoutubeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const playerMountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<unknown>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [shouldStart, setShouldStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const playFromClipStart = () => {
    const player = playerRef.current;
    if (!isYoutubePlayer(player)) return;

    player.seekTo(startTime, true);
    player.unMute();
    player.setVolume(100);
    player.playVideo();

    setProgress(0);
    setHasEnded(false);
    setIsMuted(player.isMuted());
    setIsPlaying(true);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -25% 0px",
        threshold: 0.01,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldStart || !playerMountRef.current || playerRef.current) return;

    let isCancelled = false;

    loadYoutubeApi().then(() => {
      if (isCancelled || !playerMountRef.current || !window.YT) return;

      playerRef.current = new window.YT.Player(playerMountRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          end: endTime,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,

          // Try autoplay with sound.
          // Browser may still block this unless the user has interacted with the page.
          mute: 0,

          playsinline: 1,
          rel: 0,
          start: startTime,
        },
        events: {
          onReady: (event) => {
            const player = event.target;
            if (!isYoutubePlayer(player)) return;

            player.seekTo(startTime, true);
            player.unMute();
            player.setVolume(100);
            player.playVideo();

            setIsMuted(player.isMuted());
            setIsPlaying(true);
            setHasEnded(false);
          },

          onStateChange: (event) => {
            if (!window.YT || !isYoutubePlayer(event.target)) return;

            const player = event.target;

            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            setIsMuted(player.isMuted());

            if (event.data === window.YT.PlayerState.ENDED) {
              player.pauseVideo();
              player.seekTo(startTime, false);

              setProgress(0);
              setIsPlaying(false);
              setHasEnded(true);
            }
          },
        },
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [shouldStart]);

  useEffect(() => {
    if (!shouldStart) return;

    const retryPlayback = window.setInterval(() => {
      const player = playerRef.current;
      if (!isYoutubePlayer(player) || hasEnded) return;

      player.unMute();
      player.setVolume(100);
      player.playVideo();

      setIsMuted(player.isMuted());
      setIsPlaying(true);
    }, 800);

    const stopRetry = window.setTimeout(() => {
      window.clearInterval(retryPlayback);
    }, 4000);

    return () => {
      window.clearInterval(retryPlayback);
      window.clearTimeout(stopRetry);
    };
  }, [shouldStart, hasEnded]);

  useEffect(() => {
    if (!shouldStart) return;

    const interval = window.setInterval(() => {
      const player = playerRef.current;
      if (!isYoutubePlayer(player)) return;

      const currentTime = player.getCurrentTime();

      if (currentTime >= endTime) {
        player.pauseVideo();
        player.seekTo(startTime, false);

        setProgress(0);
        setIsPlaying(false);
        setHasEnded(true);
        return;
      }

      const clippedTime = Math.min(
        Math.max(currentTime - startTime, 0),
        clipDuration
      );

      setProgress((clippedTime / clipDuration) * 100);
      setIsMuted(player.isMuted());
    }, 250);

    return () => window.clearInterval(interval);
  }, [shouldStart]);

  useEffect(() => {
    return () => {
      if (isYoutubePlayer(playerRef.current)) {
        playerRef.current.destroy();
      }

      playerRef.current = null;
    };
  }, []);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!isYoutubePlayer(player)) return;

    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
      return;
    }

    const currentTime = player.getCurrentTime();

    if (hasEnded || currentTime < startTime || currentTime >= endTime) {
      playFromClipStart();
      return;
    }

    player.unMute();
    player.setVolume(100);
    player.playVideo();

    setHasEnded(false);
    setIsMuted(player.isMuted());
    setIsPlaying(true);
  };

  const toggleSound = () => {
    const player = playerRef.current;
    if (!isYoutubePlayer(player)) return;

    if (player.isMuted()) {
      player.unMute();
      player.setVolume(100);
      setIsMuted(false);
      return;
    }

    player.mute();
    setIsMuted(true);
  };

  const seekFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const player = playerRef.current;
    const progressEl = progressRef.current;

    if (!isYoutubePlayer(player) || !progressEl) return;

    const bounds = progressEl.getBoundingClientRect();
    const ratio = Math.min(
      Math.max((event.clientX - bounds.left) / bounds.width, 0),
      1
    );

    const nextTime = startTime + ratio * clipDuration;

    player.seekTo(nextTime, true);
    player.unMute();
    player.setVolume(100);
    player.playVideo();

    setProgress(ratio * 100);
    setHasEnded(false);
    setIsMuted(player.isMuted());
    setIsPlaying(true);
  };

  return (
    <section
      ref={sectionRef}
      id="video"
      className="relative overflow-hidden bg-[#1a120c] px-3 py-10 sm:px-4 sm:py-14 md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#d9885f]/10 blur-[110px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,244,229,0.45)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 28 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="relative overflow-hidden rounded-[1rem] border border-[#f4efe8]/15 bg-[#0b0805] p-1.5 shadow-[0_32px_80px_rgba(0,0,0,0.42)] sm:p-2 md:rounded-[1.8rem]">
          <div className="group/video relative aspect-video min-h-[210px] overflow-hidden rounded-[0.8rem] bg-[#140d08] sm:min-h-0 sm:rounded-[1rem] md:rounded-[1.35rem]">
            <div ref={playerMountRef} className="absolute inset-0 h-full w-full" />

            {!shouldStart && (
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(217,136,95,0.2),rgba(20,13,8,1)_68%)]" />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0b0805]/90 via-[#0b0805]/45 to-transparent px-2 pb-2 pt-12 opacity-100 transition duration-300 sm:px-4 sm:pb-4 sm:pt-16 md:px-6 md:pb-6 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/video:opacity-100 [@media(hover:hover)]:group-focus-within/video:opacity-100">
              <div className="pointer-events-auto flex min-w-0 items-center gap-2 rounded-full border border-[#f4efe8]/15 bg-[#120c08]/70 px-2 py-2 text-[#fff8f0] shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-3 sm:px-3 sm:py-3 md:px-4">
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d9885f] text-white transition hover:bg-[#c0734c] sm:h-10 sm:w-10"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 fill-current" />
                  ) : (
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  )}
                </button>

                <div
                  ref={progressRef}
                  role="slider"
                  aria-label="Video timeline"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                  tabIndex={0}
                  onPointerDown={seekFromPointer}
                  className="h-4 min-w-0 flex-1 cursor-pointer rounded-full py-1.5 sm:h-3 sm:py-1"
                >
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#f4efe8]/18">
                    <div
                      className="h-full rounded-full bg-[#d9885f] transition-[width] duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={toggleSound}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f4efe8]/15 text-[#fff8f0] transition hover:bg-[#f4efe8]/10 sm:h-10 sm:w-10"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
