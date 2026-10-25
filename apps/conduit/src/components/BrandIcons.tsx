import type { SVGProps } from 'react'

/** Social glyphs drawn inline — the icon library no longer ships brand marks. */
export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2h3.2l-7 8 7.4 12h-6.2l-4.9-7.6L5.7 22H2.5l7.5-8.6L2.9 2h6.3l4.4 7.1L18.9 2zm-1.1 18.1h1.8L8.3 3.8H6.4l11.4 16.3z" />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7.2v.1M11.5 17v-4a2.5 2.5 0 0 1 5 0v4" />
    </svg>
  )
}
