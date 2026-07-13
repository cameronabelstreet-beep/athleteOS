import { hero } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  UrgencyPill,
} from "@/components/primitives";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* soft warm glow + faint dotted texture, kept subtle for the light theme */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.9_0.01_265),transparent)] opacity-70" />
        <div className="absolute -top-24 left-[-15%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.94_0.012_82),transparent)]" />
        {/* navy top glow — the brand's one spark of color */}
        <div
          className="absolute -top-40 left-1/2 h-[48rem] w-[82rem] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-glow) 28%, transparent), transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.82 0.012 82) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 55%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 55%)",
          }}
        />
      </div>

      <Container className="relative">
        {/* Centered hero. Headline sized down so the long positioning line
            reads at a controlled scale, then the Results band tucks under it. */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <UrgencyPill>{hero.pill}</UrgencyPill>

          <h1 className="mt-6 text-[clamp(2.1rem,1.3rem+2.8vw,3.25rem)] font-black tracking-[-0.03em]">
            <AccentText text={hero.headline} />
          </h1>

          <p className="mt-5 max-w-2xl text-lead text-ink-soft">{hero.sub}</p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton size="lg">{hero.cta}</CTAButton>
            <span className="text-sm text-muted">{hero.microcopy}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
