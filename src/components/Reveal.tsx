"use client";

// Slow appear-on-scroll wrapper for copy blocks. Same idea as the pain-points
// reveal, dialed slower (~1.1s) so the motion is watchable as you scroll.
// Fades + lifts once when the block scrolls into view, then stays put. Respects
// reduced-motion (renders static).

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const viewport = { once: true, amount: 0.25 } as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
