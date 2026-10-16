"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  return (
    <section
      ref={ref}
      id="intro"
      className="relative flex min-h-[calc(100svh-88px)] items-end overflow-hidden bg-[#11100f] text-[#f7f1e8]"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hro.png"
          alt="Jessica Moren in a black blazer and lace mask"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] md:object-[72%_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#11100f_0%,rgba(17,16,15,.93)_40%,rgba(17,16,15,.28)_78%,rgba(17,16,15,.56)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100f] via-transparent to-[#11100f]/25" />
        <div className="paper-grain absolute inset-0 opacity-25" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl px-6 pb-20 pt-24 sm:px-8 md:pb-24 lg:px-10"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-[#d8b76a]"
          >
            <Crown className="h-5 w-5" />
            <p className="eyebrow">
              The Perimenopausal Princess • A Book Series
            </p>
          </motion.div>

          <h1 className="editorial-title mt-6 text-[clamp(4.5rem,8.5vw,8.8rem)] drop-shadow-2xl">
            <span className="block">Some days you</span>
            <span className="font-accent block text-[.67em] uppercase text-[#d8b76a]">
              wear the crown.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-display mt-8 max-w-2xl text-2xl italic leading-relaxed text-white/82 sm:text-3xl"
          >
            Other days you want to throw it. Meet Jessica Moren&apos;s gloriously
            unfiltered world of hot flashes, hard truths, complicated love,
            and becoming yourself again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/books"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-[#d8b76a] px-7 py-4 text-xs font-bold uppercase tracking-[.2em] text-[#11100f]"
            >
              Discover the Series <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="focus-ring inline-flex min-h-12 items-center justify-center border border-white/35 bg-black/15 px-7 py-4 text-xs font-bold uppercase tracking-[.2em]"
            >
              Meet Jessica
            </Link>
          </motion.div>

          <p className="mt-8 text-xs uppercase tracking-[.22em] text-white/55">
            The crown is optional. The honesty isn&apos;t.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
