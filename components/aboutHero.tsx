"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "./aboutHero.module.css";

gsap.registerPlugin(useGSAP);

const tickerItems = [
  "Meet Jessica Moren",
  "Part princess",
  "Part pit bull",
  "The crown is optional",
] as const;

export default function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitFloatRef = useRef<HTMLDivElement>(null);
  const portraitTiltRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current;
      const portrait = portraitRef.current;
      const portraitFloat = portraitFloatRef.current;
      const portraitTilt = portraitTiltRef.current;
      const ticker = tickerRef.current;
      const orbit = orbitRef.current;

      if (
        !hero ||
        !portrait ||
        !portraitFloat ||
        !portraitTilt ||
        !ticker ||
        !orbit
      ) {
        return;
      }

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

        intro
          .from(
            "[data-hero-line]",
            {
              autoAlpha: 0,
              x: -140,
              rotation: -5,
              stagger: 0.11,
              duration: 1.05,
            },
            0.08,
          )
          .from(
            "[data-name-word]",
            {
              autoAlpha: 0,
              y: 100,
              skewX: -12,
              stagger: 0.14,
              duration: 1.15,
            },
            0.15,
          )
          .from(
            portrait,
            {
              autoAlpha: 0,
              yPercent: 24,
              scale: 0.76,
              rotation: 7,
              duration: 1.45,
              ease: "expo.out",
            },
            0.12,
          )
          .from(
            "[data-hero-copy]",
            {
              autoAlpha: 0,
              x: 130,
              duration: 1.05,
            },
            0.55,
          )
          .from(
            ticker.parentElement,
            {
              yPercent: 100,
              duration: 0.75,
            },
            0.72,
          );

        gsap.to(ticker, {
          xPercent: -50,
          duration: 24,
          ease: "none",
          repeat: -1,
        });

        gsap.to(portraitFloat, {
          y: -12,
          rotation: -0.65,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(orbit, {
          rotation: 360,
          duration: 24,
          ease: "none",
          repeat: -1,
        });

        gsap.to("[data-glow-pulse]", {
          scale: 1.13,
          opacity: 0.88,
          duration: 2.8,
          ease: "sine.inOut",
          stagger: 0.4,
          repeat: -1,
          yoyo: true,
        });

        gsap.to("[data-name-word='jessica']", {
          x: -8,
          duration: 2.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to("[data-name-word='moren']", {
          x: 8,
          duration: 2.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        const portraitX = gsap.quickTo(portraitTilt, "x", {
          duration: 0.9,
          ease: "power3.out",
        });
        const portraitRotation = gsap.quickTo(portraitTilt, "rotation", {
          duration: 0.9,
          ease: "power3.out",
        });
        const orbitX = gsap.quickTo(orbit, "x", {
          duration: 1.2,
          ease: "power3.out",
        });

        const handlePointerMove = (event: PointerEvent) => {
          const bounds = hero.getBoundingClientRect();
          const horizontal =
            (event.clientX - bounds.left) / bounds.width - 0.5;

          portraitX(horizontal * 24);
          portraitRotation(horizontal * 2.2);
          orbitX(horizontal * -36);
        };

        const handlePointerLeave = () => {
          portraitX(0);
          portraitRotation(0);
          orbitX(0);
        };

        hero.addEventListener("pointermove", handlePointerMove);
        hero.addEventListener("pointerleave", handlePointerLeave);

        return () => {
          hero.removeEventListener("pointermove", handlePointerMove);
          hero.removeEventListener("pointerleave", handlePointerLeave);
        };
      });

      return () => media.revert();
    },
    { scope: heroRef },
  );

  return (
    <section ref={heroRef} id="about-intro" className={styles.hero}>
      <div className={styles.glowCenter} data-glow-pulse aria-hidden="true" />
      <div className={styles.glowCorner} data-glow-pulse aria-hidden="true" />
      <div className={styles.glowEdge} data-glow-pulse aria-hidden="true" />
      <div ref={orbitRef} className={styles.orbit} aria-hidden="true" />
      <div className={`${styles.grain} paper-grain`} aria-hidden="true" />

      <div className={styles.manifesto} aria-label="Part princess. Part pit bull in a tutu.">
        <span data-hero-line>Part</span>
        <span data-hero-line>Princess.</span>
        <span data-hero-line>Part pit</span>
        <span data-hero-line>bull in a</span>
        <span data-hero-line>tutu.</span>
      </div>

      <h1 className={styles.name} aria-label="Jessica Moren">
        <span data-name-word="jessica">Jessica</span>{" "}
        <span data-name-word="moren">Moren</span>
      </h1>

      <div ref={portraitRef} className={styles.portrait}>
        <div ref={portraitFloatRef} className={styles.portraitFloat}>
          <div ref={portraitTiltRef} className={styles.portraitTilt}>
            <Image
              src="/author-images/Cowgirl Biker Portrait Cutout.png"
              alt="Jessica Moren wearing a cowboy hat and black leather outfit"
              fill
              priority
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 28vw"
              className={styles.portraitImage}
            />
          </div>
        </div>
      </div>

      <p className={styles.summary} data-hero-copy>
        Jessica writes about the bits we are usually told to make prettier:
        the body that won&apos;t cooperate, complicated love, the family you
        cannot fix, and the self you sometimes have to fight to remember.
      </p>

      <div className={styles.ticker} aria-label="Meet Jessica Moren">
        <div ref={tickerRef} className={styles.tickerTrack}>
          {[0, 1].map((group) => (
            <div
              key={group}
              className={styles.tickerGroup}
              aria-hidden={group === 1}
            >
              {tickerItems.map((item) => (
                <span key={`${group}-${item}`} className={styles.tickerItem}>
                  {item}
                  <span className={styles.tickerStar} aria-hidden="true">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
