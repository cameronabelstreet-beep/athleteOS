"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Founder photo slot that crossfades through a set of images. Auto-advances
 * every few seconds; holds on the first image under reduced motion. All images
 * are stacked and toggled by opacity so there is no layout shift.
 */
export function BioPhoto({
  images,
  alt,
  interval = 4000,
}: {
  images: string[];
  alt: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || images.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [reduce, images.length, interval]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
