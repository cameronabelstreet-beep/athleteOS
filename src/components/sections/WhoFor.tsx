import { whoFor } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Glow } from "@/components/Glow";

export function WhoFor() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{whoFor.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={whoFor.heading} />
          </h2>
          <p className="measure mx-auto mt-4 text-lead text-ink-soft">
            {whoFor.sub}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {whoFor.items.map((item, i) => (
            <Reveal
              key={i}
              delay={(i % 2) * 0.1}
              className={
                i === whoFor.items.length - 1 ? "sm:col-span-2" : undefined
              }
            >
              <div className="relative isolate flex h-full items-center justify-center rounded-2xl border border-line bg-bg px-6 py-5 text-center">
                {/* Navy gradient behind each box. */}
                <Glow className="-inset-2 rounded-[1.2rem] blur-xl" strength={38} />
                <span className="font-semibold text-ink">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
