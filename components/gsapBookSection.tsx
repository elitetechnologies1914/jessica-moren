"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Crown } from "lucide-react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./gsapBookSection.module.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP);

const storyPoints = [
  {
    number: "01",
    title: "The unraveling",
    text: "The moment the life she kept perfectly arranged stops feeling like her own.",
  },
  {
    number: "02",
    title: "The heat",
    text: "Sleepless nights, hot flashes, and the absurd advice women are expected to accept quietly.",
  },
  {
    number: "03",
    title: "The truth",
    text: "Marriage, motherhood, identity—and the dangerous relief of finally saying what she means.",
  },
  {
    number: "04",
    title: "The boundary",
    text: "No more shrinking, smoothing things over, or wearing a crown that was never made to fit.",
  },
  {
    number: "05",
    title: "The return",
    text: "A funny, furious, tender journey back to the woman beneath everyone else’s expectations.",
  },
] as const;

export default function GsapBookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const book = bookRef.current;
      const start = startRef.current;
      const end = endRef.current;

      if (!section || !book || !start || !end) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );
      let timeline: gsap.core.Timeline | undefined;

      const createTimeline = () => {
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
        gsap.set(book, { clearProps: "transform" });

        if (reduceMotion.matches) return;

        const bookRect = book.getBoundingClientRect();
        const bookCenter = {
          x: bookRect.left + bookRect.width / 2,
          y: bookRect.top + bookRect.height / 2,
        };
        const markers = gsap.utils.toArray<HTMLElement>(
          "[data-book-point]",
          section,
        );
        const points = markers.map((marker) => {
          const markerRect = marker.getBoundingClientRect();

          return {
            x: markerRect.left + markerRect.width / 2 - bookCenter.x,
            y: markerRect.top + markerRect.height / 2 - bookCenter.y,
          };
        });

        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: start,
            start: "clamp(top center)",
            endTrigger: end,
            end: "clamp(top center)",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(book, {
          duration: 1,
          ease: "none",
          motionPath: {
            path: points,
            curviness: 1.45,
          },
        });
      };

      const rebuild = gsap.delayedCall(0.2, () => {
        createTimeline();
        ScrollTrigger.refresh();
      });
      rebuild.pause();

      const handleResize = () => rebuild.restart(true);
      const handleMotionChange = () => {
        createTimeline();
        ScrollTrigger.refresh();
      };

      createTimeline();
      window.addEventListener("resize", handleResize);
      reduceMotion.addEventListener("change", handleMotionChange);

      return () => {
        window.removeEventListener("resize", handleResize);
        reduceMotion.removeEventListener("change", handleMotionChange);
        rebuild.kill();
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
        gsap.set(book, { clearProps: "transform" });
      };
    },
    { scope: sectionRef },
  );

  const pointClasses = [
    styles.pointOne,
    styles.pointTwo,
    styles.pointThree,
    styles.pointFour,
    styles.pointFive,
  ];

  return (
    <section ref={sectionRef} id="book-journey" className={styles.section}>
      <header className={styles.intro}>
        <div className={styles.introInner}>
          <p className="eyebrow text-[#d8b76a]">Inside book one</p>
          <h2 className={styles.title}>
            One book.
            <span>Five turning points.</span>
          </h2>
          <p className={styles.lede}>
            Scroll the journey. The crown travels through the moments that
            force a woman to stop performing—and start becoming herself.
          </p>
          <div className={styles.scrollCue} aria-hidden="true">
            <span /> Scroll to follow the book
          </div>
        </div>
      </header>

      <div className={styles.journey}>
        <div ref={startRef} className={styles.start}>
          <div ref={bookRef} className={styles.book}>
            <Image
              src="/book-mockup/ssss.png"
              alt="The Crown Doesn't Fit Anymore by Jessica Moren"
              fill
              sizes="(max-width: 767px) 42vw, (max-width: 1024px) 26vw, 384px"
              className={styles.bookImage}
            />
          </div>
        </div>

        {storyPoints.map((point, index) => (
          <article
            key={point.number}
            className={`${styles.point} ${pointClasses[index]}`}
          >
            <div className={styles.marker} data-book-point aria-hidden="true">
              <Crown />
            </div>
            <div className={styles.pointCopy}>
              <p className={styles.pointNumber}>Turning point {point.number}</p>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </article>
        ))}

        <div ref={endRef} className={styles.endMarker} aria-hidden="true" />
      </div>

      <footer className={styles.outro}>
        <Crown className={styles.outroCrown} aria-hidden="true" />
        <p className="eyebrow text-[#d8b76a]">The crown is optional</p>
        <h2>The woman wearing it is not.</h2>
        <p>
          A candid, wickedly funny story about midlife, identity, and finding
          your voice again.
        </p>
        <div className={styles.actions}>
          <Link href="/books#book-one">
            Explore book one <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/contact">Get release updates</Link>
        </div>
      </footer>
    </section>
  );
}
