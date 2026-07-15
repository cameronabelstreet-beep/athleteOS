"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const quotes = testimonials.quotes;
  const [index, setIndex] = useState(0);
  const count = quotes.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>{testimonials.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={testimonials.heading} />
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-[15rem] md:text-right">
            {testimonials.placeholderNote}
          </p>
        </Reveal>

        {/* Slider. Motion is intentionally basic; the polished animation is a
            second pass. Controls + dots make it fully functional now. */}
        <Reveal className="mt-10 overflow-hidden" delay={0.15}>
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {quotes.map((q, i) => (
              <figure
                key={i}
                className="w-full shrink-0 px-1"
                aria-hidden={i !== index}
              >
                <div className="glow rounded-3xl border border-line bg-surface p-8 sm:p-12">
                  <blockquote
                    className="max-w-3xl text-h3 font-medium leading-snug text-ink"
                  >
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-tint text-sm font-bold text-accent-strong"
                      aria-hidden
                    >
                      {q.role.slice(0, 1)}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">
                        {q.name}
                      </span>
                      <span className="block text-sm text-muted">{q.role}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-between">
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
