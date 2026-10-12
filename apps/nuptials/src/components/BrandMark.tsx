/**
 * The template's own mark: two interlocking rings under one small stone, drawn inline. It stands
 * where the design puts its own logo lockup — in the bar's wordmark and in the footer.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="15" cy="25" r="10" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="2.4" />
      <path d="M20 4.5l3.4 6h-6.8z" fill="currentColor" />
    </svg>
  )
}
