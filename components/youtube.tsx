"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function Video() {
  return (
    <section className="paper-grain relative overflow-hidden bg-[#11100f] px-4 py-12 sm:px-8 md:py-24">
      <motion.div initial={{ opacity: 0, scale: 0.97, y: 28 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9 }} className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden border border-[#d8b76a]/25 bg-black shadow-[0_32px_90px_rgba(0,0,0,0.4)]">
        <Image src="/images/antique-crown.png" alt="An antique crown resting in a velvet-lined box" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,15,0.88),rgba(17,16,15,0.16)_70%)]" />
        <div className="absolute inset-0 flex items-center px-7 sm:px-12 lg:px-20">
          <div className="max-w-2xl text-[#f7f1e8]">
            <Crown className="h-8 w-8 text-[#d8b76a]" strokeWidth={1.3} />
            <p className="eyebrow mt-6 text-[#d8b76a]">Three books. One very human reckoning.</p>
            <h2 className="editorial-title mt-5 text-[clamp(3rem,6vw,6.8rem)]">The crown was never the point.</h2>
            <p className="font-display mt-5 text-xl italic text-[#f7f1e8]/72 sm:text-2xl">The woman wearing it is.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
