"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AccentText, LogoMark } from "@/components/primitives";

/**
 * On-brand parallax band that sits between the Results proof block and the
 * "Made for fitness..." section. Driven by GSAP ScrollTrigger on native scroll
 * (no site-wide smooth scroll). Layers are all local (SVG rings, a glow, the
 * AthleteOS mark, and a tagline) so nothing is hotlinked. Respects reduced motion.
 *
 * The background gradient runs chalk (--bg, matches Results) into surface
 * (matches the next section) so the band bridges the two smoothly.
 */
export function ResultsParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const root = ref.current;
    const layersEl = root?.querySelector("[data-parallax-layers]");
    if (!root || !layersEl) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: layersEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
        },
      });

      // Back layers drift most, the subject (tagline) drifts least -> depth.
      const layers = [
        { layer: "1", yPercent: 32 },
        { layer: "2", yPercent: 22 },
        { layer: "3", yPercent: 12 },
        { layer: "4", yPercent: 5 },
      ];

      layers.forEach((l, idx) => {
        tl.to(
          layersEl.querySelectorAll(`[data-parallax-layer="${l.layer}"]`),
          { yPercent: l.yPercent, ease: "none" },
          idx === 0 ? undefined : "<",
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="AthleteOS"
      className="relative overflow-hidden bg-gradient-to-b from-bg to-surface"
    >
      <div
        data-parallax-layers
        className="relative h-[68vh] max-h-[720px] min-h-[520px] w-full"
      >
        {/* Layer 1 — soft glow + large ring (drifts most) */}
        <div
          data-parallax-layer="1"
          aria-hidden
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <div
            className="absolute h-[520px] w-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(0,62,145,0.16), transparent)",
            }}
          />
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="h-[min(82vw,600px)] w-[min(82vw,600px)] text-[#003e91]/15"
          >
            <circle
              cx="300"
              cy="300"
              r="298"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Layer 2 — inner ring */}
        <div
          data-parallax-layer="2"
          aria-hidden
          className="absolute inset-0 z-[1] flex items-center justify-center"
        >
          <svg
            viewBox="0 0 400 400"
            fill="none"
            className="h-[min(56vw,400px)] w-[min(56vw,400px)] text-[#003e91]/20"
          >
            <circle
              cx="200"
              cy="200"
              r="198"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Layer 3 — the mark, sitting above center */}
        <div
          data-parallax-layer="3"
          className="absolute inset-0 z-[2] flex items-center justify-center"
        >
          <LogoMark className="h-20 w-20 -translate-y-[104px] text-accent" />
        </div>

        {/* Layer 4 — the subject line (drifts least) */}
        <div
          data-parallax-layer="4"
          className="absolute inset-0 z-[3] flex items-center justify-center px-6"
        >
          <div className="translate-y-[20px] text-center">
            <h2 className="text-[clamp(2rem,1.2rem+3vw,3.5rem)] font-black tracking-[-0.03em] text-ink">
              <AccentText text="{accent:Scaling} fitness brands." />
            </h2>
            <p className="mt-3 text-lead text-ink-soft">
              The system behind every result above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
