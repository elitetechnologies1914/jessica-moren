"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="reader-care" className="paper-grain relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-[#11100f] px-6 py-24 text-[#f7f1e8]">
      <div className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#d8b76a]/10 blur-[120px]" />
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.9 }} className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Mail className="h-8 w-8 text-[#d8b76a]" strokeWidth={1.4} />
        <p className="eyebrow mt-6 text-[#d8b76a]">Occasional notes, zero clutter</p>
        <h2 className="editorial-title mt-6 text-5xl sm:text-6xl lg:text-8xl">A little royal disorder in your inbox.</h2>
        <p className="mt-8 max-w-2xl text-base leading-8 text-[#f7f1e8]/68">Book announcements, behind-the-scenes notes, and honest midlife humor. No fake wisdom. Just the good stuff, when there’s something worth sharing.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 bg-[#d8b76a] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#11100f]">Get Release Updates <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/books" className="focus-ring inline-flex min-h-12 items-center justify-center border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f7f1e8]">Explore the Books</Link>
        </div>
        <p className="mt-6 text-xs leading-6 text-[#f7f1e8]/42">Newsletter signup will activate after the email provider and consent workflow are connected.</p>
      </motion.div>
    </section>
  );
}
