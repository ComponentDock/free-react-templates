/* Inline SVG social marks. The icon library dropped brand glyphs, so the
   footer's social row draws them by hand instead of shipping an icon font. */

interface BrandIconProps {
  className?: string
}

export function FacebookMark({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V9c0-.87.24-1.46 1.5-1.46h1.6V4.85c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4v2.27H7.9v3h2.46V21h3.14Z" />
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

/* Ball with its three seam arcs. */
export function DribbbleMark({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M5.2 7.4c4.5 1.1 8.6 3.6 11.2 8.1" />
      <path d="M3.4 14.2c4.9-1.3 9.9-.2 12.4 3.4" />
      <path d="M10.3 3.4c3.2 3.6 5 7.8 5.6 12.4" />
    </svg>
  )
}

/* Stacked double-bowl "B" stand-in for the proxy network mark. */
export function BehanceMark({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 5.5h5a2.9 2.9 0 0 1 0 5.8H4z" />
      <path d="M4 11.3h5.6a3.1 3.1 0 0 1 0 6.2H4z" />
      <path d="M15.5 8h5" />
      <path d="M14.5 14.4h6.3a3.2 3.2 0 0 0-6.3-.6" />
    </svg>
  )
}
