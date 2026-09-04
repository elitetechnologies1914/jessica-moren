"use client";

import Image from "next/image";
import styles from "./photoGrid.module.css";

const photos = [
  {
    src: "/chapter1.jpg",
    width: 880,
    height: 1168,
    title: "First Light",
    note: "The beginning of a life remembered in color.",
    alt: "Donna smiling in a purple suit outdoors",
    featured: true,
  },
  {
    src: "/chapter2.png",
    width: 898,
    height: 941,
    title: "Gathered",
    note: "Family, celebration, and the gravity of belonging.",
    alt: "Family gathered at a book celebration",
  },
  {
    src: "/chapter3.jpg",
    width: 1000,
    height: 1168,
    title: "Keepsake",
    note: "A preserved moment with a story behind it.",
    alt: "A treasured family photograph",
  },
  {
    src: "/chapter4.jpg",
    width: 1056,
    height: 976,
    title: "Together",
    note: "The warmth of people who know your whole heart.",
    alt: "Donna with loved ones at a celebration",
  },
  {
    src: "/chapter5.jpg",
    width: 912,
    height: 1136,
    title: "Portrait",
    note: "Soft strength, held still for the page.",
    alt: "A warm portrait from Donna's life",
  },
  {
    src: "/chapter6.jpg",
    width: 880,
    height: 1168,
    title: "Memory",
    note: "One image, many chapters folded inside.",
    alt: "A cherished memory with family",
  },
  {
    src: "/chapter13.jpg",
    width: 880,
    height: 1168,
    title: "Forever",
    note: "Love, carried forward through every season.",
    alt: "A warm family memory from Donna's story",
  },
];

export default function PhotoGrid() {
  return (
    <section className={styles.section} aria-label="Photo memories">
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Photo Gallery</p>
          <h2 className={styles.title}>Moments That Still Speak</h2>
        </div>
        <p className={styles.copy}>
          A modern memory wall for the photographs that carry Donna&apos;s story
          beyond the page.
        </p>
      </div>

      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <figure
            className={`${styles.card} ${photo.featured ? styles.featured : ""}`}
            key={photo.src}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes={
                photo.featured
                  ? "(max-width: 720px) 100vw, 52vw"
                  : "(max-width: 720px) 100vw, 28vw"
              }
              priority={index < 2}
              className={styles.image}
            />
            <figcaption className={styles.caption}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{photo.title}</strong>
                <small>{photo.note}</small>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
