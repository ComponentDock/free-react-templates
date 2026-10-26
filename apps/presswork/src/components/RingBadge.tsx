import { BADGE } from '../data/site'

/**
 * The availability stamp — a ring of tiny type on a radius-46 path, a rust
 * arrow, and a 22-second rotation. It is pinned to the headline block's
 * bottom-right corner and completely decorative: rotating text is not readable
 * by assistive tech, so the whole badge is `aria-hidden` and the same sentence
 * is repeated in the intro.
 *
 * The shell clips horizontally (`overflow-x: clip`) because a square rotating in
 * a corner-flush box grows an axis-aligned box of up to `88 × √2` and would
 * otherwise add 2 px of sideways scroll on phones.
 */
export function RingBadge() {
  return (
    <div className="pw-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120" role="presentation" focusable="false">
        <defs>
          <path id="pw-ring" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" fill="none" />
        </defs>
        <text>
          <textPath href="#pw-ring" startOffset="0">
            {BADGE.ring}
          </textPath>
        </text>
      </svg>
      <span className="pw-badge-arrow">{BADGE.arrow}</span>
    </div>
  )
}
