import { cn } from '@free-react-templates/ui'
import { COUNTDOWN_CELLS, SECTION_IDS } from '../lib/site'
import { pad, WEDDING_TARGET } from '../lib/countdown'
import { useCountdown } from '../lib/use-countdown'
import {
  containerClass,
  countdownCellClass,
  countdownLabelClass,
  countdownNumberClass,
  countdownSectionClass,
  countdownStripClass,
} from '../lib/styles'

/**
 * The signature band: the scarlet damask strip pulled 73px up over the band above it with
 * `position: relative; top: -73px` — the paint moves, the flow does not, which is what the design
 * does. The four cells run 3-2-2-3 across its twelve columns, each a 36px Barlow numeral over an
 * uppercase label, with a screen-reader sentence beside every display value.
 */
export function Countdown() {
  const parts = useCountdown(WEDDING_TARGET)

  return (
    <section id={SECTION_IDS.countdown} className={countdownSectionClass} aria-label="Countdown to the day">
      <div className={containerClass}>
        <ul className={countdownStripClass}>
          {COUNTDOWN_CELLS.map((cell) => (
            <li key={cell.key} className={cn(countdownCellClass, cell.span)}>
              <span className={countdownNumberClass}>{pad(parts[cell.key])}</span>
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
