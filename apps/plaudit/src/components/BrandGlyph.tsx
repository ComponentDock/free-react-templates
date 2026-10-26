import type { BrandMark } from '../content'

interface BrandGlyphProps {
  mark: BrandMark
}

/**
 * The three brand marks: a solid triangle for the freight company, two
 * interlocking rings for the software company, a rounded plate with a cross for
 * the clinic group. Drawn as 24-unit strokes so one 20 px box fits all three.
 */
export function BrandGlyph({ mark }: BrandGlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {mark === 'freight' ? <path d="M4 18 12 4l8 14Z" /> : null}
      {mark === 'rings' ? (
        <>
          <circle cx="9" cy="12" r="6" />
          <circle cx="15" cy="12" r="6" />
        </>
      ) : null}
      {mark === 'clinics' ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M12 8v8M8 12h8" />
        </>
      ) : null}
    </svg>
  )
}
