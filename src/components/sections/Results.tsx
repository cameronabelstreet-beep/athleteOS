import { results } from "@/lib/content";
import {
  AccentText,
  ArrowIcon,
  CTAButton,
  Container,
  Eyebrow,
} from "@/components/primitives";

export function Results() {
  return (
    <section id="results" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>{results.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={results.heading} />
            </h2>
            <p className="mt-3 text-lead text-ink-soft">{results.sub}</p>
          </div>
          <p className="text-sm text-muted md:max-w-[16rem] md:text-right">
            {results.placeholderNote}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.cases.map((c, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/15"
            >
              <span className="text-sm font-medium text-muted">{c.niche}</span>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-lg text-muted line-through decoration-line decoration-1">
                  {c.from}
                </span>
                <ArrowIcon className="h-4 w-4 text-accent" />
              </div>
              <div
                className="mt-1 text-[2.6rem] font-extrabold leading-none tracking-tight text-ink"
                style={{ fontFamily: "var(--font-display)", fontStretch: "112%" }}
              >
                {c.to}
              </div>

              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-tint px-3 py-1 text-sm font-medium text-accent-strong">
                doubled in {c.timeframe}
              </span>

              <p className="mt-6 border-t border-line-soft pt-5 text-[0.95rem] italic text-ink-soft">
                &ldquo;{c.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <CTAButton>{results.cta}</CTAButton>
        </div>
      </Container>
    </section>
  );
}
