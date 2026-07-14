import { oneLiner } from "@/lib/content";
import {
  AccentText,
  CheckIcon,
  CTAButton,
  Container,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

export function OneLiner() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Placeholder photo (left) */}
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint">
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
                  Photo
                </span>
              </div>
              {/* Offset navy frame accent behind the photo. */}
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-3xl border"
                style={{
                  borderColor:
                    "color-mix(in oklab, var(--color-glow) 45%, transparent)",
                }}
              />
            </div>

            {/* Copy (right) */}
            <div className="text-center lg:text-left">
              <h2 className="text-h1">
                <AccentText text={oneLiner.statement} />
              </h2>
              <p className="mt-5 text-lead font-medium text-accent-strong">
                {oneLiner.sub}
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <CTAButton size="lg">{oneLiner.cta}</CTAButton>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-x-8 gap-y-3 border-t border-line-soft pt-8 text-sm text-muted sm:flex-row sm:flex-wrap">
            {oneLiner.trust.map((item, i) => (
              <li key={i} className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
