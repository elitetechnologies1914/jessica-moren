"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
} from "react";

import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [shouldStart, setShouldStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  // Detect when video section enters viewport
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

  // Autoplay once section becomes visible
  useEffect(() => {
    if (!shouldStart) return;

    const video = videoRef.current;

    if (!video) return;

    // Browsers normally require autoplay videos to begin muted.
    video.muted = true;
    setIsMuted(true);

    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });
  }, [shouldStart]);

  const playFromStart = () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;
    video.play();

    setProgress(0);
    setHasEnded(false);
    setIsPlaying(true);
  };

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      if (hasEnded) {
        video.currentTime = 0;
      }

      video.play();

      setHasEnded(false);
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  const updateProgress = () => {
    const video = videoRef.current;

    if (!video || !video.duration) return;

    const nextProgress =
      (video.currentTime / video.duration) * 100;

    setProgress(nextProgress);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
    setProgress(100);
  };

  const seekFromPointer = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const video = videoRef.current;
    const progressEl = progressRef.current;

    if (!video || !progressEl || !video.duration) return;

    const bounds = progressEl.getBoundingClientRect();

    const ratio = Math.min(
      Math.max(
        (event.clientX - bounds.left) / bounds.width,
        0
      ),
      1
    );

    video.currentTime = ratio * video.duration;

    setProgress(ratio * 100);
    setHasEnded(false);

    video.play();
    setIsPlaying(true);
  };

  return (
    <section
      ref={sectionRef}
      id="video"
      className="relative overflow-hidden bg-[#1a120c] px-3 py-10 sm:px-4 sm:py-14 md:px-8 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#d9885f]/10 blur-[110px]" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,244,229,0.45)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.97,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="relative overflow-hidden rounded-[1rem] border border-[#f4efe8]/15 bg-[#0b0805] p-1.5 shadow-[0_32px_80px_rgba(0,0,0,0.42)] sm:p-2 md:rounded-[1.8rem]">
          <div className="group/video relative aspect-video min-h-[210px] overflow-hidden rounded-[0.8rem] bg-[#140d08] sm:min-h-0 sm:rounded-[1rem] md:rounded-[1.35rem]">

            {/* Local MP4 video */}
            <video
              ref={videoRef}
              src="/video/Raina-trailor.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              muted
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={updateProgress}
              onEnded={handleEnded}
            />

            {/* Loading/background state */}
            {!shouldStart && (
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(217,136,95,0.2),rgba(20,13,8,1)_68%)]" />
            )}

            {/* Controls */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0b0805]/90 via-[#0b0805]/45 to-transparent px-2 pb-2 pt-12 opacity-100 transition duration-300 sm:px-4 sm:pb-4 sm:pt-16 md:px-6 md:pb-6 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover/video:opacity-100 [@media(hover:hover)]:group-focus-within/video:opacity-100">
              <div className="pointer-events-auto flex min-w-0 items-center gap-2 rounded-full border border-[#f4efe8]/15 bg-[#120c08]/70 px-2 py-2 text-[#fff8f0] shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-3 sm:px-3 sm:py-3 md:px-4">

                {/* Play / Pause */}
                <button
                  type="button"
                  onClick={togglePlayback}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d9885f] text-white transition hover:bg-[#c0734c] sm:h-10 sm:w-10"
                  aria-label={
                    isPlaying
                      ? "Pause video"
                      : "Play video"
                  }
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 fill-current" />
                  ) : (
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  )}
                </button>

                {/* Progress */}
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
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Mute / Unmute */}
                <button
                  type="button"
                  onClick={toggleSound}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f4efe8]/15 text-[#fff8f0] transition hover:bg-[#f4efe8]/10 sm:h-10 sm:w-10"
                  aria-label={
                    isMuted
                      ? "Unmute video"
                      : "Mute video"
                  }
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Replay overlay */}
            {hasEnded && (
              <button
                type="button"
                onClick={playFromStart}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
                aria-label="Replay video"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9885f] text-white shadow-xl transition hover:scale-105 hover:bg-[#c0734c]">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}