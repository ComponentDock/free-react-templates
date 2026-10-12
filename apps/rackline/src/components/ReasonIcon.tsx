export interface ReasonIconProps {
  className?: string
}

/**
 * The 59×68 bracket artwork that sits behind every reason card's glyph. Drawn
 * here as an original SVG in `currentColor` so it can follow the card's lime →
 * white hover state through a single text colour.
 */
export function ReasonIcon({ className }: ReasonIconProps) {
  return (
    <svg
      viewBox="0 0 59 68"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      className={className}
    >
      <path d="M1 1h57v66H1z" />
      <path d="M11 17h37" />
      <path d="M11 31h37" />
      <path d="M11 45h22" />
      <path d="M41 45h7" />
      <path d="M11 57h37" />
    </svg>
  )
}
