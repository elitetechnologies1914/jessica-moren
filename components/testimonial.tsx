"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const testimonialsData = [
  {
    author: "Irena Samantha Evangelista",
    title: "From Finding My Journey",
    text: "My story is not over yet.",
  },
  {
  author: "Irena's father, remembered in the memoir",
  title: "Words for the road",
  text: "The train will get to its last stop, but you have to stop at every station in order to get there.",
  },
  {
    author: "Irena Samantha Evangelista",
    title: "Words for the road",
    text: "I am not okay. I need help. And there is nothing wrong with asking for help.",
  },
  {
    author: "Irena Samantha Evangelista",
    title: "Words for the road",
    text: "Tomorrow is a new day. It is okay to fall and get back up.",
  },
  {
    author: "Irena Samantha Evangelista",
    title: "Words for the road",
    text: "You are loved. You are enough.",
  },
  
];

const Testimonial: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startOffset = useRef(0);

  const originalLength = testimonialsData.length;
  const data = [...testimonialsData, ...testimonialsData];

  const stepSize = () => {
    const card = trackRef.current?.children[0] as HTMLElement | undefined;
    if (!card) return 0;
    return card.offsetWidth + 20;
  };

  const update = useCallback(
    (withTransition = true) => {
      if (!trackRef.current) return;
      const offset = index * stepSize();
      trackRef.current.style.transition = withTransition ? "transform 0.3s ease" : "none";
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    },
    [index]
  );

  useEffect(() => {
    update();
  }, [update]);

  useEffect(() => {
    if (!trackRef.current) return;
    const handleTransitionEnd = () => {
      if (index >= originalLength) {
        setIndex(0);
        update(false);
      }
    };
    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, originalLength, update]);

  const handleNext = useCallback(() => setIndex((prev) => prev + 1), []);
  const handlePrev = useCallback(() => {
    if (index === 0) {
      setIndex(originalLength);
      update(false);
    } else {
      setIndex((prev) => prev - 1);
    }
  }, [index, originalLength, update]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startOffset.current = index * stepSize();
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    const delta = e.clientX - startX.current;
    const offset = startOffset.current - delta;
    trackRef.current.style.transition = "none";
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - startX.current;
    const threshold = 60;
    if (delta < -threshold) handleNext();
    else if (delta > threshold) handlePrev();
    else update();
  };

  return (
    <section className="overflow-hidden bg-[#fff8ed] py-20">
      <div className="grid items-start gap-12 px-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="px-6 lg:pl-24 lg:pr-0">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[3.5px] text-[#b82d26]">
            Words for the road
          </p>
          <h1
            className={`${cormorant.className} italic mt-5 text-[clamp(3.15rem,9vw,4.35rem)] leading-[1.02] tracking-[-0.02em] text-[#6e1714] sm:mt-4`}
          >
            A pause for the journey
          </h1>
        </div>

        <div
          className={`overflow-hidden pl-0 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <div ref={trackRef} className="flex gap-6">
            {data.map((item, i) => (
              <div
                key={i}
                className="min-h-[380px] min-w-[420px] rounded-xl border border-[#d4aaa0] bg-[#fff8ed] p-10 shadow-[0_15px_35px_rgba(110,23,20,0.08)] md:min-w-[40%] lg:min-w-[36%]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 select-none items-center justify-center rounded-full text-sm font-bold text-white bg-[#b82d26]"
                  >
                    {item.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-[#6e1714]">{item.author}</p>
                    <p className="mt-0.5 text-xs leading-tight text-[#9c4a2d] uppercase tracking-widest">{item.title}</p>
                  </div>
                </div>
                <div className="mt-5 h-px w-14 bg-[#d6a35a]" />
                <p className={`pt-6 text-xl leading-relaxed text-[#262223]/80 italic ${cormorant.className}`}>
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-4 px-6 lg:px-0">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6e1714] transition-colors hover:text-[#b82d26]"
        >
          Prev
        </button>
        <div className="h-[2px] flex-1 bg-[#d6a35a]" />
        <button
          onClick={handleNext}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6e1714] transition-colors hover:text-[#b82d26]"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
