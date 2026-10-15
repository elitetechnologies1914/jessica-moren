"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "36%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  return (
    <section ref={ref} id="intro" className="relative flex min-h-[calc(100svh-88px)] items-end overflow-hidden bg-[#11100f] text-[#f7f1e8]">
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }} className="relative h-full w-full">
          <Image src="/images/crown-coffee.png" alt="An antique crown, coffee cup, notebook, and handwritten note on a dark table" fill priority sizes="100vw" className="object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,15,0.18),rgba(17,16,15,0.5)_48%,#11100f_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,15,0.72),rgba(17,16,15,0.05)_42%,rgba(17,16,15,0.35))]" />
        <div className="paper-grain absolute inset-0 opacity-35" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-5 pb-20 pt-24 text-center sm:px-8 sm:pb-24">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-5 flex items-center justify-center gap-3 text-[#d8b76a]">
            <Crown className="h-5 w-5" strokeWidth={1.5} />
            <p className="eyebrow">The Perimenopausal Princess • A Book Series</p>
          </motion.div>
          <h1 className="editorial-title text-[clamp(4.4rem,10vw,9.4rem)] text-[#f7f1e8] drop-shadow-[0_6px_35px_rgba(0,0,0,0.58)]">
            <span className="block overflow-hidden pb-2"><motion.span className="block" initial={{ y: "110%", rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}>Some days you</motion.span></span>
            <span className="block overflow-hidden pb-2"><motion.span className="block font-accent text-[0.72em] uppercase tracking-[-0.025em] text-[#d8b76a]" initial={{ y: "110%", rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}>wear the crown.</motion.span></span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.64 }} className="font-display mx-auto mt-8 max-w-3xl text-2xl italic leading-relaxed text-[#f7f1e8]/85 sm:text-3xl">
            Other days you want to throw it. Meet Jessica Moren’s gloriously unfiltered world of hot flashes, hard truths, complicated love, and becoming yourself again.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.84 }} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/books" className="focus-ring group inline-flex min-h-12 min-w-60 items-center justify-center gap-3 bg-[#d8b76a] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#11100f] transition-colors hover:bg-[#f7f1e8]">Discover the Series <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/about" className="focus-ring inline-flex min-h-12 min-w-60 items-center justify-center border border-white/35 bg-black/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f7f1e8] backdrop-blur transition-colors hover:border-[#d8b76a] hover:text-[#d8b76a]">Meet Jessica</Link>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.05 }} className="mt-9 text-xs uppercase tracking-[0.24em] text-[#f7f1e8]/58">The crown is optional. The honesty isn’t.</motion.p>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#11100f] to-transparent" />
    </section>
  );
}
