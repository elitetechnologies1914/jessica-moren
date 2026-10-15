"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const cards = [
  { label: "Identity", text: "For the woman who loves her life—and still wonders where the hell she went." },
  { label: "Marriage", text: "Complicated love, ordinary intimacy, and choosing each other in the middle of upheaval." },
  { label: "Boundaries", text: "Loving people fiercely without volunteering to carry their whole world." },
  { label: "Humor", text: "Because the punch line and the truth have a habit of arriving together." },
  { label: "Reclamation", text: "Not a neat transformation montage. A stubborn, funny journey back to yourself." },
];

export default function Testimonial() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const allCards = [...cards, ...cards];

  const step = () => {
    const first = track.current?.children[0] as HTMLElement | undefined;
    return first ? first.offsetWidth + 24 : 0;
  };
  const update = useCallback((animate = true) => {
    if (!track.current) return;
    track.current.style.transition = animate ? "transform 350ms ease" : "none";
    track.current.style.transform = `translateX(-${index * step()}px)`;
  }, [index]);

  useEffect(() => { update(); }, [update]);
  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const onEnd = () => { if (index >= cards.length) setIndex(0); };
    node.addEventListener("transitionend", onEnd);
    return () => node.removeEventListener("transitionend", onEnd);
  }, [index]);

  return (
    <section className="overflow-hidden bg-[#f7f1e8] py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="px-6 sm:px-8 lg:pl-[max(2.5rem,calc((100vw-1280px)/2))] lg:pr-0">
          <p className="eyebrow text-[#a9863e]">Between the pages</p>
          <h2 className="editorial-title mt-5 text-5xl text-[#11100f] sm:text-6xl">Every complicated version of you is welcome here.</h2>
        </div>
        <div className="overflow-hidden pl-6 lg:pl-0">
          <div ref={track} className="flex gap-6">
            {allCards.map((card, i) => (
              <article key={`${card.label}-${i}`} className="min-h-[330px] min-w-[82vw] border border-[#a9863e]/28 bg-[#e9ded0] p-8 shadow-[0_15px_35px_rgba(49,37,31,0.06)] sm:min-w-[420px] lg:min-w-[38%]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#11100f] font-display text-lg italic text-[#d8b76a]">{card.label.charAt(0)}</div>
                <p className="eyebrow mt-7 text-[#b66e55]">{card.label}</p>
                <p className="font-display mt-5 text-3xl italic leading-relaxed text-[#11100f]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-4 px-6 sm:px-8 lg:px-[max(2.5rem,calc((100vw-1280px)/2))]">
        <button type="button" onClick={() => setIndex((current) => current === 0 ? cards.length - 1 : current - 1)} className="focus-ring px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#11100f]">Prev</button>
        <div className="h-px flex-1 bg-[#a9863e]/40" />
        <button type="button" onClick={() => setIndex((current) => current + 1)} className="focus-ring px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#11100f]">Next</button>
      </div>
    </section>
  );
}
