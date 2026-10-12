/**
 * The page's recurring ornament: a small flower sprig, drawn as line art rather than copied from
 * any artwork. Decorative only, so it carries no name for assistive technology.
 */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 50c18-4 34-14 46-28" />
      <path d="M30 34c-2-9 2-16 10-19 1 9-3 16-10 19Z" />
      <path d="M50 19c-1-9 4-15 12-16 1 9-4 15-12 16Z" />
      <circle cx="71" cy="11" r="7" />
      <circle cx="71" cy="11" r="3" />
    </svg>
  )
}
