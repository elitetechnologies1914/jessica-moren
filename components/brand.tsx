"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const brands = [
  { name: "Barnes & Noble", src: "/barnesandnoble.webp" },
  { name: "Everand", src: "/everland.webp" },
  { name: "Google Books", src: "/googlebooks.webp" },
  { name: "Walmart", src: "/wallmart.webp" },
  { name: "Rakuten Kobo", src: "/kobo.png" },
  { name: "BAM!", src: "/bam.webp" },
  { name: "Amazon Books", src: "/amazonbooks.webp" },
];

// Double the array to allow for seamless loop
const duplicatedBrands = [...brands, ...brands];

export default function BrandSection() {
  return (
    <section className="bg-[#faf8fa] py-12 overflow-hidden border-b border-black/5">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className={`${cormorant.className} text-[3.2rem] font-bold text-[#1a120c] leading-tight`}>
          Available Globally
        </h2>
        <p className="mt-2 text-lg text-gray-600/90 font-light tracking-wide">
          Find the book on your preferred platform below.
        </p>
      </div>

      <div className="relative mt-10 flex w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[#faf8fa] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-[#faf8fa] after:to-transparent">
        <motion.div 
          className="flex w-max shrink-0 items-center gap-20 px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div key={i} className="relative flex h-12 w-40 shrink-0 items-center justify-center opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105">
              <Image 
                src={brand.src} 
                alt={brand.name} 
                fill 
                className="object-contain" 
                sizes="(max-width: 768px) 160px, 160px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}