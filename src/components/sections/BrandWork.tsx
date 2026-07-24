"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { brands } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

// Fan layout for a brand's photo cluster: spreads N cards left to right, the
// centre card sitting highest and flattest. No Math.random, so SSR stays stable.
function fanStyle(i: number, n: number) {
  if (n <= 1) return { x: "0%", y: 0, rotate: 0, z: 20 };
  const mid = (n - 1) / 2;
  const off = i - mid; // negative = left, positive = right
  // Outer cards land at ±46% of their own width (so it scales with size), the
  // spread distributed so the outermost cards sit at the same splay for any n.
  const spread = 92 / (n - 1);
  return {
    x: `${off * spread}%`,
    y: Math.round(Math.abs(off) * 8),
    rotate: (off / mid) * 13, // outer cards ±13deg
    z: 20 - Math.round(Math.abs(off) * 2),
  };
}

export function BrandWork() {
  const items = brands.items;
  const count = items.length;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const next = useCallback(() => setActive((p) => (p + 1) % count), [count]);
  const prev = () => setActive((p) => (p - 1 + count) % count);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [reduce, next]);

  return (
    <section className="relative overflow-hidden bg-surface pb-20 pt-6 sm:pb-28 sm:pt-10">
      <Container>
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-16">
          {/* LEFT: heading, supporting copy, and the rotating brand text */}
          <Reveal>
            <Eyebrow>{brands.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={brands.heading} />
            </h2>
            <p className="mt-4 text-lead text-ink-soft">{brands.sub}</p>

            <div className="mt-10 min-h-[9rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h3 className="text-h3 font-bold tracking-tight text-ink">
                    {items[active].brand}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-strong">
                    {items[active].role}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {items[active].note}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous brand"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-ink/30 hover:bg-surface"
              >
                <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next brand"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-ink/30 hover:bg-surface"
              >
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </Reveal>

          {/* RIGHT: the active brand's photos, fanned out as a cluster */}
          <Reveal
            className="flex justify-center md:justify-end"
            delay={0.1}
          >
            <div className="relative aspect-[4/5] w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {(items[active].images.length
                    ? items[active].images
                    : [""]
                  ).map((src, i, arr) => {
                    const f = fanStyle(i, arr.length);
                    return (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 w-[68%] -translate-x-1/2 -translate-y-1/2"
                        style={{ zIndex: f.z }}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, x: "0%", y: 24, rotate: 0 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            x: f.x,
                            y: f.y,
                            rotate: f.rotate,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: i * 0.08,
                          }}
                        >
                          {src ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={src}
                              alt={items[active].brand}
                              draggable={false}
                              className="aspect-[4/5] w-full rounded-3xl border border-line object-cover shadow-[0_20px_50px_-20px_oklch(0.24_0.01_265/0.5)]"
                            />
                          ) : (
                            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint shadow-[0_20px_50px_-20px_oklch(0.24_0.01_265/0.5)]">
                              <span className="text-sm font-semibold uppercase tracking-wider text-muted">
                                {items[active].brand}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
