import type { CSSProperties } from 'react'

interface StarBarProps {
  score: number
}

/**
 * Five stars in one element. The bar is a mask cut as five 16 x 15 stars over
 * a gradient hard-stopped at `score / 5` — 4.3 fills 86%, so the fifth star is
 * cut vertically rather than replaced by a half-star glyph.
 */
export function StarBar({ score }: StarBarProps) {
  const fill = `${Math.round((score / 5) * 1000) / 10}%`

  return (
    <span
      aria-hidden="true"
      data-testid="star-bar"
      className="star-bar"
      style={{ '--star-fill': fill } as CSSProperties}
    />
  )
}
