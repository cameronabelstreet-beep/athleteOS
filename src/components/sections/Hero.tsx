import { hero } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  UrgencyPill,
} from "@/components/primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* soft warm glow + faint dotted texture, kept subtle for the light theme */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.955_0.03_45),transparent)] opacity-80" />
        <div className="absolute -top-24 left-[-15%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.97_0.01_60),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.85 0.01 60) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 55%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 55%)",
          }}
        />
      </div>

      <Container className="relative pb-20 sm:pb-28">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <UrgencyPill>{hero.pill}</UrgencyPill>

            <h1 className="mt-6 text-display">
              <AccentText text={hero.headline} />
            </h1>

            <p className="measure mt-6 text-lead text-ink-soft">{hero.sub}</p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTAButton size="lg">{hero.cta}</CTAButton>
              <span className="text-sm text-muted">{hero.microcopy}</span>
            </div>
          </div>

          {/* asymmetric guarantee marker, reinforces the promise above the fold */}
          <div className="lg:col-span-4 lg:pt-10">
            <div className="relative ml-0 max-w-xs rounded-2xl border border-line bg-surface/70 p-6 lg:ml-auto">
              <div
                className="text-[3.25rem] font-extrabold leading-none text-accent"
                style={{ fontFamily: "var(--font-display)", fontStretch: "112%" }}
              >
                2x
              </div>
              <p className="mt-3 text-[0.95rem] font-medium text-ink">
                Double your revenue in 60 days.
              </p>
              <p className="mt-1 text-sm text-muted">
                Or you don&apos;t pay. No upfront payment, the risk is ours.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
