"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { painBlock } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Glow } from "@/components/Glow";

export function PainBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax drift for the decorative navy blobs.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            style={{
              y: y1,
              backgroundColor:
                "color-mix(in oklab, var(--color-glow) 12%, transparent)",
            }}
            className="pointer-events-none absolute left-[4%] top-24 -z-10 h-64 w-64 rounded-full blur-3xl"
          />
          <motion.div
            aria-hidden
            style={{
              y: y2,
              backgroundColor:
                "color-mix(in oklab, var(--color-glow) 10%, transparent)",
            }}
            className="pointer-events-none absolute bottom-24 right-[4%] -z-10 h-72 w-72 rounded-full blur-3xl"
          />
        </>
      )}

      <Container>
        {/* Header */}
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>{painBlock.label}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-h2">
            <AccentText text={painBlock.heading} />
          </h2>
          <div
            className="mt-5 h-1 w-20 rounded-full"
            style={{ backgroundColor: "var(--color-glow)" }}
          />
          <p className="measure mt-6 text-lead text-ink-soft">
            {painBlock.intro}
          </p>
        </Reveal>

        {/* Persona-targeting blocks. Each validates first, then names the gap.
            The dashed slot marks where Cam's "if yes, meet [client]" result
            story drops in on the second pass. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {painBlock.personas.map((question, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <p className="text-[1.05rem] font-medium leading-snug text-ink">
                  {question}
                </p>
                <div className="mt-4 rounded-xl border border-dashed border-line bg-bg p-3 text-center">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
                    {painBlock.resultPlaceholder}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing line, paired with the section photo. */}
        <Reveal className="mt-14" delay={0.1}>
          <div className="grid items-center gap-8 rounded-3xl border border-line bg-accent-tint p-6 sm:p-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
            <div className="relative mx-auto w-full max-w-[16rem]">
              <Glow className="-inset-6 rounded-[2rem] blur-2xl" strength={42} />
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint">
                {painBlock.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={painBlock.image}
                    alt="Coach overwhelmed by a lead asking about price"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                  />
                ) : null}
              </div>
            </div>
            <p className="text-h3 font-semibold leading-snug text-ink">
              {painBlock.bridge}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
