import { comparison } from "@/lib/content";
import {
  AccentText,
  CheckIcon,
  Container,
  Eyebrow,
} from "@/components/primitives";
import { Reveal } from "@/components/Reveal";

function Cell({ value, highlight }: { value: string; highlight: boolean }) {
  if (value === "yes") {
    return (
      <span className="inline-flex items-center justify-center">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full ${
            highlight ? "bg-accent text-on-accent" : "bg-surface-2 text-ink"
          }`}
        >
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
      </span>
    );
  }
  if (value === "no") {
    return <span className="text-lg text-line">&ndash;</span>;
  }
  if (value === "partial") {
    return <span className="text-sm text-muted">Partial</span>;
  }
  return (
    <span
      className={`text-sm ${
        highlight ? "font-semibold text-ink" : "text-muted"
      }`}
    >
      {value}
    </span>
  );
}

export function Comparison() {
  const cols = comparison.columns;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{comparison.label}</Eyebrow>
          <h2 className="mt-4 text-h2">
            <AccentText text={comparison.heading} />
          </h2>
        </Reveal>

        <Reveal className="mt-12 overflow-x-auto" delay={0.15}>
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[34%] pb-4" />
                {cols.map((col, i) => (
                  <th
                    key={col}
                    className="px-5 pb-4 text-center align-bottom"
                  >
                    <span
                      className={`inline-block rounded-t-xl px-4 py-2 text-base font-bold tracking-tight ${
                        i === 0
                          ? "bg-accent text-on-accent"
                          : "text-ink-soft"
                      }`}
                      style={
                        i === 0
                          ? { fontFamily: "var(--font-display)" }
                          : undefined
                      }
                    >
                      {col}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-line">
                  <th
                    scope="row"
                    className="py-5 pr-4 text-left text-[0.95rem] font-medium text-ink-soft"
                  >
                    {row.label}
                  </th>
                  {row.values.map((v, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-5 text-center ${
                        ci === 0 ? "bg-accent-tint/60" : ""
                      }`}
                    >
                      <Cell value={v} highlight={ci === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
