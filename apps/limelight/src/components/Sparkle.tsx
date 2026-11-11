/**
 * The bullet glyph: a twelve-pixel four-point sparkle drawn inline so its fill
 * follows `currentColor` — cyan on the plain cards, pink on the featured one.
 * It is decorative, so it is hidden from assistive tech and never announced.
 */
export function Sparkle() {
  return (
    <svg className="lm-spark" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false">
      <path d="M6 0l1.6 4.4L12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6z" fill="currentColor" />
    </svg>
  )
}
