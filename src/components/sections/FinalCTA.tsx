import { finalCta, siteConfig } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  UrgencyPill,
} from "@/components/primitives";

export function FinalCTA() {
  const hasForm = Boolean(siteConfig.typeformUrl);

  return (
    <section id="apply" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <UrgencyPill>{finalCta.pill}</UrgencyPill>
          <h2 className="mt-6 text-h1">
            <AccentText text={finalCta.heading} />
          </h2>
          <p className="mt-4 text-lead text-ink-soft">{finalCta.sub}</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          {hasForm ? (
            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <iframe
                src={siteConfig.typeformUrl}
                title="Apply to AthleteOS"
                className="h-[600px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-line bg-surface p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-tint">
                <svg
                  viewBox="0 0 20 20"
                  className="h-6 w-6 text-accent-strong"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 5.5h12M4 10h12M4 14.5h7" />
                </svg>
              </div>
              <p className="mx-auto mt-5 max-w-sm text-ink-soft">
                {finalCta.embedPlaceholder}
              </p>
              <div className="mt-6 flex justify-center">
                <CTAButton size="lg">{finalCta.cta}</CTAButton>
              </div>
              <p className="mt-4 text-sm text-muted">{finalCta.microcopy}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
