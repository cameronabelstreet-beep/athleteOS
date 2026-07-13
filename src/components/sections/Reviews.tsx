import { reviews } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";

function Stars({ value = 5 }: { value?: number }) {
  return (
    <span className="inline-flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${i < value ? "text-accent" : "text-line"}`}
          fill="currentColor"
        >
          <path d="M10 1.6l2.47 5.19 5.7.66-4.22 3.86 1.13 5.63L10 14.98l-5.08 2.56 1.13-5.63L1.83 8.05l5.7-.66z" />
        </svg>
      ))}
    </span>
  );
}

export function Reviews() {
  const max = Math.max(...reviews.breakdown.map((b) => b.count), 1);
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-line bg-bg p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>{reviews.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={reviews.heading} />
            </h2>
            <div className="mt-6 flex items-end gap-3">
              <span
                className="text-[3.5rem] font-extrabold leading-none text-ink"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStretch: "112%",
                }}
              >
                {reviews.rating}
              </span>
              <span className="pb-2 text-lg text-muted">
                / {reviews.outOf}
              </span>
            </div>
            <div className="mt-3">
              <Stars value={5} />
            </div>
            <p className="mt-3 text-sm text-muted">{reviews.count}</p>
            <p className="mt-6 text-sm text-muted">{reviews.placeholderNote}</p>
          </div>

          <div className="flex flex-col gap-3">
            {reviews.breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3">
                <span className="w-12 shrink-0 text-sm font-medium text-ink-soft">
                  {b.stars} star
                </span>
                <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <span
                    className="block h-full rounded-full bg-accent"
                    style={{ width: `${(b.count / max) * 100}%` }}
                  />
                </span>
                <span className="w-8 shrink-0 text-right text-sm tabular-nums text-muted">
                  {b.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
