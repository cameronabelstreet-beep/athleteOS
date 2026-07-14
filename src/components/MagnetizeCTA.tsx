"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { CTAButton } from "@/components/primitives";

type Particle = { x: number; y: number };

/**
 * Wraps the Apply Here CTA with navy particles that scatter around it and get
 * magnetized to the button on hover (and touch). Particles use the brand navy
 * glow color. No animation library — pure CSS transitions with a slight
 * overshoot easing to mimic the spring. Particles are generated after mount to
 * avoid an SSR/hydration mismatch, and hidden entirely under reduced motion.
 */
export function MagnetizeCTA({
  children,
  href,
  count = 34,
  spreadX = 1360,
  spreadUp = 440,
  spreadDown = 170,
}: {
  children: ReactNode;
  href?: string;
  count?: number;
  spreadX?: number;
  spreadUp?: number;
  spreadDown?: number;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [attracting, setAttracting] = useState(false);

  useEffect(() => {
    // Scatter across the whole hero: wide on x, and biased upward on y (the
    // button sits low in the hero) so particles reach up toward the headline.
    setParticles(
      Array.from({ length: count }, () => ({
        x: Math.round(Math.random() * spreadX - spreadX / 2),
        y: Math.round(Math.random() * (spreadUp + spreadDown) - spreadUp),
      })),
    );
  }, [count, spreadX, spreadUp, spreadDown]);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setAttracting(true)}
      onMouseLeave={() => setAttracting(false)}
      onTouchStart={() => setAttracting(true)}
      onTouchEnd={() => setAttracting(false)}
    >
      {/* Particles sit behind the button, so magnetized ones tuck in behind it. */}
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] motion-reduce:hidden"
          style={{
            transform: attracting
              ? "translate(-50%, -50%) scale(0.6)"
              : `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,
            opacity: attracting ? 0.9 : 0.55,
            transition:
              "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1.15), opacity 0.4s ease",
          }}
        />
      ))}
      <CTAButton href={href} size="lg" className="relative touch-none">
        {children}
      </CTAButton>
    </div>
  );
}
