"use client";

// Auto-cycling feature carousel for the Services section. Adapted from a
// 21st.dev component into the AthleteOS monochrome/chalk brand: no dark mode,
// no bright accents, slate + linen only. Images are on-brand placeholder
// panels for now — swap each panel for a real screenshot when Cam has them.

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { services } from "@/lib/content";
import { CheckIcon } from "@/components/primitives";
import { serviceMocks } from "@/components/ServiceMockups";

const steps = services.steps;
const TOTAL_STEPS = steps.length;
const CYCLE_MS = 5000;

/** Advances the active step on a timer; resets whenever the step changes
 *  (auto-tick or manual click), so a click restarts the countdown. */
function useNumberCycler(total = TOTAL_STEPS, interval = CYCLE_MS) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(
      () => setCurrent((prev) => (prev + 1) % total),
      interval,
    );
    return () => clearTimeout(id);
  }, [current, total, interval]);

  const setStep = useCallback((i: number) => setCurrent(i % total), [total]);

  return { current, setStep };
}

const stepVariants: Variants = {
  inactive: { scale: 0.95, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
};

// Placeholder panel positions per step, laid out INSIDE the visual column
// (its own grid cell), so they never crowd the text. Shown on md+ only.
const panelLayouts: string[][] = [
  ["right-0 top-[4%] w-[82%]", "left-0 bottom-[4%] w-[76%]"],
  ["right-0 top-[6%] w-[78%]", "left-0 bottom-[6%] w-[72%]"],
  ["left-1/2 top-1/2 w-[94%] -translate-x-1/2 -translate-y-1/2"],
  ["left-1/2 top-1/2 w-[94%] -translate-x-1/2 -translate-y-1/2"],
];

const panelAnim = {
  initial: { opacity: 0, y: 16, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { type: "spring", stiffness: 300, damping: 26, mass: 0.5 },
} as const;

const panelClass =
  "overflow-hidden rounded-xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint shadow-[0_24px_50px_-24px_oklch(0.24_0.01_265/0.55)]";

/** Desktop-only floating preview panels, contained within their column. */
function StepVisual({ step }: { step: number }) {
  const layout = panelLayouts[step] ?? [];
  const labels = steps[step].panels;
  const images = steps[step].images;
  const mocks = steps[step].mocks;
  return (
    <div className="pointer-events-none relative hidden h-full min-h-[360px] md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {layout.map((pos, i) => {
            const img = images?.[i];
            const MockComp = mocks?.[i] ? serviceMocks[mocks[i]] : null;
            return (
              <motion.div
                key={`${step}-${i}`}
                className={`absolute aspect-[16/10] ${panelClass} ${pos}`}
                {...panelAnim}
                transition={{ ...panelAnim.transition, delay: i * 0.1 }}
              >
                {img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img}
                    alt={labels?.[i] ?? "Preview"}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ) : MockComp ? (
                  <MockComp />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
                    {labels?.[i] ?? "Preview"}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function FeatureCard({ step }: { step: number }) {
  const mobileMockKey = steps[step].mocks?.[0];
  const MobileMock = mobileMockKey ? serviceMocks[mobileMockKey] : null;
  return (
    <div className="glow relative w-full overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="grid items-center gap-10 p-8 sm:p-10 md:grid-cols-2 md:gap-14 md:p-14">
        {/* Text column */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="flex w-full flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {steps[step].name}
            </motion.div>
            <motion.h3
              className="text-h3 font-bold tracking-tight text-ink"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {steps[step].title}
            </motion.h3>
            <motion.p
              className="text-[0.95rem] font-semibold text-ink"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.13, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {steps[step].framing}
            </motion.p>
            <motion.p
              className="text-[0.98rem] leading-relaxed text-ink-soft"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {steps[step].description}
            </motion.p>

            {/* Mobile: a single stacked preview so the card isn't empty and
                nothing overlaps the text. */}
            <div
              className={`relative mt-4 aspect-[16/10] w-full md:hidden ${panelClass}`}
            >
              {steps[step].images?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={steps[step].images[0]}
                  alt={steps[step].panels?.[0] ?? "Preview"}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : MobileMock ? (
                <MobileMock />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
                  {steps[step].panels?.[0] ?? "Preview"}
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Visual column (desktop) */}
        <StepVisual step={step} />
      </div>
    </div>
  );
}

function StepsNav({
  current,
  onChange,
}: {
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav aria-label="Progress" className="mt-10 flex justify-center px-4">
      <ol className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((step, i) => {
          const isCompleted = current > i;
          const isCurrent = current === i;
          return (
            <motion.li
              key={step.name}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => onChange(i)}
                aria-current={isCurrent ? "step" : undefined}
                className={`group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  isCurrent
                    ? "bg-accent text-on-accent"
                    : "border border-line bg-surface text-ink-soft hover:border-ink/25 hover:text-ink"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold transition-colors ${
                    isCompleted
                      ? "bg-accent text-on-accent"
                      : isCurrent
                        ? "bg-on-accent/20 text-on-accent"
                        : "bg-surface-2 text-ink-soft group-hover:bg-line"
                  }`}
                >
                  {isCompleted ? <CheckIcon className="h-3 w-3" /> : i + 1}
                </span>
                <span className="hidden sm:inline-block">{step.name}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

export function FeatureCarousel() {
  const { current, setStep } = useNumberCycler();
  return (
    <div className="mx-auto w-full max-w-5xl">
      <FeatureCard step={current} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <StepsNav current={current} onChange={setStep} />
      </motion.div>
    </div>
  );
}
