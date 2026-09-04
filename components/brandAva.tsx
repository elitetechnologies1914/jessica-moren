"use client"

import React from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const platforms = [
  { name: "Get the Book", detail: "Purchase details coming soon", link: "#book-details" },
  { name: "Join the Journey", detail: "Stay connected for author news", link: "#reader-care" },
  { name: "Reader Care", detail: "Read the content advisory", link: "#reader-care" },
];

export default function BrandAva() {
  return (
    <section id="platforms" className="w-full bg-gradient-to-br from-[#e8cba8] via-[#fff8ed] to-[#d4aaa0] py-20 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold text-[#6e1714] mb-4 tracking-tight`}>
            Begin the journey
          </h2>
          <p className="text-[#262223] text-base md:text-lg leading-relaxed">
            Finding My Journey is a candid memoir about survival, recovery, and the courage to take one more honest step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.link}
              className="group flex items-center justify-between bg-[#fff8ed] rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-[#6e1714] text-lg mb-1">
                  {platform.name}
                </span>
                <span className="text-[#262223]/70 text-sm">
                  {platform.detail}
                </span>
              </div>
              <div className="text-[#9c4a2d] group-hover:text-[#b82d26] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
