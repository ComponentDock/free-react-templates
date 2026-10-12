import { cn } from '@free-react-templates/ui'
import { photo, SECTION_IDS, TIMER_CLOSING, TIMER_HEADING } from '../lib/site'
import { pad, WEDDING_TARGET } from '../lib/countdown'
import { useCountdown } from '../lib/use-countdown'
import {
  containerClass,
  timerBodyClass,
  timerCellClass,
  timerClass,
  timerClosingClass,
  timerHeadingClass,
  timerLabelClass,
  timerNumberClass,
  timerPanelClass,
  timerScrimClass,
} from '../lib/styles'

/**
 * The countdown band: a photograph of the orchard under a dark wash, the heading, and the design's
 * translucent white panel holding the four cells — days, hours, minutes and seconds — with the
 * closing line beneath it. Every cell is printed as two digits so the row never shifts.
 */
export function Timer() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_TARGET)

  const cells: Array<[string, number]> = [
    ['days', days],
    ['hours', hours],
    ['Minutes', minutes],
    ['seconds', seconds],
  ]

  return (
    <section
      id={SECTION_IDS.countdown}
      className={timerClass}
      style={{ backgroundImage: `url(${photo('trousseau-23', 1600, 900)})` }}
      aria-label="Countdown to the wedding"
    >
      <div className={timerScrimClass} aria-hidden="true" />
      <div className={cn(containerClass, timerBodyClass)}>
        <h5 className={timerHeadingClass}>{TIMER_HEADING}</h5>
        <div className={timerPanelClass}>
          {cells.map(([label, value]) => (
            <div key={label} className={timerCellClass}>
              <span className={timerNumberClass}>{pad(value)}</span>
              <span className={timerLabelClass}>{label}</span>
            </div>
          ))}
        </div>
        <p className={timerClosingClass}>{TIMER_CLOSING}</p>
      </div>
    </section>
  )
}
