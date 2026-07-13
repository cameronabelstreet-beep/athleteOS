"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { CTAButton, Wordmark, applyHref } from "@/components/primitives";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-white/10 bg-[#19192e]/90 backdrop-blur-md"
            : "border-white/5 bg-[#19192e]"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[76rem] items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            aria-label="AthleteOS home"
            className="flex shrink-0 items-center gap-2.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.png"
              alt="AthleteOS"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <Wordmark className="text-white" osClassName="text-[#4d8ef0]" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <CTAButton size="md">{nav.cta}</CTAButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          >
            <span className="relative block h-3.5 w-4.5">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/20 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-3 top-20 rounded-2xl border border-line bg-bg p-3 shadow-xl transition-[opacity,transform] duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <div className="p-2 pt-3">
              <CTAButton
                size="lg"
                className="w-full"
                href={applyHref}
              >
                {nav.cta}
              </CTAButton>
            </div>
          </nav>
        </div>
      </div>

      {/* Persistent mobile apply bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/90 p-3 backdrop-blur-md md:hidden">
        <CTAButton size="lg" className="w-full">
          {nav.cta}
        </CTAButton>
      </div>
    </>
  );
}
