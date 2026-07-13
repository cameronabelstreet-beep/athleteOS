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
    <section id="results" className="pb-20 pt-2 sm:pb-28">
      <Container>
        {/* Cards lead, sitting as a proof band directly under the hero. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.cases.map((c, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ink/15"
            >
              {/* Photo slot. On-brand gradient shows until a real photo is set
                  in content.ts (public/results/...). No fake image, no broken icon. */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-surface-2 to-accent-tint">
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`${c.niche} client result`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
                    Photo
                  </span>
                )}
              </div>

              <div className="flex flex-col p-6">
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
              </div>
            </article>
          ))}
        </div>

        {/* Context + CTA sit below the proof band. */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-xl">
            <Eyebrow>{results.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={results.heading} />
            </h2>
            <p className="mt-3 text-lead text-ink-soft">{results.sub}</p>
          </div>
          <CTAButton>{results.cta}</CTAButton>
        </div>
        <p className="mt-4 text-sm text-muted">{results.placeholderNote}</p>
      </Container>
    </section>
  );
}
