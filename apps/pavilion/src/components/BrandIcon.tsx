const paths = {
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  twitter:
    'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  globe:
    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  behance:
    'M1 12.5h7.25v1.25H1v-1.25zm0-4h9.5v1.25H1v-1.25zM1 4h12.5v1.25H1V4zm14 0h5v13c0 2.761-2.239 5-5 5h-4.5v-1.5h4.5c1.933 0 3.5-1.567 3.5-3.5V8.5c0-1.933-1.567-3.5-3.5-3.5h-5v-1zm-5.5 3v1.5h5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-5V7zm0 5v1.5h6.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-6.5V12zm-2 0v6h2v-6H4z',
} as const

export type BrandName = keyof typeof paths

interface BrandIconProps {
  name: BrandName
  className?: string
}

/** Inline SVG brand icon (lucide-react dropped brand glyphs). */
export function BrandIcon({ name, className = 'h-5 w-5' }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]!} />
    </svg>
  )
}
