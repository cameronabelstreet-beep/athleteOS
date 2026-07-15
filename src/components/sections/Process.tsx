import { process } from "@/lib/content";
import {
  AccentText,
  CTAButton,
  Container,
  Eyebrow,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{process.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={process.heading} />
          </h2>
          <p className="measure mt-4 text-lead text-ink-soft">{process.sub}</p>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li key={step.no}>
              {/* Each box appears on scroll, staggered left to right. */}
              <Reveal className="border-t-2 border-ink pt-5" delay={i * 0.15}>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-bold tabular-nums text-accent"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.no}
                  </span>
                </div>
                <h3 className="mt-6 text-h3 text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] text-ink-soft">{step.line}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <CTAButton size="lg">{process.cta}</CTAButton>
        </div>
      </Container>
    </section>
  );
}
