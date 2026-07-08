import { services } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  Eyebrow,
} from "@/components/primitives";

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

        {/* At a glance */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.glance.map((g, i) => (
            <div
              key={i}
              className="rounded-2xl border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {g.name}
                </h3>
              </div>
              <p className="mt-3 text-[0.95rem] text-ink-soft">{g.line}</p>
            </div>
          ))}
        </div>

        {/* In depth */}
        <ol className="mt-16">
          {services.inDepth.map((s) => (
            <li
              key={s.no}
              className="grid gap-6 border-t border-line py-9 first:border-t-0 md:grid-cols-12 md:gap-10"
            >
              <div className="flex items-baseline gap-4 md:col-span-4">
                <span
                  className="text-[2.75rem] font-extrabold leading-none text-line"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStretch: "112%",
                  }}
                >
                  {s.no}
                </span>
                <h3 className="text-h3 text-ink">{s.name}</h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-3 md:col-span-8">
                <div>
                  <p className="eyebrow !text-muted">The gap</p>
                  <p className="mt-2 text-[0.95rem] text-ink-soft">
                    {s.problem}
                  </p>
                </div>
                <div>
                  <p className="eyebrow !text-muted">What we do</p>
                  <p className="mt-2 text-[0.95rem] text-ink-soft">
                    {s.solution}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">The result</p>
                  <p className="mt-2 text-[0.95rem] font-medium text-ink">
                    {s.result}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Results-rule closer */}
        <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
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
