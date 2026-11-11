import { TILES } from '../data/site'
import type { CountdownState } from '../hooks/useCountdown'

/**
 * The four-tile clock. `role="timer"` with `aria-live="off"` and a per-second
 * `aria-label`: the label is available on demand but never announced — a
 * once-a-second live region is worse for a screen reader than silence.
 */
export function Countdown({ state }: { state: CountdownState }) {
  return (
    <div
      className="sp-count"
      role="timer"
      aria-live="off"
      aria-atomic="true"
      aria-label={state.label}
    >
      {TILES.map((tile) => (
        <div className="sp-unit" key={tile.key}>
          <span className="sp-num">{state[tile.key]}</span>
          <span className="sp-lbl">{tile.label}</span>
        </div>
      ))}
    </div>
  )
}
