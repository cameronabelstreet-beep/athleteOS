import { guarantee } from "@/lib/content";
import { CTAButton, Container } from "@/components/primitives";

export function Guarantee() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-24 text-[oklch(0.95_0.01_60)] sm:py-32">
      {/* faint accent glow on the dark band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-70"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% -20%, oklch(0.5 0.02 265 / 0.5), transparent)",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow !text-accent">The guarantee</span>
          <h2
            className="mx-auto mt-6 max-w-3xl text-h1 text-[oklch(0.97_0.005_60)]"
          >
            {guarantee.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lead text-[oklch(0.82_0.01_60)]">
            {guarantee.sub}
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton size="lg">{guarantee.cta}</CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
