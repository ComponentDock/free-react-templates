import { COUNTDOWN_CELLS, COUNTDOWN_LABEL, SECTION_IDS } from '../lib/site'
import { pad, WEDDING_TARGET } from '../lib/countdown'
import { useCountdown } from '../lib/use-countdown'
import {
  containerClass,
  countdownCellClass,
  countdownLabelClass,
  countdownSectionClass,
  countdownStripClass,
  countdownValueClass,
} from '../lib/styles'

/**
 * The clock band: the design's four values in its own violet gradient, each a two-digit figure over
 * an uppercase label. The strip is a labelled group rather than a live region — a figure that
 * changes every second has nothing to announce — and every value is repeated once, quietly, so a
 * screen reader can read the current time on demand.
 */
export function Countdown() {
  const parts = useCountdown(WEDDING_TARGET)

  return (
    <section id={SECTION_IDS.countdown} className={countdownSectionClass}>
      <div className={containerClass}>
        <ul role="timer" aria-label={COUNTDOWN_LABEL} className={countdownStripClass}>
          {COUNTDOWN_CELLS.map((cell) => (
            <li key={cell.key} className={countdownCellClass}>
              <span className={countdownValueClass}>{pad(parts[cell.key])}</span>
              <span className={countdownLabelClass} aria-hidden="true">
                {cell.label}
              </span>
              <span className="sr-only">{`${parts[cell.key]} ${cell.label.toLowerCase()}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
