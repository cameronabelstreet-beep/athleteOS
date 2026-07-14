import { siteConfig } from "@/lib/content";
import type { ReactNode } from "react";

/** Resolve where every "Apply Here" CTA points. Falls back to the on-page
 *  apply section until the real Typeform URL is set in content.ts. */
export const applyHref = siteConfig.typeformUrl || "#apply";
export const isExternalApply = Boolean(siteConfig.typeformUrl);

/** Renders copy that may contain {accent:word} markup as an italic serif word. */
export function AccentText({ text }: { text: string }) {
  const parts = text.split(/(\{accent:.*?\})/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\{accent:(.*?)\}$/);
        if (match) {
          return (
            <span key={i} className="accent-word">
              {match[1]}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
      />
      {children}
    </span>
  );
}

export function UrgencyPill({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const styles =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-[oklch(0.92_0.01_60)]"
      : "border-line bg-surface text-ink-soft";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium ${styles}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}

type CTAProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  href?: string;
};

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href = applyHref,
}: CTAProps) {
  // Hover lifts the button and deepens its shadow for a premium feel; a click
  // presses it back to the baseline. Applied here so every CTA shares it.
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[background-color,color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0";
  const sizes = {
    md: "px-6 py-3 text-[0.95rem]",
    lg: "px-8 py-4 text-base",
  };
  // The first shadow layer is an off-charcoal "frame" that blooms from 0 to a
  // 3px ring on hover (kept at the same layer count as the resting shadow so it
  // animates smoothly instead of snapping). Slate, one notch lighter than the
  // button, so it reads as a subtle bezel behind the pill.
  const variants = {
    primary:
      "bg-accent text-on-accent shadow-[0_0_0_0_transparent,0_1px_0_rgba(0,0,0,0.04),0_10px_28px_-14px_oklch(0.24_0.01_265/0.55)] hover:bg-accent-strong hover:shadow-[0_0_0_3px_oklch(0.34_0.018_265),0_2px_0_rgba(0,0,0,0.05),0_22px_44px_-16px_oklch(0.24_0.01_265/0.7)]",
    secondary:
      "bg-[oklch(0.24_0.01_265)] text-on-accent shadow-[0_0_0_0_transparent,0_10px_28px_-16px_oklch(0.24_0.01_265/0.5)] hover:bg-[oklch(0.17_0.01_265)] hover:shadow-[0_0_0_3px_oklch(0.34_0.018_265),0_20px_42px_-16px_oklch(0.24_0.01_265/0.65)]",
    ghost:
      "border border-line bg-transparent text-ink hover:border-ink/30 hover:bg-surface hover:shadow-[0_16px_34px_-20px_oklch(0.24_0.01_265/0.4)]",
  };
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
    </svg>
  );
}

/** Circle "A" peak monogram, recreated as a clean vector from the brand mark.
 *  Uses currentColor so it inherits the accent (or any) color. Swap for the
 *  official vector when available. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
      {/* Peak "A" with an upward-arrow counter (evenodd cuts the arrow out). */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 20 L76 76 L24 76 Z M50 40 L62 56 L55 56 L55 68 L45 68 L45 56 L38 56 Z"
      />
    </svg>
  );
}

/** Small brand wordmark used in the nav and footer. osClassName controls the
 *  "OS" color so it can stay legible on light or dark surfaces. */
export function Wordmark({
  className = "",
  osClassName = "text-accent",
}: {
  className?: string;
  osClassName?: string;
}) {
  return (
    <span
      className={`font-[family-name:var(--font-display)] text-lg font-black tracking-[-0.04em] ${className}`}
    >
      Athlete<span className={osClassName}>OS</span>
    </span>
  );
}
