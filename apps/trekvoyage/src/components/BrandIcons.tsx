/* Inline SVG social marks. The icon library dropped brand glyphs, so the
   footer's social row draws them by hand instead of shipping an icon font. */

interface BrandIconProps {
  className?: string
}

export function TwitterMark({ className }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 5.9c-.75.33-1.55.55-2.39.65a4.17 4.17 0 0 0 1.83-2.3c-.8.48-1.69.83-2.64 1.02a4.16 4.16 0 0 0-7.09 3.79A11.8 11.8 0 0 1 3.13 4.5a4.16 4.16 0 0 0 1.29 5.55 4.13 4.13 0 0 1-1.89-.52v.05a4.16 4.16 0 0 0 3.34 4.08c-.6.16-1.23.19-1.85.07a4.16 4.16 0 0 0 3.88 2.89A8.35 8.35 0 0 1 2 18.32a11.77 11.77 0 0 0 6.38 1.87c7.66 0 11.85-6.35 11.85-11.85v-.54A8.4 8.4 0 0 0 22 5.9Z" />
    </svg>
  )
}

/* Rounded square with the lens circle and the corner dot. */
export function InstagramMark({ className }: BrandIconProps) {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
