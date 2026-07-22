"use client";

import { useState } from "react";
import { testimonials, reviews } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

function Stars({ value = 5 }: { value?: number }) {
  return (
    <span className="inline-flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${i < value ? "text-accent" : "text-line"}`}
          fill="currentColor"
        >
          <path d="M10 1.6l2.47 5.19 5.7.66-4.22 3.86 1.13 5.63L10 14.98l-5.08 2.56 1.13-5.63L1.83 8.05l5.7-.66z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  const quotes = testimonials.quotes;
  const [index, setIndex] = useState(0);
  const count = quotes.length;
  const maxBar = Math.max(...reviews.breakdown.map((b) => b.count), 1);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-xl">
          <Eyebrow>{reviews.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={reviews.heading} />
          </h2>
        </Reveal>

        <Reveal className="mt-10" delay={0.1}>
          <div className="glow rounded-3xl border border-line bg-bg p-8 sm:p-10">
            {/* Rating summary */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <div className="flex items-end gap-3">
                  <span
                    className="text-[3.5rem] font-extrabold leading-none text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStretch: "112%",
                    }}
                  >
                    {reviews.rating}
                  </span>
                  <span className="pb-2 text-lg text-muted">
                    / {reviews.outOf}
                  </span>
                </div>
                <div className="mt-3">
                  <Stars value={5} />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {reviews.breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-3">
                    <span className="w-12 shrink-0 text-sm font-medium text-ink-soft">
                      {b.stars} star
                    </span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <span
                        className="block h-full rounded-full bg-accent"
                        style={{ width: `${(b.count / maxBar) * 100}%` }}
                      />
                    </span>
                    <span className="w-8 shrink-0 text-right text-sm tabular-nums text-muted">
                      {b.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8 border-t border-line" />

            {/* Rotating quote */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {quotes.map((q, i) => (
                  <figure
                    key={i}
                    className="w-full shrink-0"
                    aria-hidden={i !== index}
                  >
                    <blockquote className="text-h3 font-medium leading-snug text-ink">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      {q.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={q.image}
                          alt={q.name}
                          loading="lazy"
                          className="h-11 w-11 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-tint text-sm font-bold text-accent-strong"
                          aria-hidden
                        >
                          {q.name.slice(0, 1)}
                        </span>
                      )}
                      <span>
                        <span className="block font-semibold text-ink">
                          {q.name}
                        </span>
                        <span className="block text-sm text-muted">
                          {q.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-accent" : "w-2 bg-line hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <SliderButton label="Previous testimonial" onClick={() => go(-1)}>
                  <path d="M12 4.5 6.5 10l5.5 5.5" />
                </SliderButton>
                <SliderButton label="Next testimonial" onClick={() => go(1)}>
                  <path d="M8 4.5 13.5 10 8 15.5" />
                </SliderButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function SliderButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-ink/30 hover:bg-surface"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </button>
  );
}
