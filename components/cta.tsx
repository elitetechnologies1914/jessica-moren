"use client";

import React from "react";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#262223] py-32" id="reader-care">
      {/* Subtle Background Glows for Cinematic Feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#b82d26]/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#9c4a2d]/15 rounded-full blur-[100px]" />
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-[#d6a35a]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="block mb-6 md:mb-10 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.4em] text-[#e8cba8]/80">
            Reader care
          </span>

          <h2 className={`${greatVibes.className} text-4xl md:text-6xl lg:text-7xl font-medium text-[#fff8ed] leading-[1.2] tracking-wide mb-8`}>
            Please read at your own pace.
          </h2>

          <p className="mb-10 max-w-3xl text-base leading-7 text-[#fff8ed]/80 md:text-lg">
            Finding My Journey includes references to adoption and childhood trauma, bullying, disordered eating, self-harm, suicidal thoughts and attempts, psychiatric hospitalization, substance use, sexual assault, grief, and relapse. This memoir shares lived experience; it does not replace professional care. If you or someone else is in immediate danger, contact local emergency services or a crisis service in your country.
          </p>

          <div className="w-16 h-[1px] bg-[#d6a35a] mb-12" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#platforms"
              className="px-10 py-4 bg-[#b82d26] text-[#fff8ed] text-sm font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-[#9c4a2d] hover:shadow-[0_0_30px_rgba(184,45,38,0.3)] rounded-sm w-full sm:w-auto text-center"
            >
              Get Your Copy
            </a>
            
            <a
              href="#letters"
              className="px-10 py-4 bg-transparent border border-[#e8cba8]/50 text-[#fff8ed] text-sm font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:bg-[#fff8ed] hover:text-[#6e1714] rounded-sm w-full sm:w-auto text-center"
            >
              Read Irena&apos;s note
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
