"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./authorImageSection.module.css";

gsap.registerPlugin(ScrollTrigger, Flip, ExpoScaleEase, useGSAP);

const images = [
  "/author-images/1.jpg",
  "/author-images/12.jpg",
  "/author-images/16.png",
  "/author-images/13.jpg",
  "/author-images/15.jpg",
  "/author-images/16.jpg",
  "/author-images/7.jpg",
  "/author-images/14.jpg",
];

export default function AuthorImageSection() {
  const rootRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const gallery = galleryRef.current;

      if (!root || !gallery) return;

      const items = gsap.utils.toArray<HTMLElement>(
        `.${styles.item}`,
        gallery,
      );
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

      let timeline: gsap.core.Timeline | undefined;

      const createAnimation = () => {
        timeline?.scrollTrigger?.kill();
        timeline?.kill();

        gallery.classList.remove(styles.final);
        gsap.set(items, { clearProps: "all" });

        if (reduceMotion.matches) return;

        // FLIP needs to measure the expanded grid before returning to the bento.
        gallery.classList.add(styles.final);
        const finalState = Flip.getState(items);
        gallery.classList.remove(styles.final);

        const flip = Flip.to(finalState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        timeline = gsap
          .timeline({
            scrollTrigger: {
              trigger: gallery,
              start: "center center",
              end: "+=100%",
              scrub: true,
              pin: root,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .add(flip, 0);
      };

      const rebuild = gsap.delayedCall(0.2, () => {
        createAnimation();
        ScrollTrigger.refresh();
      });
      rebuild.pause();

      const handleResize = () => rebuild.restart(true);
      const handleMotionChange = () => {
        createAnimation();
        ScrollTrigger.refresh();
      };

      createAnimation();
      window.addEventListener("resize", handleResize);
      reduceMotion.addEventListener("change", handleMotionChange);

      return () => {
        window.removeEventListener("resize", handleResize);
        reduceMotion.removeEventListener("change", handleMotionChange);
        rebuild.kill();
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
        gallery.classList.remove(styles.final);
        gsap.set(items, { clearProps: "all" });
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      id="author-gallery"
      ref={rootRef}
      className={styles.section}
      aria-label="Author photo gallery"
    >
      <div ref={galleryRef} className={`${styles.gallery} ${styles.bento}`}>
        {images.map((src, index) => (
          <figure key={src} className={styles.item}>
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              loading={index < 4 ? "eager" : "lazy"}
              className={styles.image}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
