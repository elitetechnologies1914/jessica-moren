"use client"

import React, { useLayoutEffect, useRef } from "react";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import Image from "next/image";
import {
  BookMarked,
  BookOpen,
  Feather,
  Heart,
  Mail,
  PenLine,
  Quote,
  ScrollText,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const slides = [
  {
    title: "Section 1",
    className: "bg-[#e8cba8] text-[#262223]",
    hideTitle: true,
    quote:
      '“My story is not over yet.”',
  },
  {
    title: "The Journey",
    hideTitle: false,
    isLetters: false,
    className: "bg-[#fff8ed] text-[#262223]",
    id: "journey",
  },
];

const longText: string[] = [];

export default function GSAPSlidesPinningOverscroll() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(
        ".slide-section",
        wrapperRef.current
      );
      const panelsToAnimate = panels.slice(0, -1);

      const buildTriggers = () => {
        panelsToAnimate.forEach((panel) => {
          const innerPanel = panel.querySelector<HTMLElement>(".slide-inner");
          if (!innerPanel) return;

          const panelHeight = innerPanel.scrollHeight;
          const viewportHeight = window.innerHeight;
          const difference = panelHeight - viewportHeight;
          const fakeScrollRatio =
            difference > 0 ? difference / (difference + viewportHeight) : 0;

          if (fakeScrollRatio) {
            panel.style.marginBottom = `${panelHeight * fakeScrollRatio}px`;
          } else {
            panel.style.marginBottom = "0px";
          }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "bottom bottom",
              end: () =>
                fakeScrollRatio ? `+=${innerPanel.scrollHeight}` : "bottom top",
              pin: true,
              pinSpacing: false,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          if (fakeScrollRatio) {
            timeline.to(innerPanel, {
              yPercent: -100,
              y: viewportHeight,
              duration: 1 / (1 - fakeScrollRatio) - 1,
              ease: "none",
            });
          }

          timeline
            .fromTo(
              panel,
              { scale: 1, opacity: 1 },
              {
                scale: 0.4,
                opacity: 0.5,
                duration: 0.9,
                ease: "none",
              }
            )
            .to(panel, {
              opacity: 0,
              duration: 0.1,
              ease: "none",
            });
        });
      };

      buildTriggers();
      ScrollTrigger.refresh();
    }, wrapperRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
      

      <div ref={wrapperRef} className="slides-wrapper">
        {slides.map((slide) => (
          <section
            key={slide.title}
            id={"id" in slide ? slide.id : undefined}
            className={`slide-section relative box-border flex h-[calc(100vh-64px)] w-full justify-center overflow-hidden rounded-[10px] text-center text-2xl font-semibold ${slide.className}`}
            style={"backgroundImage" in slide ? { backgroundImage: `url(${slide.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
          >
            {"quote" in slide ? (
              <>
                <div className="pointer-events-none absolute left-[9%] top-[12%] z-10 text-[#d6a35a]/55">
                  <span
                    className={`${cormorant.className} block text-[clamp(5.6rem,7vw,8.6rem)] italic leading-none`}
                  >
                    &ldquo;
                  </span>
                </div>

                <div className="pointer-events-none absolute right-[10%] top-[14%] z-10 text-[#d6a35a]/55">
                  <span
                    className={`${cormorant.className} block text-[clamp(5.6rem,7vw,8.6rem)] italic leading-none`}
                  >
                    &rdquo;
                  </span>
                </div>

                <div className="pointer-events-none absolute bottom-[11%] right-[14%] z-10 text-[#d6a35a]/55">
                  <span
                    className={`${cormorant.className} block text-[clamp(5.6rem,7vw,8.6rem)] italic leading-none`}
                  >
                    &rdquo;
                  </span>
                </div>
              </>
            ) : null}

            <div className="slide-content w-full">
              <div
                className={`slide-inner flex h-full flex-col items-center ${
                  "quote" in slide
                  ? "justify-center px-6"
                  : "long" in slide && slide.long
                    ? "h-auto pb-[20vh]"
                    : "justify-center px-5"
                }`}
              >
                {!("hideTitle" in slide && slide.hideTitle) ? (
                  <div className="relative flex min-h-[52vh] w-full items-center justify-center overflow-hidden px-4">
                    <BookOpen
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[min(46vw,24rem)] w-[min(46vw,24rem)] -translate-x-1/2 -translate-y-1/2 text-[#d6a35a]/10"
                      strokeWidth={0.7}
                    />
                    <Heart
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[31%] top-[40%] h-[clamp(2.7rem,4.8vw,5.4rem)] w-[clamp(2.7rem,4.8vw,5.4rem)] -rotate-12 text-[#b82d26]/12"
                      strokeWidth={1}
                    />
                    <PenLine
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[13%] top-[23%] h-[clamp(3.5rem,6vw,6.8rem)] w-[clamp(3.5rem,6vw,6.8rem)] rotate-12 text-[#9c4a2d]/14"
                      strokeWidth={1}
                    />
                    <Feather
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-[22%] left-[17%] h-[clamp(3.6rem,6.6vw,7rem)] w-[clamp(3.6rem,6.6vw,7rem)] -rotate-45 text-[#d6a35a]/16"
                      strokeWidth={1}
                    />
                    <Sparkles
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[21%] top-[27%] h-[clamp(2.3rem,3.8vw,4.2rem)] w-[clamp(2.3rem,3.8vw,4.2rem)] text-[#b82d26]/18"
                      strokeWidth={1}
                    />
                    <Sparkles
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-[31%] right-[27%] h-[clamp(2rem,3.2vw,3.7rem)] w-[clamp(2rem,3.2vw,3.7rem)] rotate-45 text-[#d6a35a]/16"
                      strokeWidth={1}
                    />
                    <ScrollText
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[9%] top-[44%] h-[clamp(3rem,5vw,5.8rem)] w-[clamp(3rem,5vw,5.8rem)] -rotate-6 text-[#9c4a2d]/12"
                      strokeWidth={1}
                    />
                    <Mail
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[10%] top-[46%] h-[clamp(2.8rem,4.7vw,5.4rem)] w-[clamp(2.8rem,4.7vw,5.4rem)] rotate-6 text-[#b82d26]/13"
                      strokeWidth={1}
                    />
                    <BookMarked
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-[16%] left-[30%] h-[clamp(2.3rem,3.8vw,4.4rem)] w-[clamp(2.3rem,3.8vw,4.4rem)] rotate-12 text-[#d6a35a]/12"
                      strokeWidth={1}
                    />
                    <Quote
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[34%] top-[19%] h-[clamp(2rem,3.4vw,3.9rem)] w-[clamp(2rem,3.4vw,3.9rem)] -rotate-12 text-[#9c4a2d]/10"
                      strokeWidth={1}
                    />
                    <Heart
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-[18%] right-[36%] h-[clamp(2rem,3.2vw,3.6rem)] w-[clamp(2rem,3.2vw,3.6rem)] rotate-12 text-[#b82d26]/10"
                      strokeWidth={1}
                    />
                    <div className="pointer-events-none absolute bottom-[24%] right-[17%] h-20 w-12 rotate-12 rounded-b-[1.75rem] border border-[#9c4a2d]/10 bg-[#b82d26]/7 sm:h-28 sm:w-16" />
                    <div className="pointer-events-none absolute h-[18rem] w-[18rem] rounded-full bg-[#b82d26]/8 blur-3xl" />

                    <h1
                      className={`${cormorant.className} relative z-10 mx-auto my-0 max-w-[11ch] text-center text-[clamp(4.4rem,12vw,12rem)] font-medium italic leading-[0.9] tracking-wide text-[#6e1714]`}
                    >
                      {slide.title}
                    </h1>
                  </div>
                ) : null}

                {"quote" in slide ? (
                  <p
                    className={`${greatVibes.className} max-w-[18ch] text-center text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[1.25] tracking-[-0.025em] text-[#6e1714] sm:max-w-[22ch]`}
                  >
                    {slide.quote}
                  </p>
                ) : null}

                {"image" in slide && slide.image ? (
                  <div className="relative mt-10 aspect-square w-1/2 overflow-hidden rounded-lg">
                    <Image
                    src={slide.image as string}
                    alt={slide.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    />
                  </div>
                ) : !("quote" in slide) ? (
                  <div className="flex flex-col items-center pb-16">
                    {longText.map((text, textIndex) => (
                      <p key={textIndex} className="max-w-[40ch] px-8 py-6">
                        {text}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
