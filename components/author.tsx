"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function AuthorSection() {
  return (
    <section className="relative w-full bg-[#e8cba8] py-24 md:py-32 overflow-hidden" id="author">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Soft Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 relative flex justify-center"
        >
          {/* Aesthetic frame offset */}
          <div className="absolute inset-0 bg-[#d4aaa0] translate-x-4 translate-y-4 rounded-sm pointer-events-none max-w-[450px] mx-auto aspect-[3/4]" />
          
          <div className="relative w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-sm shadow-xl z-10">
            {/* Cinematic dark/warm vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/author/author-raina.png"
              alt="A warm writing desk with a journal and candle"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover sepia-[12%]"
            />
          </div>
        </motion.div>

        {/* Right Side: Emotional Biography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block mb-6 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-[#b82d26]"
          >
            Meet the Author
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${cormorant.className} text-5xl md:text-7xl font-medium text-[#6e1714] mb-6 leading-tight italic`}
          >
            Meet Raina. S.E
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-[1px] bg-[#d6a35a] mb-8 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`${greatVibes.className} space-y-6 text-2xl md:text-3xl text-[#262223]/80 leading-relaxed max-w-[45ch]`}
          >
            <p>
              Raina. S.E. is a memoirist and child-youth-care professional whose work is rooted in honesty, empathy, and the belief that asking for help is an act of strength. Born in Romania and adopted to Toronto at age three, she grew up navigating questions of belonging, bullying, mental-health struggles, grief, and recovery.
            </p>
            <p>
              Her experiences led her back to school and into work supporting children, youth, and adults with developmental disabilities and mental-health challenges. Through <span className="italic">Finding My Journey</span>, Raina. S.E. turns a private battle into an open hand for readers who have been suffering in silence.
            </p>
            <p>
              I wrote this story so someone else can find their way home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12"
          >
            <p className={`${greatVibes.className} text-3xl text-[#6e1714]`}>
              —  Raina. S.E.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
