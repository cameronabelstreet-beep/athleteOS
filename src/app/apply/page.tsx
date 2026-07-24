import type { Metadata } from "next";
import Link from "next/link";
import { applyPage, siteConfig } from "@/lib/content";
import { ApplyEmbed } from "@/components/ApplyEmbed";

export const metadata: Metadata = {
  title: "Apply — AthleteOS",
  description:
    "Watch the short video, then complete the 60-second application to see if you qualify to work with AthleteOS.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Minimal header: logo only, links home. */}
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center px-5 sm:px-8">
          <Link
            href="/"
            aria-label="AthleteOS home"
            className="flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-lockup.png"
              alt="AthleteOS"
              width={121}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Step 1: value video */}
        <section className="text-center lg:text-left">
          <p className="eyebrow">{applyPage.step1Label}</p>
          <h1 className="mt-3 text-h3">{applyPage.videoHeading}</h1>
          <p className="mt-3 text-ink-soft">{applyPage.videoSub}</p>

          <div className="mt-6">
            {applyPage.videoEmbedUrl ? (
              <div className="aspect-video overflow-hidden rounded-2xl border border-line">
                <iframe
                  src={applyPage.videoEmbedUrl}
                  title="AthleteOS value video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-line bg-surface">
                <div className="flex flex-col items-center gap-3 text-muted">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-on-accent">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Value video goes here
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Step 2: inline application */}
        <section className="text-center lg:text-left">
          <p className="eyebrow">{applyPage.step2Label}</p>
          <h2 className="mt-3 text-h3">{applyPage.formHeading}</h2>
          <p className="mt-3 text-ink-soft">{applyPage.formSub}</p>
          <div className="mt-6">
            <ApplyEmbed />
          </div>
        </section>
        </div>
      </div>

      <footer className="border-t border-line py-8">
        <div className="mx-auto max-w-3xl px-5 text-center text-xs leading-relaxed text-muted sm:px-8">
          <p>&copy; {siteConfig.brand}. All rights reserved.</p>
          <p className="mt-2">{applyPage.disclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
