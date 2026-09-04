"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cormorant_Garamond, Dancing_Script } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const letters = [
  {
    id: 1,
    date: "A NOTE FROM IRENA",
    text: "Dear reader,\n\nI do not know what brought you here. Maybe you are carrying a story that feels too heavy to say out loud. Maybe you are trying to understand someone you love. Maybe you are looking for proof that a difficult chapter is not the whole book.\n\nI wrote Finding My Journey because silence once convinced me I had to face everything alone. Recovery taught me that honesty can be a doorway, support can be a lifeline, and falling does not erase the road already traveled. You do not have to have everything figured out today. Take the next honest step. You are worth staying for, worth healing for, and worthy of a life that feels like home.\n\nWith love, Irena",
    rotate: -4,
    x: "0%",
    y: "0%",
    desktopX: "0%",
    desktopY: "-10%",
    delay: 0.1,
  },
];

export default function LettersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  // Parallax effect for the background/title
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#6e1714] flex flex-col items-center justify-start px-4 py-24 md:py-32"
      id="letters"
    >
      {/* Background Texture / Mood */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Cinematic Title */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="relative text-center pointer-events-none z-0 px-2 mt-4 md:mt-10"
      >
        <span className="block mb-4 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.4em] text-[#d9885f]">
          A personal welcome
        </span>
        <h2
          className={`${cormorant.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-[#fff8ed] tracking-wide opacity-90`}
        >
          A note from Irena
        </h2>
        <p className="mt-4 text-[0.62rem] font-light uppercase tracking-[0.22em] text-[#a39385] sm:text-xs md:mt-6">
          ( Feel free to move it )
        </p>
      </motion.div>

      {/* Scattered Interactive Letters */}
      <div className="relative z-10 mt-10 flex min-h-[680px] w-full max-w-5xl items-start justify-center sm:min-h-[640px] md:mt-16 md:h-[70vh] md:min-h-[500px] md:items-center">
        {letters.map((letter) => (
          <motion.div
            key={letter.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            whileHover={{ scale: isDesktop ? 1.04 : 1.02 }}
            whileDrag={{ scale: isDesktop ? 1.08 : 1.04, cursor: "grabbing" }}
            onHoverStart={() => setActiveCard(letter.id)}
            initial={{
              opacity: 0,
              y: 80 + (isDesktop ? 0 : (letter.id - 1) * 150),
              rotate: isDesktop ? letter.rotate - 12 : 0,
              x: isDesktop ? letter.desktopX : letter.x,
            }}
            whileInView={{
              opacity: 1,
              y: isDesktop ? letter.desktopY : (letter.id - 1) * 205,
              rotate: isDesktop ? letter.rotate : 0,
              x: isDesktop ? letter.desktopX : letter.x,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: letter.delay,
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={`absolute w-[min(84vw,320px)] cursor-grab bg-[#fff8ed] p-5 shadow-2xl transition-shadow duration-300 sm:w-[360px] sm:p-6 md:w-[440px] md:p-7 lg:w-[480px]
              ${activeCard === letter.id ? "z-50 shadow-[0_30px_60px_rgba(0,0,0,0.4)]" : "z-10 shadow-[0_15px_35px_rgba(0,0,0,0.2)]"}
            `}
            style={{
              backgroundImage:
                "radial-gradient(rgba(110, 23, 20, 0.08) 0.6px, transparent 0.6px), linear-gradient(135deg, rgba(255, 248, 237, 0.96), rgba(232, 203, 168, 0.9))",
              backgroundSize: "10px 10px, 100% 100%",
            }}
          >
            {/* Stamp/Date */}
            <div className="absolute right-3 top-3 rotate-[4deg] border border-[#c2b2a3] px-1.5 py-0.5 font-sans text-[8px] uppercase tracking-widest text-[#a89684] opacity-70 md:right-4 md:top-4 md:text-[10px]">
              {letter.date}
            </div>

            {/* Content */}
            <div className={`${dancing.className} mt-7 whitespace-pre-line text-[1.15rem] leading-[1.42] text-[#6e1714] sm:text-[1.25rem] md:text-[1.38rem] lg:text-[1.48rem]`}>
              {letter.text}
            </div>

            {/* Subtle Divider */}
            <div className="mb-2 mt-5 h-[1px] w-12 bg-[#d1c5b8] md:mt-6 md:w-14" />
            <svg
              className="h-4 w-4 text-[#d1c5b8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
