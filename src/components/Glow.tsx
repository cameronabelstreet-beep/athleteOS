// Reusable navy brand glow. Positioned/shaped/blurred entirely via className
// (e.g. "-inset-2 rounded-2xl blur-xl" or "-top-24 -right-24 h-96 w-96
// rounded-full blur-3xl"). Sits behind content at -z-10; the parent must be
// positioned (relative) and usually overflow-hidden. `strength` is the navy
// mix percentage (0-100) — higher is more intense.
export function Glow({
  className = "",
  strength = 30,
}: {
  className?: string;
  strength?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{
        backgroundColor: `color-mix(in oklab, var(--color-glow) ${strength}%, transparent)`,
      }}
    />
  );
}
