"use client";

import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const retailers = [
  { name: "Amazon Books", logo: "/amazonbooks.webp" },
  { name: "Barnes & Noble", logo: "/barnesandnoble.webp" },
  { name: "Books-A-Million", logo: "/bam.webp" },
  { name: "Rakuten Kobo", logo: "/kobo.png" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="intro"
      className="relative -mt-24 flex min-h-[100svh] items-end overflow-hidden bg-[#6e1714] text-white sm:-mt-28"
    >
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 h-full w-full"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/Hero-bg.jpeg"
            alt="A sunlit road extending toward the horizon"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        
        {/* Modern Gradients for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(214,163,90,0.22),transparent_40%),linear-gradient(180deg,rgba(110,23,20,0.26)_0%,rgba(110,23,20,0.18)_18%,rgba(38,34,35,0.48)_48%,rgba(38,34,35,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(110,23,20,0.55)_0%,rgba(110,23,20,0.06)_30%,rgba(38,34,35,0.1)_72%,rgba(38,34,35,0.55)_100%)]" />
        
        {/* Subtle Textural Grid */}
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(rgba(255,245,229,0.8)_0.5px,transparent_0.5px)] [background-size:12px_12px]" />
        
        {/* Ethereal Center Glow behind Text (optimized static glow to prevent scroll lag) */}
        <div 
          className="absolute left-1/2 top-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6a35a] opacity-15 blur-[120px] pointer-events-none" 
        />
      </motion.div>

      <motion.div 
        style={{ opacity, willChange: "opacity" }}
        className="relative z-10 mx-auto flex w-full max-w-6xl justify-center px-5 pb-20 pt-24 text-center sm:px-8 sm:pb-24 sm:pt-32 lg:pt-36"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-[#e8cba8] sm:text-sm"
          >
            A memoir of survival, recovery &amp; home
          </motion.p>
          <h1
            className={`${cormorant.className} text-[4.8rem] leading-[0.95] tracking-[-0.01em] text-[#fff8f0] drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] sm:text-[7.2rem] lg:text-[8.5rem]`}
          >
            <span className="block overflow-hidden py-1">
              <motion.span 
                className="block"
                initial={{ y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Finding My 
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span 
                className="block"
                initial={{ y: "110%", rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              >
                Journey
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className={`${greatVibes.className} mt-8 text-3xl tracking-wide text-[#fff8ed]/90 drop-shadow-lg sm:mt-10 sm:text-[2.25rem]`}
          >
           From an orphanage in Romania to a new life in Toronto, Raina Samantha Evangelista tells the truth about adoption, bullying, mental-health struggles, recovery, faith, love, and the decision to keep moving forward.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="mt-12 flex flex-col items-center justify-center gap-5 sm:mt-16 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#journey"
                className="group relative inline-flex min-w-[16rem] items-center justify-center overflow-hidden rounded-full bg-[#b82d26] px-8 py-4.5 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(184,45,38,0.4)] transition-all duration-300 hover:bg-[#9c4a2d] hover:shadow-[0_8px_40px_rgba(184,45,38,0.6)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
                <span className="relative z-10 tracking-wide">Explore The Memoir</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#author"
                className="group relative inline-flex min-w-[16rem] items-center justify-center gap-3 rounded-full border border-white/20 bg-black/20 px-8 py-4.5 text-lg font-medium text-[#fff8ed] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <span className="tracking-wide">Meet Raina</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            className="mt-9 flex flex-col items-center gap-4 sm:mt-11"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#e8cba8]/90">
              Available on
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {retailers.map((retailer) => (
                <Link
                  key={retailer.name}
                  href="#platforms"
                  aria-label={`Find Finding My Journey on ${retailer.name}`}
                  className="group flex h-11 w-[112px] items-center justify-center rounded-lg border border-[#fff8ed]/20 bg-[#fff8ed]/92 px-3 shadow-[0_8px_24px_rgba(38,34,35,0.2)] transition-transform duration-200 hover:-translate-y-1 hover:bg-white sm:w-[126px]"
                >
                  <Image
                    src={retailer.logo}
                    alt={retailer.name}
                    width={112}
                    height={36}
                    sizes="126px"
                    className="max-h-6 w-auto max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Smooth blending into the next section */}
      <p className="absolute bottom-8 left-1/2 z-10 w-full -translate-x-1/2 px-6 text-center text-xs uppercase tracking-[0.24em] text-[#fff8ed]/70 sm:bottom-10">
        For anyone who has ever felt lost inside their own story.
      </p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#262223] via-[#262223]/70 to-transparent" />
    </section>
  );
}
