"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Users,
  MessagesSquare,
  Activity,
  Snowflake,
  Megaphone,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { painBlock } from "@/lib/content";
import { AccentText, Container } from "@/components/primitives";

// One icon per pain, in order.
const painIcons: LucideIcon[] = [
  Users, // audience big, sales don't match
  MessagesSquare, // DMs full, calendar empty
  Activity, // feast-or-famine rollercoaster
  Snowflake, // leads go cold
  Megaphone, // ads lose money
  Layers, // you are everything
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const viewport = { once: true, amount: 0.2 } as const;

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

  const left = painBlock.pains.slice(0, 3);
  const right = painBlock.pains.slice(3, 6);

  // Scroll-reveal props, disabled under reduced motion (content shows static).
  const reveal = (from: Record<string, number>) =>
    reduce
      ? {}
      : {
          initial: from,
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport,
          transition: { duration: 0.7, ease: "easeOut" as const },
        };

  const staggerGroup = reduce
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: container,
      };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Decorative navy blobs, drifting on scroll (skipped for reduced motion). */}
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
        <motion.div
          className="flex flex-col items-center text-center"
          {...staggerGroup}
        >
          <motion.span
            variants={reduce ? undefined : item}
            className="eyebrow inline-flex items-center gap-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {painBlock.label}
          </motion.span>

          <motion.h2
            variants={reduce ? undefined : item}
            className="mt-4 max-w-3xl text-h2"
          >
            <AccentText text={painBlock.heading} />
          </motion.h2>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-5 h-1 w-20 rounded-full"
            style={{ backgroundColor: "var(--color-glow)" }}
          />

          <motion.p
            variants={reduce ? undefined : item}
            className="measure mt-6 text-lead text-ink-soft"
          >
            {painBlock.intro}
          </motion.p>
        </motion.div>

        {/* Three columns: pains / placeholder photo / pains */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <motion.div className="space-y-12" {...staggerGroup}>
            {left.map((pain, i) => (
              <PainItem key={i} title={pain.title} body={pain.body} Icon={painIcons[i]} />
            ))}
          </motion.div>

          {/* Center placeholder photo */}
          <motion.div
            className="flex items-start justify-center"
            {...reveal({ opacity: 0, scale: 0.95 })}
          >
            <div className="relative mx-auto w-full max-w-xs">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint">
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
                  Photo
                </span>
              </div>
              {/* Offset navy frame accent behind the photo. */}
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl border"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--color-glow) 45%, transparent)",
                }}
              />
            </div>
          </motion.div>

          <motion.div className="space-y-12" {...staggerGroup}>
            {right.map((pain, i) => (
              <PainItem
                key={i}
                title={pain.title}
                body={pain.body}
                Icon={painIcons[i + 3]}
              />
            ))}
          </motion.div>
        </div>

        {/* Bridge closer */}
        <motion.div
          className="mt-16 rounded-2xl bg-accent-tint p-8 sm:p-10"
          {...reveal({ opacity: 0, y: 24 })}
        >
          <p className="max-w-3xl text-h3 font-semibold leading-snug text-ink">
            {painBlock.bridge}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function PainItem({
  title,
  body,
  Icon,
}: {
  title: string;
  body: string;
  Icon: LucideIcon;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : item}
      whileHover={reduce ? undefined : { y: -4 }}
      className="group"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg transition-colors duration-300"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--color-glow) 10%, transparent)",
            color: "var(--color-glow)",
          }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-[1.1rem] font-bold leading-snug tracking-tight text-ink">
          {title}
        </h3>
      </div>
      <p className="mt-3 pl-14 text-[0.95rem] text-ink-soft">{body}</p>
    </motion.div>
  );
}
