"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Letter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <section ref={ref} id="letters" className="paper-grain relative flex min-h-screen flex-col items-center overflow-hidden bg-[#11100f] px-4 py-24 text-[#f7f1e8] md:py-32">
      <motion.div style={{ y: titleY }} className="relative z-0 text-center">
        <p className="eyebrow text-[#d8b76a]">A note from the series</p>
        <h2 className="editorial-title mt-5 text-5xl sm:text-6xl md:text-8xl">Welcome to the royal mess.</h2>
        <p className="mt-5 text-[0.65rem] uppercase tracking-[0.22em] text-[#f7f1e8]/42">Feel free to move the note</p>
      </motion.div>

      <div className="relative z-10 mt-16 flex min-h-[620px] w-full max-w-5xl items-center justify-center">
        <motion.article
          drag
          dragConstraints={ref}
          dragElastic={0.08}
          whileHover={{ scale: 1.025 }}
          whileDrag={{ scale: 1.04, cursor: "grabbing" }}
          initial={{ opacity: 0, y: 80, rotate: -9 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", damping: 18, stiffness: 85 }}
          className="absolute w-[min(88vw,560px)] cursor-grab bg-[#f7f1e8] p-7 text-[#31251f] shadow-[0_35px_90px_rgba(0,0,0,0.45)] sm:p-10"
          style={{ backgroundImage: "radial-gradient(rgba(169,134,62,0.13) 0.6px,transparent 0.6px)", backgroundSize: "12px 12px" }}
        >
          <p className="absolute right-5 top-5 border border-[#a9863e]/35 px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#a9863e]">Campaign note</p>
          <div className="font-display mt-8 whitespace-pre-line text-xl italic leading-[1.55] sm:text-2xl">
            {`Dear reader,

One minute you recognize your life. The next, your sleep has filed for divorce, your patience is on permanent vacation, and the woman in the mirror looks like she has questions.

These stories make room for the ridiculous, heartbreaking, liberating in-between. You do not have to arrive polished. You do not have to pretend the crown fits. Bring the laugh, the hard truth, and every complicated version of yourself.

The royal mess is waiting.`}
          </div>
          <div className="mt-7 h-px w-16 bg-[#a9863e]" />
          <p className="eyebrow mt-4 text-[#b66e55]">The Perimenopausal Princess</p>
        </motion.article>
      </div>
    </section>
  );
}
