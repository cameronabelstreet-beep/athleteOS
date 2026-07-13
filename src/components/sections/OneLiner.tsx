import { oneLiner } from "@/lib/content";
import {
  AccentText,
  CheckIcon,
  CTAButton,
  Container,
} from "@/components/primitives";

export function OneLiner() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-h1">
            <AccentText text={oneLiner.statement} />
          </h2>
          <p className="mt-5 text-lead font-medium text-accent-strong">
            {oneLiner.sub}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton size="lg">{oneLiner.cta}</CTAButton>
          </div>
        </div>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-x-8 gap-y-3 border-t border-line-soft pt-8 text-sm text-muted sm:flex-row sm:flex-wrap">
          {oneLiner.trust.map((item, i) => (
            <li key={i} className="inline-flex items-center gap-2">
              <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
