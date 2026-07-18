import { finalCta } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  UrgencyPill,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section id="apply" className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <UrgencyPill>{finalCta.pill}</UrgencyPill>
          <h2 className="mt-6 text-h1">
            <AccentText text={finalCta.heading} />
          </h2>
          <p className="mt-4 text-lead text-ink-soft">{finalCta.sub}</p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center" delay={0.15}>
          <p className="mx-auto max-w-xl text-[0.98rem] font-semibold text-ink">
            {finalCta.qualifier}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            {finalCta.scarcity}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton size="lg">{finalCta.cta}</CTAButton>
          </div>
          <p className="mt-4 text-sm text-muted">{finalCta.microcopy}</p>
        </Reveal>
      </Container>
    </section>
  );
}
