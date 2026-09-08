"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let hideTimer: number | undefined;

    const finishLoading = () => {
      const remainingDelay = Math.max(0, 1150 - (performance.now() - startedAt));
      hideTimer = window.setTimeout(() => setIsVisible(false), remainingDelay);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#6e1714] transition-[opacity,visibility] duration-700 ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(214,163,90,0.32),transparent_34%),linear-gradient(180deg,rgba(110,23,20,0.92),rgba(38,34,35,1))]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,248,237,0.65)_0.6px,transparent_0.6px)] [background-size:14px_14px]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <p className="font-serif text-4xl tracking-[0.1em] text-[#fff8ed] preloader-logo-fade sm:text-5xl">
          RAINA SAMANTHA
        </p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.38em] text-[#e8cba8]/85">
          Finding My Journey
        </p>
      </div>
    </div>
  );
}
