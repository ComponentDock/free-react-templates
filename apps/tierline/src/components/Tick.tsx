/**
 * The check glyph the list reuses thirteen times: one 20-unit path, stroked
 * through the stylesheet, drawn at 16 px inside its disc.
 */
export function Tick() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="plan-tick">
      <path d="m5 10.5 3 3 7-7" />
    </svg>
  )
}
