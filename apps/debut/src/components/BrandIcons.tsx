export interface BrandIconProps {
  className?: string
}

/**
 * Brand marks drawn inline as SVG — the icon set in use no longer ships brand
 * glyphs, so each mark is a self-contained 24×24 path filled with the current
 * color.
 */

export function FacebookIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export function TwitterIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.79.47-1.67.81-2.6 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.75a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.85-.51v.05a4.1 4.1 0 0 0 3.29 4.02c-.7.19-1.44.22-2.13.08a4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.29a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67v-.53c.8-.58 1.5-1.3 2.03-2.01Z" />
    </svg>
  )
}

export function YoutubeIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2C2 8.77 2 12 2 12s0 3.23.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.23 22 12 22 12s0-3.23-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  )
}
