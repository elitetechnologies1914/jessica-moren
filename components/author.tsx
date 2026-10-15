"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Author() {
  return (
    <section id="author" className="relative overflow-hidden bg-[#e9ded0] py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:gap-20 md:px-10">
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }} className="relative flex w-full justify-center md:w-1/2">
          <div className="absolute inset-0 mx-auto aspect-[3/4] max-w-[470px] translate-x-4 translate-y-4 bg-[#d8b76a]" />
          <div className="relative z-10 aspect-[3/4] w-full max-w-[470px] overflow-hidden shadow-xl">
            <Image src="/images/writers-desk.png" alt="A writer’s desk with coffee, handwritten pages, and a fountain pen" fill sizes="(max-width: 768px) 100vw, 470px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/38 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-2xl italic leading-snug text-[#f7f1e8]">A candid voice for the parts of life we are usually expected to gloss over.</p>
          </div>
        </motion.div>

        <div className="w-full md:w-1/2">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="eyebrow text-[#a9863e]">Meet the author</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="editorial-title mt-6 text-5xl text-[#11100f] sm:text-6xl lg:text-7xl">Jessica Moren doesn’t do perfectly polished.</motion.h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 h-px w-16 origin-left bg-[#a9863e]" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 space-y-5 text-base leading-8 text-[#31251f]/75 sm:text-lg">
            <p>Jessica is the voice behind <em>The Perimenopausal Princess</em>, a candid, irreverent exploration of midlife, love, identity, and the untidy work of becoming yourself.</p>
            <p>Her writing moves between big laughs and unguarded moments—because a woman can be fierce and tired, loving and frustrated, brave and thoroughly over it.</p>
            <p className="font-display text-2xl italic text-[#b66e55]">The real story isn’t losing the crown. It’s remembering who you are without it.</p>
          </motion.div>
          <Link href="/about" className="focus-ring mt-9 inline-flex min-h-12 items-center gap-3 bg-[#11100f] px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f7f1e8]">More About Jessica <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
