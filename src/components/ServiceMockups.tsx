// Branded UI mockups for the Services carousel panels. Vector, monochrome
// chalk/slate with a navy accent, sized to fill a 16/10 panel (absolute inset-0).
// These stand in for real product screenshots where we don't have one.

import { CheckIcon } from "@/components/primitives";

/** Content feed / grid — an on-brand stand-in for a social content plan. */
export function ContentFeedMock() {
  return (
    <div className="absolute inset-0 flex flex-col gap-1.5 bg-bg p-2.5">
      <div className="flex items-center gap-1.5">
        <div className="h-4 w-4 rounded-full bg-accent" />
        <div className="h-1.5 w-14 rounded-full bg-line" />
        <div className="ml-auto h-1.5 w-6 rounded-full bg-line-soft" />
      </div>
      <div className="grid flex-1 grid-cols-4 grid-rows-2 gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-[3px] bg-gradient-to-br from-surface-2 to-accent-tint"
          />
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
        <div className="h-4 w-4 rounded-full bg-accent" />
        <div className="h-1.5 w-16 rounded-full bg-line" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1.5 py-1.5">
        <div className="max-w-[72%] self-start rounded-lg rounded-bl-sm bg-surface px-2 py-1 text-[0.5rem] leading-tight text-ink-soft">
          Any space this week?
        </div>
        <div className="max-w-[72%] self-end rounded-lg rounded-br-sm bg-accent px-2 py-1 text-[0.5rem] leading-tight text-on-accent">
          Booked you for Tue 2:00
        </div>
      </div>
      <div
        className="flex items-center gap-1 self-center rounded-full px-2 py-0.5 text-[0.5rem] font-semibold"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--color-glow) 16%, transparent)",
          color: "var(--color-glow)",
        }}
      >
        <CheckIcon className="h-2 w-2" /> Call booked
      </div>
    </div>
  );
}

/** Registry so a step can reference a mockup by key from content. */
export const serviceMocks: Record<string, React.FC> = {
  feed: ContentFeedMock,
  dm: DmBookingMock,
};
