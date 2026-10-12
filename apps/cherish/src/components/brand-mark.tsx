/** The monogram beside the wordmark: two interlocking rings drawn to a `40` grid. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      aria-hidden="true"
      className={className}
    >
      <circle cx="15" cy="20" r="11" />
      <circle cx="25" cy="20" r="11" />
      <path d="M20 9.2c2.7 2.5 4.2 6.2 4.2 10.8S22.7 28.3 20 30.8c-2.7-2.5-4.2-6.2-4.2-10.8S17.3 11.7 20 9.2Z" />
    </svg>
  )
}
