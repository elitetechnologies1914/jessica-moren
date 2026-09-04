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

const themes = ["Belonging", "Recovery", "Faith", "Purpose"];

export default function BookDetail() {
  return (
    <section className="relative w-full bg-[#fff8ed] py-24 md:py-32 overflow-hidden" id="book-details">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: 3D Book Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[2/3] w-full max-w-[390px] overflow-hidden rounded-[1.15rem] shadow-[0_26px_60px_rgba(110,23,20,0.26)]"
          >
            <Image
              src="/images/finding-my-journey-cover.jpg"
              alt="Finding My Journey cover by Irena Samantha Evangelista, showing a woman walking toward a sunlit horizon among butterflies"
              fill
              sizes="(max-width: 768px) 80vw, 390px"
              className="object-cover object-right"
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Elegant Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block mb-4 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-[#b82d26]"
          >
            The Book
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${cormorant.className} text-5xl md:text-6xl font-medium text-[#6e1714] mb-6 leading-tight`}
          >
            A story told <br />
            <span className="italic text-[#9c4a2d]">without hiding</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-16 h-[1px] bg-[#d6a35a] mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`${greatVibes.className} text-2xl md:text-3xl text-[#262223]/80 leading-relaxed mb-5 max-w-[45ch]`}
          >
            Finding My Journey is a candid memoir about what happens when a childhood shaped by adoption and belonging collides with bullying, body image, disordered eating, grief, faith, and the hard work of recovery.
          </motion.p>
          <p className="mb-10 max-w-[45ch] text-base leading-7 text-[#262223]/75 md:text-lg">
            This is not a neat story about being fixed. It is an honest account of learning to communicate, accept support, find purpose, and choose another step even when the road has potholes, bumps, and hills.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <h3 className={`${cormorant.className} text-2xl text-[#6e1714] mb-4 font-medium italic`}>
              Key Themes
            </h3>
            <ul className="flex flex-wrap gap-3">
              {themes.map((theme) => (
                <li
                  key={theme}
                  className="px-5 py-2 rounded-full border border-[#d4aaa0] text-[#9c4a2d] text-sm tracking-widest uppercase font-sans bg-transparent transition-colors hover:bg-[#e8cba8]"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#platforms"
              className="px-8 py-4 bg-[#6e1714] text-[#fff8ed] text-sm font-sans tracking-widest uppercase font-semibold transition-all hover:bg-[#9c4a2d] hover:shadow-lg rounded-sm"
            >
              Order Now
            </a>
            <a
              href="#reader-care"
              className="px-8 py-4 bg-transparent border border-[#6e1714] text-[#6e1714] text-sm font-sans tracking-widest uppercase font-semibold transition-all hover:bg-[#6e1714] hover:text-[#fff8ed] rounded-sm"
            >
              Reader Care
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
