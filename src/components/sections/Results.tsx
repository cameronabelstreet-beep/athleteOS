import { results } from "@/lib/content";
import { AccentText, ArrowIcon, Container, Eyebrow } from "@/components/primitives";

// Navy glow halo via a static box-shadow (cheaper than a blurred element for a
// moving marquee). Uniform card size so every slide lines up.
const cardBase =
  "flex h-[32rem] w-[21rem] shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_12px_34px_-14px_color-mix(in_oklab,var(--color-glow)_45%,transparent)]";

type CaseItem = (typeof results.cases)[number];
type ProofItem = (typeof results.proof)[number];

/** Existing revenue card: photo + from/to + doubled-in + quote. */
function CaseCard({ c }: { c: CaseItem }) {
  return (
    <article className={`group ${cardBase}`}>
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-gradient-to-br from-surface-2 to-accent-tint">
        {c.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={c.image}
            alt={`${c.niche} client result`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_28%] transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-sm font-medium text-muted">{c.niche}</span>
        <div className="mt-4 flex items-baseline gap-3">
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
        <p className="mt-auto border-t border-line-soft pt-5 text-[0.95rem] italic text-ink-soft">
          &ldquo;{c.quote}&rdquo;
        </p>
      </div>
    </article>
  );
}

/** New proof card: real screenshot at its natural ratio, caption fills the rest
 *  so short screenshots still make a full-height card. */
function ProofCard({ p }: { p: ProofItem }) {
  return (
    <article className={cardBase}>
      <div className="shrink-0 bg-surface-2 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={`${p.name} result screenshot`}
          loading="lazy"
          className="w-full rounded-lg border border-line"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6">
        <span className="text-sm font-medium text-muted">{p.name}</span>
        <div
          className="mt-2 text-[1.75rem] font-extrabold leading-tight tracking-tight text-ink"
          style={{ fontFamily: "var(--font-display)", fontStretch: "108%" }}
        >
          {p.result}
        </div>
      </div>
    </article>
  );
}

export function Results() {
  // One pass of every slide; rendered twice so the marquee loops seamlessly.
  const slides = (copy: string) => [
    ...results.proof.map((p, i) => <ProofCard key={`${copy}-p${i}`} p={p} />),
    ...results.cases.map((c, i) => <CaseCard key={`${copy}-c${i}`} c={c} />),
  ];

  return (
    <section
      id="results"
      className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32"
    >
      {/* Slow auto-scrolling proof slider (pauses on hover). */}
      <div className="overflow-hidden py-8">
        <div className="results-track flex gap-5 pl-5">
          {slides("a")}
          {slides("b")}
        </div>
      </div>

      <Container>
        <div className="mx-auto mt-16 max-w-xl text-center">
          <Eyebrow>{results.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={results.heading} />
          </h2>
          <p className="mt-3 text-lead text-ink-soft">{results.sub}</p>
        </div>
      </Container>
    </section>
  );
}
