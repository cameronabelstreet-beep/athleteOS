import { oneLiner } from "@/lib/content";
import {
  AccentText,
  CheckIcon,
  CTAButton,
  Container,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Glow } from "@/components/Glow";

export function OneLiner() {
  return (
    <section className="relative isolate overflow-hidden bg-surface py-20 sm:py-28">
      {/* Ambient navy glow in the top-right of the section. */}
      <Glow className="-right-24 -top-24 h-[26rem] w-[26rem] rounded-full blur-3xl" strength={40} />
      <Container>
        <Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Founder photo (left) */}
            <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0">
              <div className="relative isolate">
                {/* Navy glow behind the photo. */}
                <Glow className="-inset-6 rounded-[2.5rem] blur-2xl" strength={42} />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface-2 to-accent-tint">
                  {oneLiner.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={oneLiner.image}
                      alt="Cameron Street, founder of AthleteOS"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wider text-muted">
                      Photo
                    </span>
                  )}
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
              <div className="mt-5 text-center lg:text-left">
                <p className="font-semibold text-ink">{oneLiner.founder}</p>
                <p className="text-sm text-muted">{oneLiner.founderRole}</p>
              </div>
            </div>

            {/* Copy (right) */}
            <div className="text-center lg:text-left">
              <h2 className="text-[clamp(1.69rem,1.05rem+2.85vw,3rem)]">
                <AccentText text={oneLiner.statement} />
              </h2>
              <p className="mt-5 text-lead font-medium text-accent-strong">
                {oneLiner.sub}
              </p>

              {/* Founder mini-bio */}
              <div className="mt-8 text-left">
                <p className="eyebrow">{oneLiner.bioLabel}</p>
                <ul className="mt-4 space-y-3">
                  {oneLiner.bio.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[0.98rem] leading-snug text-ink-soft"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-glow)" }}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
