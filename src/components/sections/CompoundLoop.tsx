import { compound } from "@/lib/content";
import {
  AccentText,
  CheckIcon,
  Container,
  Eyebrow,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { Glow } from "@/components/Glow";

export function CompoundLoop() {
  return (
    <section className="relative isolate overflow-hidden bg-surface py-20 sm:py-28">
      {/* Ambient navy glow in the top-left of the section. */}
      <Glow className="-left-24 -top-24 h-[26rem] w-[26rem] rounded-full blur-3xl" strength={40} />
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>{compound.label}</Eyebrow>
            <h2 className="mt-4 text-h2">
              <AccentText text={compound.heading} />
            </h2>
            <p className="measure mt-5 text-lead text-ink-soft">
              {compound.body}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {compound.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-tint">
                    <CheckIcon className="h-3.5 w-3.5 text-accent-strong" />
                  </span>
                  <span className="text-[0.95rem] font-medium text-ink">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Flow / loop visual */}
          <div className="relative isolate">
            <Glow className="-inset-6 rounded-[2.4rem] blur-2xl" strength={55} />
            <Reveal
              className="rounded-3xl border border-line bg-bg p-5 sm:p-6"
              delay={0.15}
            >
            <div className="flex flex-col">
              {compound.loop.map((node, i) => (
                <div key={node.step}>
                  <div className="flex items-start gap-4 rounded-2xl bg-surface p-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink text-sm font-bold text-on-accent"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {node.step}
                    </span>
                    <div>
                      <p className="font-bold tracking-tight text-ink">
                        {node.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">{node.note}</p>
                    </div>
                  </div>
                  {i < compound.loop.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden>
                      <svg
                        viewBox="0 0 16 16"
                        className="h-4 w-4 text-line"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 3v10M4.5 9.5 8 13l3.5-3.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-accent-tint px-4 py-3">
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 shrink-0 text-accent-strong"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 3a7 7 0 1 0 7 7M17 3v4h-4" />
              </svg>
              <p className="text-sm font-medium text-accent-strong">
                {compound.loopNote}
              </p>
            </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
