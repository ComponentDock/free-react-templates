/**
 * A tiny scroll cue drawn at the hero illustration's base: a rounded tick with
 * two chevrons, kept as its own node so the art stays readable.
 */
export function AnchorUp() {
  return (
    <g transform="translate(279 470)" opacity="0.9">
      <circle cx="0" cy="0" r="18" fill="none" stroke="#eb566c" strokeWidth="2" />
      <path d="M0 8 -6 0h12z" fill="#eb566c" />
    </g>
  )
}
