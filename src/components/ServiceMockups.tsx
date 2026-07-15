// Branded UI mockups for the Services carousel panels. Vector, monochrome
// chalk/slate with a navy accent, sized to fill a 16/10 panel (absolute inset-0).
// These stand in for real product screenshots where we don't have one. Kept
// detailed + realistic (labels, copy, statuses) rather than empty placeholders.

import { CheckIcon } from "@/components/primitives";

const GLOW_TINT = "color-mix(in oklab, var(--color-glow) 16%, transparent)";

/** Small navy status pill. */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-1.5 py-0.5 text-[0.4rem] font-semibold"
      style={{ backgroundColor: GLOW_TINT, color: "var(--color-glow)" }}
    >
      {children}
    </span>
  );
}

/** Content Plan — a weekly posting schedule. */
export function ContentFeedMock() {
  const rows = [
    { tag: "Reel", cap: "3 mistakes killing your DMs", day: "Mon" },
    { tag: "Post", cap: "Client win: 8k to 19k/mo", day: "Wed" },
    { tag: "Story", cap: "Behind a coaching call", day: "Fri" },
    { tag: "Carousel", cap: "How the funnel books calls", day: "Sat" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col gap-1.5 bg-bg p-2.5">
      <div className="flex items-center gap-1.5">
        <div className="h-4 w-4 rounded-full bg-accent" />
        <span className="text-[0.55rem] font-semibold text-ink">
          Content Plan
        </span>
        <span className="ml-auto rounded-full bg-surface px-1.5 py-0.5 text-[0.4rem] font-medium text-muted">
          This week
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-1">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 rounded-md border border-line-soft bg-surface/60 px-1.5 py-1"
          >
            <div className="h-4 w-4 shrink-0 rounded-[3px] bg-gradient-to-br from-surface-2 to-accent-tint" />
            <span className="shrink-0 rounded bg-accent-tint px-1 py-0.5 text-[0.4rem] font-semibold text-ink-soft">
              {r.tag}
            </span>
            <span className="truncate text-[0.45rem] text-ink-soft">
              {r.cap}
            </span>
            <span className="ml-auto shrink-0 text-[0.4rem] text-muted">
              {r.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** DM thread that ends in a booked call. */
export function DmBookingMock() {
  return (
    <div className="absolute inset-0 flex flex-col bg-bg p-2.5">
      <div className="flex items-center gap-1.5 border-b border-line pb-1.5">
        <div className="relative h-4 w-4 shrink-0">
          <div className="h-4 w-4 rounded-full bg-accent" />
          <span
            className="absolute -bottom-px -right-px h-1.5 w-1.5 rounded-full border border-bg"
            style={{ backgroundColor: "var(--color-glow)" }}
          />
        </div>
        <span className="text-[0.5rem] font-semibold text-ink">@yourhandle</span>
        <span className="ml-auto text-[0.4rem] text-muted">now</span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 py-1.5">
        <div className="max-w-[76%] self-start rounded-lg rounded-bl-sm bg-surface px-2 py-1 text-[0.5rem] leading-tight text-ink-soft">
          Loved your last reel
        </div>
        <div className="max-w-[76%] self-start rounded-lg rounded-bl-sm bg-surface px-2 py-1 text-[0.5rem] leading-tight text-ink-soft">
          Any space this week?
        </div>
        <div className="max-w-[76%] self-end rounded-lg rounded-br-sm bg-accent px-2 py-1 text-[0.5rem] leading-tight text-on-accent">
          Yes, booked you for Tue 2:00
        </div>
      </div>
      <div
        className="flex items-center gap-1 self-center rounded-full px-2 py-0.5 text-[0.5rem] font-semibold"
        style={{ backgroundColor: GLOW_TINT, color: "var(--color-glow)" }}
      >
        <CheckIcon className="h-2 w-2" /> Discovery call, Tue 2:00 PM
      </div>
    </div>
  );
}

/** Referral engine — share link + referred people + status. */
export function ReferralMock() {
  const people = [
    { n: "Jordan M.", s: "Booked" },
    { n: "Priya K.", s: "Booked" },
    { n: "Marcus T.", s: "Invited" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col gap-1.5 bg-bg p-2.5">
      <div className="flex items-center gap-1.5">
        <div className="h-4 w-4 rounded-full bg-accent" />
        <span className="text-[0.55rem] font-semibold text-ink">Referrals</span>
        <span className="ml-auto">
          <Pill>+6 this month</Pill>
        </span>
      </div>
      <div className="flex items-center gap-1 rounded-md border border-line bg-surface px-1.5 py-1">
        <span className="truncate text-[0.45rem] text-muted">
          athleteos.co/r/yourname
        </span>
        <span className="ml-auto shrink-0 rounded bg-accent px-1.5 py-0.5 text-[0.4rem] font-semibold text-on-accent">
          Copy
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-1">
        {people.map((p, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="h-3.5 w-3.5 shrink-0 rounded-full bg-surface-2" />
            <span className="text-[0.5rem] text-ink-soft">{p.n}</span>
            {p.s === "Booked" ? (
              <span className="ml-auto">
                <Pill>Booked</Pill>
              </span>
            ) : (
              <span className="ml-auto rounded-full bg-surface px-1.5 py-0.5 text-[0.4rem] font-semibold text-muted">
                Invited
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Automation map — a follow-up workflow as connected nodes. */
export function AutomationMock() {
  const nodes = [
    { t: "New lead", m: "trigger" },
    { t: "Send follow-up", m: "instant" },
    { t: "No reply, nurture", m: "1 day" },
    { t: "Book the call", m: "auto" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-0 bg-bg p-2.5">
      <div className="mb-1 flex items-center gap-1.5">
        <div className="h-4 w-4 rounded-full bg-accent" />
        <span className="text-[0.55rem] font-semibold text-ink">
          Automation
        </span>
        <span className="ml-auto">
          <Pill>Live</Pill>
        </span>
      </div>
      {nodes.map((node, i) => (
        <div key={i}>
          <div className="flex items-center gap-1.5 rounded-md border border-line bg-surface px-1.5 py-1">
            <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded bg-accent text-[0.4rem] font-bold text-on-accent">
              {i + 1}
            </span>
            <span className="text-[0.5rem] text-ink">{node.t}</span>
            <span className="ml-auto shrink-0 text-[0.4rem] text-muted">
              {node.m}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <div className="mx-auto h-1.5 w-px bg-line" />
          )}
        </div>
      ))}
    </div>
  );
}

/** Registry so a step can reference a mockup by key from content. */
export const serviceMocks: Record<string, React.FC> = {
  feed: ContentFeedMock,
  dm: DmBookingMock,
  referral: ReferralMock,
  automation: AutomationMock,
};
