import { cn } from '@free-react-templates/ui'
import { TitleBlock } from './title-block'
import {
  COUNTDOWN_DONE,
  COUNTDOWN_EYEBROW,
  COUNTDOWN_HEADING,
  COUNTDOWN_LEAD,
  COUNTDOWN_TARGET,
  COUNTDOWN_UNIT_LABELS,
} from '../lib/site'
import { formatUnit, unitValues, useCountdown } from '../lib/use-countdown'
import {
  containerClass,
  countdownBandClass,
  countdownDoneClass,
  countdownRowClass,
  counterClass,
  counterLabelClass,
  counterValueClass,
  sectionAnchorStyle,
  sectionClass,
} from '../lib/styles'

/** The four-part wait for the day: the counters tick against the page's own clock, and once the
 * day has arrived they give way to a single line rather than four zeros. */
export function Countdown() {
  const { days, hours, minutes, seconds, hasPassed } = useCountdown(COUNTDOWN_TARGET)
  const values = unitValues({ days, hours, minutes, seconds })

  return (
    <section
      id="countdown"
      data-testid="countdown-section"
      aria-labelledby="countdown-heading"
      className={cn(sectionClass, countdownBandClass)}
      style={sectionAnchorStyle}
    >
      <div className={containerClass}>
        <TitleBlock
          eyebrow={COUNTDOWN_EYEBROW}
          heading={COUNTDOWN_HEADING}
          headingId="countdown-heading"
          lead={COUNTDOWN_LEAD}
        />

        {hasPassed ? (
          <p className={countdownDoneClass} data-testid="countdown-done">
            {COUNTDOWN_DONE}
          </p>
        ) : (
          <ul className={countdownRowClass} data-testid="countdown">
            {COUNTDOWN_UNIT_LABELS.map((unit, index) => (
              <li
                key={unit}
                className={counterClass(index === COUNTDOWN_UNIT_LABELS.length - 1)}
              >
                <span className={counterValueClass} data-testid={`counter-${unit.toLowerCase()}`}>
                  {formatUnit(values[unit])}
                </span>
                <span className={counterLabelClass}>{unit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
