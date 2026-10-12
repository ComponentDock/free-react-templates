/**
 * The wordmark's mark: two rings with a small heart held between them, drawn in `currentColor` so
 * it takes the colour of whatever it sits on. Decorative — the brand word beside it carries the
 * name.
 */
export function BrandMark({ className }: { className: string }) {
  return (
    <svg
      data-brand-mark="true"
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="14.5" cy="20" r="10.5" strokeWidth="1.5" />
      <circle cx="25.5" cy="20" r="10.5" strokeWidth="1.5" />
      <path
        d="M20 26.5c-3.6-2.5-5.6-4.5-5.6-6.8a3 3 0 0 1 5.6-1.6 3 3 0 0 1 5.6 1.6c0 2.3-2 4.3-5.6 6.8Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}
