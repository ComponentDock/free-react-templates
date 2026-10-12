import { socialGlyphClass } from '../lib/styles'

interface SocialIconProps {
  /** The glyph's SVG path, drawn in one colour and sized by the styling module. */
  path: string
}

/**
 * The design draws its five footer glyphs from an icon font. `lucide-react` exports no brand glyphs,
 * so each one is an inline SVG path here, filled with the current colour; the link that wraps it
 * carries the accessible name.
 */
export function SocialIcon({ path }: SocialIconProps) {
  return (
    <svg
      className={socialGlyphClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}
