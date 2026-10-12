import { COUNTDOWN_CELLS, COUNTDOWN_LABEL, COUNTDOWN_PHOTO, COUNTDOWN_TITLE, SECTION_IDS } from '../lib/site'
import { pad, WEDDING_TARGET } from '../lib/countdown'
import { useCountdown } from '../lib/use-countdown'
import {
  containerClass,
  countdownCellClass,
  countdownScrimClass,
  countdownSectionClass,
  countdownStripClass,
  countdownValueClass,
  countdownWordClass,
} from '../lib/styles'
import { BandHeading } from './BandHeading'

/**
 * The first of the design's two photograph bands: a real, live countdown to the app's own future
 * date inside four outlined circles of 120px. The strip is a labelled clock and not a live region —
 * a figure that changes every second has nothing to announce — so each value is also repeated,
 * quietly, for a screen reader to read on demand.
 */
export function Countdown() {
  const parts = useCountdown(WEDDING_TARGET)

  return (
    <section
      id={SECTION_IDS.countdown}
      className={countdownSectionClass}
      style={{ backgroundImage: `url(${COUNTDOWN_PHOTO})` }}
    >
      <span className={countdownScrimClass} aria-hidden="true" />
      <div className={containerClass}>
        <BandHeading title={COUNTDOWN_TITLE} light />
        <ul role="timer" aria-label={COUNTDOWN_LABEL} className={countdownStripClass}>
          {COUNTDOWN_CELLS.map((cell) => (
            <li key={cell.key} className={countdownCellClass}>
              <span className={countdownValueClass}>{pad(parts[cell.key])}</span>
              <span className={countdownWordClass} aria-hidden="true">
                {cell.word}
              </span>
              <span className="sr-only">{`${parts[cell.key]} ${cell.word}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
