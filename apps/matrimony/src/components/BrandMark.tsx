/**
 * The template's own mark: a wheat sprig, drawn inline. It stands where the design puts its own
 * logo lockup — in the bar's wordmark and inside the first-paint disc.
 */
export function BrandMark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 40 55" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M19 55h2V14h-2z" />
      <path d="M20 14c-7-3-10-9-8-14 6 2 9 8 8 14z" />
      <path d="M20 14c7-3 10-9 8-14-6 2-9 8-8 14z" />
      <path d="M20 26c-7-3-10-9-8-14 6 2 9 8 8 14z" />
      <path d="M20 26c7-3 10-9 8-14-6 2-9 8-8 14z" />
      <path d="M20 38c-7-3-10-9-8-14 6 2 9 8 8 14z" />
      <path d="M20 38c7-3 10-9 8-14-6 2-9 8-8 14z" />
    </svg>
  )
}
