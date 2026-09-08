"use client"

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
});

const chaptersData = [
    {
        chapter: "PILLAR I",
        title: "Belonging begins with a question",
        text: "Adopted from Romania at age three and raised in Toronto, Raina grows up carrying both gratitude and questions about where she comes from.",
        image: "/images/1.png",
    },
    {
        chapter: "PILLAR II",
        title: "Silence has a cost",
        text: "Bullying, body image, anxiety, and shame teach her how easily pain can hide behind a smile.",
        image: "/images/2.png",
    },
    {
        chapter: "PILLAR III",
        title: "When coping turns dangerous",
        text: "Disordered eating, self-harm, substance use, hospital stays, and relapse bring the hidden struggle into the open.",
        image: "/images/3.png",
    },
    {
        chapter: "PILLAR IV",
        title: "Faith after grief",
        text: "The loss of her Nonna, vivid dreams, and a return to prayer become part of Raina's search for meaning.",
        image: "/images/4.png",
    },
    {
        chapter: "PILLAR V",
        title: "The people who keep reaching",
        text: "Family, her brother, Bailey, Brandon, and Andrew remind her that love can stay present through difficult chapters.",
        image: "/images/journey-road.jpg",
    },
    {
        chapter: "PILLAR VI",
        title: "A life built for purpose",
        text: "Recovery leads Raina back to education and work supporting children, youth, and adults with mental-health and developmental challenges.",
        image: "/images/writing-journal.jpg",
    },
];

export default function Chapter() {
    const containerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const texts = gsap.utils.toArray<HTMLElement>(".chapter-text-section");
            const images = gsap.utils.toArray<HTMLElement>(".chapter-image");

            // Only run sticky crossfade logic on desktop (matchMedia)
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                gsap.set(images, { opacity: 0, scale: 1.05, zIndex: 0 });
                gsap.set(images[0], { opacity: 1, scale: 1, zIndex: 1 }); // First image visible

                texts.forEach((section, i) => {
                    ScrollTrigger.create({
                        trigger: section,
                        start: "top 50%",
                        end: "bottom 50%",
                        onEnter: () => {
                            gsap.to(images, { opacity: 0, scale: 1.05, zIndex: 0, duration: 0.8, ease: "power2.inOut", overwrite: "auto" });
                            gsap.to(images[i], { opacity: 1, scale: 1, zIndex: 1, duration: 0.8, ease: "power2.inOut", overwrite: "auto" });
                        },
                        onEnterBack: () => {
                            gsap.to(images, { opacity: 0, scale: 1.05, zIndex: 0, duration: 0.8, ease: "power2.inOut", overwrite: "auto" });
                            gsap.to(images[i], { opacity: 1, scale: 1, zIndex: 1, duration: 0.8, ease: "power2.inOut", overwrite: "auto" });
                        }
                    });
                });
            });

            // Text Reveal Logic (Runs on both mobile and desktop)
            texts.forEach((section) => {
                const elements = section.querySelectorAll(".reveal-elem");
                gsap.fromTo(elements,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
            });

            return () => mm.revert();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="journey" ref={containerRef} className="relative bg-[#fff8ed] text-[#262223]">
            <div className="flex flex-col md:flex-row w-full relative">

                {/* Left Sticky Column - Images (Desktop Only) */}
                <div className="hidden md:flex w-full md:w-1/2 md:h-screen md:sticky top-0 overflow-hidden items-center justify-center bg-[#e8cba8]">
                    {chaptersData.map((chapter, i) => (
                        <div key={i} className="chapter-image absolute inset-0 w-full h-full will-change-transform">
                            {/* Dark vignette/overlay for cinematic feel */}
                            <div className="absolute inset-0 bg-black/10 z-10" />
                            <Image
                                src={chapter.image}
                                alt={chapter.title}
                                fill
                                sizes="50vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Right Scrolling Column - Text */}
                <div className="w-full md:w-1/2 flex flex-col">
                    {chaptersData.map((chapter, i) => (
                        <div key={i} className="chapter-text-section min-h-screen flex flex-col justify-center p-8 md:p-24 relative">
                            
                            {/* Mobile Image (Hidden on Desktop) */}
                            <div className="md:hidden w-full h-[45vh] relative mb-10 rounded-xl overflow-hidden shadow-2xl reveal-elem">
                                <div className="absolute inset-0 bg-black/10 z-10" />
                                <Image
                                    src={chapter.image}
                                    alt={chapter.title}
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="max-w-md w-full relative z-10">
                                <span className="reveal-elem block mb-4 md:mb-6 text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-[#b82d26]">
                                    {chapter.chapter}
                                </span>
                                <h2 className={`reveal-elem ${cormorant.className} mb-6 md:mb-8 text-5xl md:text-7xl font-medium leading-tight text-[#6e1714] italic`}>
                                    {chapter.title}
                                </h2>
                                <div className="reveal-elem w-12 h-[1px] bg-[#d6a35a] mb-6 md:mb-8" />
                                <p className={`reveal-elem ${greatVibes.className} text-2xl md:text-3xl leading-relaxed text-[#262223]/80`}>
                                    {chapter.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
