"use client";

import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 760);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[110] grid place-items-center overflow-hidden bg-[#11100f] text-[#f7f1e8] transition-[opacity,visibility] duration-500 ${visible ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="paper-grain absolute inset-0 opacity-50" />
      <div className="relative flex flex-col items-center px-6 text-center">
        <Crown className="mb-5 h-8 w-8 text-[#d8b76a]" strokeWidth={1.4} />
        <p className="font-display text-4xl font-semibold tracking-[0.08em] sm:text-5xl">JESSICA MOREN</p>
        <p className="eyebrow mt-4 text-[#d8b76a]">The Perimenopausal Princess</p>
        <div className="mt-7 h-px w-56 overflow-hidden bg-white/15">
          <div className="preloader-sweep h-full w-2/5 bg-gradient-to-r from-transparent via-[#d8b76a] to-transparent" />
        </div>
      </div>
    </div>
  );
}
