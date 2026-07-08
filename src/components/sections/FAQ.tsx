"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  Eyebrow,
} from "@/components/primitives";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>{faq.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={faq.heading} />
            </h2>
            <div className="mt-8 hidden lg:block">
              <CTAButton size="lg">{faq.cta}</CTAButton>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-line">
              {faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={i} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[1.1rem] font-semibold tracking-tight text-ink">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-transform duration-300 ${
                          isOpen ? "rotate-45 bg-accent text-on-accent" : "text-ink"
                        }`}
                        aria-hidden
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <path d="M10 4v12M4 10h12" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="measure pb-6 text-ink-soft">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 lg:hidden">
              <CTAButton size="lg" className="w-full">
                {faq.cta}
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
