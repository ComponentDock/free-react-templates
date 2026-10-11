/* Inline SVG social marks. The icon library dropped brand glyphs, so the
   header's utility bar and the footer's social row draw them by hand
   instead of shipping an icon font. */

interface BrandIconProps {
  className?: string
}

export function FacebookMark({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.28-.13-2.43-.13-2.4 0-4.07 1.47-4.07 4.17v2.33H7.5V13h2.7v8h3.3Z" />
    </svg>
  )
}

export function TwitterMark({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 5.9c-.75.33-1.55.55-2.39.65a4.17 4.17 0 0 0 1.83-2.3c-.8.48-1.69.83-2.64 1.02a4.16 4.16 0 0 0-7.09 3.79A11.8 11.8 0 0 1 3.13 4.5a4.16 4.16 0 0 0 1.29 5.55 4.13 4.13 0 0 1-1.89-.52v.05a4.16 4.16 0 0 0 3.34 4.08c-.6.16-1.23.19-1.85.07a4.16 4.16 0 0 0 3.88 2.89A8.35 8.35 0 0 1 2 18.32a11.77 11.77 0 0 0 6.38 1.87c7.66 0 11.85-6.35 11.85-11.85v-.54A8.4 8.4 0 0 0 22 5.9Z" />
    </svg>
  )
}

/* Ball-and-seams mark: outlined ball with the three signature seams. */
export function DribbbleMark({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9.6" />
      <path d="M4.6 6.4c4.7 1.3 9.9 1 14.4-1.7" />
      <path d="M2.6 13c5.3-2 11.1-1.5 15.6 2.4" />
      <path d="M8.6 2.7c4.3 3.5 7.2 8.9 7.8 17.1" />
    </svg>
  )
}

/* Letter mark: the stacked "B" bars next to the open "e". */
export function BehanceMark({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M2.6 4.8h5.5a3.3 3.3 0 0 1 .3 6.5 3.6 3.6 0 0 1-.4 7.2H2.6V4.8Zm2.6 2.2v2.6h2.6a1.3 1.3 0 0 0 0-2.6H5.2Zm0 4.7v3.1h3a1.55 1.55 0 0 0 0-3.1h-3Z" />
      <path d="M14.4 7.3h6.2v1.7h-6.2zM13.1 14.2h8.1a4.4 4.4 0 0 0-8-2.9 4.6 4.6 0 0 0-.9 2.9c0 2.7 2 4.7 4.6 4.7a4.6 4.6 0 0 0 3.9-2l-1.9-1a2.4 2.4 0 0 1-2 1.1 2.3 2.3 0 0 1-2.4-2.1h-1.4Zm1.5-1.7a2.3 2.3 0 0 1 2.2-1.8 2.2 2.2 0 0 1 2.1 1.8h-4.3Z" />
    </svg>
  )
}
