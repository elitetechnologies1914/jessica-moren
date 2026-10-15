"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookCover from "@/components/book-cover";

const themes = ["Identity", "Perimenopause", "Marriage", "Motherhood", "Boundaries", "Reclamation"];

export default function BookDetail() {
  return (
    <section id="book-details" className="relative overflow-hidden bg-[#f7f1e8] py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:gap-20 md:px-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9 }} className="relative flex w-full justify-center md:w-[44%]">
          <div className="absolute -inset-5 rotate-3 border border-[#a9863e]/30" />
          <BookCover className="relative z-10 w-full max-w-[430px]" />
        </motion.div>

        <div className="w-full md:w-[56%]">
          <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="eyebrow text-[#a9863e]">Book One • Working cover title</motion.p>
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-accent mt-6 text-5xl uppercase leading-[1.02] text-[#11100f] sm:text-6xl lg:text-7xl">The Crown Doesn’t F@$%!@% Fit Anymore</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-display mt-7 text-2xl italic leading-relaxed text-[#b66e55] sm:text-3xl">What happens when the woman who kept everything together realizes she no longer recognizes herself?</motion.p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#31251f]/72">From nights without sleep and the absurdities of modern health advice to marriage, family bonds, and the hard work of saying what she means, Jessica’s journey is funny because life is absurd—and moving because beneath every joke is a woman trying to come home to herself.</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {themes.map((theme) => <li key={theme} className="border border-[#a9863e]/35 bg-[#e9ded0]/55 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em]">{theme}</li>)}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/books#book-one" className="focus-ring inline-flex min-h-12 items-center gap-3 bg-[#11100f] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f1e8]">Explore Book One <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center border border-[#11100f] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#11100f]">Release Updates</Link>
          </div>
          <p className="mt-5 text-xs leading-6 text-[#31251f]/50">Retailer links and final jacket wording will be added after author approval.</p>
        </div>
      </div>
    </section>
  );
}
