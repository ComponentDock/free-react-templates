interface BrandIconProps {
  name: 'facebook' | 'twitter' | 'linkedin'
  className?: string
}

/* Inline SVG brand glyphs (lucide-react removed brand icons). Each path is
   the standard simple-icons-style glyph, filled with currentColor. */
const paths: Record<BrandIconProps['name'], string> = {
  facebook:
    'M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8V14h2v5.5h2.5V14h2l.5-2.5h-2.5V10c0-.552.448-1 1-1Z',
  twitter:
    'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452Z',
}

export function BrandIcon({ name, className = 'h-4 w-4' }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      data-testid={`brand-${name}`}
    >
      <path d={paths[name]} />
    </svg>
  )
}
