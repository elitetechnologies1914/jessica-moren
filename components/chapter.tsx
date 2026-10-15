"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  { label: "Chapter I", title: "Identity & reinvention", text: "For the days you miss who you were, and the days you suspect she is still there.", image: "/images/midnight-bedroom.png" },
  { label: "Chapter II", title: "Love & marriage", text: "The real, ridiculous intimacy of choosing each other during upheaval.", image: "/images/morning-coffee.png" },
  { label: "Chapter III", title: "Family & boundaries", text: "Loving people fiercely without volunteering to carry their whole world.", image: "/images/journaling.png" },
  { label: "Chapter IV", title: "Humor & honesty", text: "Because the punch line and the truth often arrive together.", image: "/images/rainy-cafe.png" },
];

export default function Chapter() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const textSections = gsap.utils.toArray<HTMLElement>(".chapter-copy", ref.current);
      const images = gsap.utils.toArray<HTMLElement>(".chapter-image", ref.current);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.set(images, { opacity: 0, scale: 1.04 });
        gsap.set(images[0], { opacity: 1, scale: 1 });
        textSections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 52%",
            end: "bottom 48%",
            onEnter: () => {
              gsap.to(images, { opacity: 0, scale: 1.04, duration: 0.7, overwrite: true });
              gsap.to(images[index], { opacity: 1, scale: 1, duration: 0.8, overwrite: true });
            },
            onEnterBack: () => {
              gsap.to(images, { opacity: 0, scale: 1.04, duration: 0.7, overwrite: true });
              gsap.to(images[index], { opacity: 1, scale: 1, duration: 0.8, overwrite: true });
            },
          });
        });
      });
      textSections.forEach((section) => {
        gsap.fromTo(section.querySelectorAll(".chapter-reveal"), { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: section, start: "top 78%" } });
      });
      return () => mm.revert();
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#f7f1e8] text-[#31251f]">
      <div className="relative flex w-full flex-col md:flex-row">
        <div className="sticky top-[88px] hidden h-[calc(100vh-88px)] w-1/2 overflow-hidden bg-[#11100f] md:flex">
          {chapters.map((chapter) => (
            <div key={chapter.title} className="chapter-image absolute inset-0">
              <Image src={chapter.image} alt="" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#11100f]/12" />
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          {chapters.map((chapter) => (
            <article key={chapter.title} className="chapter-copy flex min-h-screen flex-col justify-center p-7 sm:p-10 md:p-16 lg:p-20">
              <div className="chapter-reveal relative mb-10 aspect-[4/3] overflow-hidden md:hidden">
                <Image src={chapter.image} alt="" fill sizes="100vw" className="object-cover" />
              </div>
              <div className="max-w-xl">
                <p className="chapter-reveal eyebrow text-[#a9863e]">{chapter.label}</p>
                <h2 className="chapter-reveal editorial-title mt-6 text-5xl text-[#11100f] sm:text-6xl lg:text-7xl">{chapter.title}</h2>
                <div className="chapter-reveal mt-7 h-px w-16 bg-[#a9863e]" />
                <p className="chapter-reveal font-display mt-7 text-2xl italic leading-relaxed text-[#31251f]/76 sm:text-3xl">{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
