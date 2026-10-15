"use client";

import { useLayoutEffect, useRef } from "react";
import { BookOpen, Crown, Flame, HeartHandshake, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SecSlidesPinning() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".home-slide", wrapperRef.current);
      panels.slice(0, -1).forEach((panel) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",
            end: "+=85%",
            pin: true,
            pinSpacing: false,
            scrub: 0.55,
            anticipatePin: 1,
          },
        }).to(panel, { scale: 0.76, opacity: 0, ease: "none" });
      });
    }, wrapperRef);
    return () => context.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="overflow-x-hidden bg-[#f7f1e8]">
      <section className="home-slide relative flex min-h-[calc(100svh-64px)] items-center justify-center overflow-hidden bg-[#d8b76a] px-6 py-20 text-center text-[#11100f]">
        <Crown className="absolute left-[8%] top-[12%] h-24 w-24 -rotate-12 text-[#11100f]/8" strokeWidth={0.8} />
        <Sparkles className="absolute bottom-[16%] right-[10%] h-20 w-20 text-[#11100f]/8" strokeWidth={0.8} />
        <div className="relative max-w-5xl">
          <p className="eyebrow">The reader promise</p>
          <p className="editorial-title mt-7 text-[clamp(4rem,9vw,8.5rem)] italic">You can be exhausted, furious, funny, complicated—and still be entirely yourself.</p>
        </div>
      </section>

      <section id="journey" className="home-slide relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f1e8] px-6 py-20 text-center text-[#11100f]">
        <BookOpen className="absolute left-1/2 top-1/2 h-[min(52vw,30rem)] w-[min(52vw,30rem)] -translate-x-1/2 -translate-y-1/2 text-[#d8b76a]/10" strokeWidth={0.6} />
        <Flame className="absolute left-[12%] top-[30%] h-16 w-16 -rotate-12 text-[#b66e55]/12" strokeWidth={1} />
        <HeartHandshake className="absolute bottom-[24%] right-[12%] h-20 w-20 rotate-12 text-[#a9863e]/12" strokeWidth={1} />
        <div className="relative max-w-6xl">
          <p className="eyebrow text-[#a9863e]">What lives between the pages</p>
          <h2 className="editorial-title mt-7 text-[clamp(4.4rem,11vw,10rem)] italic">Hot flashes. Hard conversations. Hilarious survival.</h2>
        </div>
      </section>
    </div>
  );
}
