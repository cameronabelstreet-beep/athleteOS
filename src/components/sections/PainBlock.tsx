import { painBlock } from "@/lib/content";
import { AccentText, Container, Eyebrow } from "@/components/primitives";

export function PainBlock() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{painBlock.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={painBlock.heading} />
          </h2>
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {painBlock.pains.map((pain, i) => (
            <div
              key={i}
              className="border-t border-line py-6"
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 text-sm font-semibold tabular-nums text-accent"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.15rem] font-bold leading-snug tracking-tight text-ink">
                    {pain.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{pain.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-accent-tint p-8 sm:p-10">
          <p className="max-w-3xl text-h3 font-semibold leading-snug text-ink">
            {painBlock.bridge}
          </p>
        </div>
      </Container>
    </section>
  );
}
