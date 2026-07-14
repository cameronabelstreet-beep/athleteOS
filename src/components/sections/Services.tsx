import { services } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";
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
      </Container>
    </section>
  );
}
