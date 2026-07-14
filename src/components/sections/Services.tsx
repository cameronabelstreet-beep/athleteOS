import { services } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  Eyebrow,
} from "@/components/primitives";
import { FeatureCarousel } from "@/components/FeatureCarousel";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{services.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={services.heading} />
          </h2>
          <p className="measure mt-4 text-lead text-ink-soft">{services.sub}</p>
        </div>

        {/* Four channels, grouped into an auto-cycling carousel. */}
        <div className="mt-14">
          <FeatureCarousel />
        </div>

        {/* Results-rule closer */}
        <div className="glow mt-16 flex flex-col gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="max-w-2xl text-h3 font-semibold leading-snug text-ink">
            {services.summary}
          </p>
          <CTAButton size="lg" className="shrink-0">
            {services.cta}
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}
