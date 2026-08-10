import type { SVGProps } from 'react'

/* Brand glyphs as inline SVGs (lucide-react removed brand icons). Each
   accepts className so callers control size/color. */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 4.01c-.836.42-1.718.687-2.63.81A4.6 4.6 0 0 0 21.38 2.7a9.13 9.13 0 0 1-2.907 1.11 4.58 4.58 0 0 0-7.803 4.18A13 13 0 0 1 2.6 3.1a4.58 4.58 0 0 0 1.417 6.11 4.55 4.55 0 0 1-2.075-.572v.058a4.58 4.58 0 0 0 3.672 4.49 4.6 4.6 0 0 1-2.068.078 4.58 4.58 0 0 0 4.276 3.18A9.19 9.19 0 0 1 1.44 17.87a12.96 12.96 0 0 0 7.02 2.06c8.424 0 13.03-6.978 13.03-13.03 0-.199-.004-.396-.013-.593A9.3 9.3 0 0 0 22 4.01z" />
    </svg>
  )
}

export function DribbbleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

export function BehanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8.84 11.3c.75-.35 1.3-1.06 1.3-2.15 0-2.04-1.6-2.9-3.44-2.9H1v11.5h5.82c2.03 0 3.95-1.16 3.95-3.34 0-1.4-.65-2.51-1.93-3.11zM3.72 8.28h2.5c.94 0 1.62.35 1.62 1.28 0 .93-.68 1.3-1.62 1.3h-2.5V8.28zm2.77 7.44H3.72v-3.16h2.85c1.13 0 1.9.48 1.9 1.63 0 1.08-.77 1.53-1.98 1.53zM20.9 9.32a5.9 5.9 0 0 0-6.2 5.84 5.98 5.98 0 0 0 6.3 5.9 6.2 6.2 0 0 0 4.7-1.9l-1.97-1.48c-.89.86-1.74 1.27-2.75 1.27-1.3 0-2.4-.58-2.66-1.99h7.62c.06-.33.06-.66.06-.94 0-2.56-1.67-4.7-4.1-4.7zm-2.6 3.74c.3-1.17 1.22-1.7 2.28-1.7 1.25 0 1.98.72 2.15 1.7h-4.43zM15.7 5.3h5.31v1.28H15.7V5.3z" />
    </svg>
  )
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  )
}

export function RssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18zM4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
    </svg>
  )
}
