import { pad, WEDDING_TARGET } from '../lib/countdown'
import { useCountdown } from '../lib/use-countdown'
import { COUNTDOWN_CELLS, COUNTDOWN_SCRIPT, SECTION_IDS } from '../lib/site'
import {
  containerClass,
  countdownBarClass,
  countdownFrameClass,
  countdownLabelClass,
  countdownNumberCellClass,
  countdownNumberClass,
  countdownRowClass,
  countdownScriptCellClass,
  countdownScriptClass,
  countdownSectionClass,
} from '../lib/styles'

/**
 * The signature band: the brand-pink bar pulled 50px up over the hero's bottom edge, wearing the
 * design's inner dashed frame, five equal cells and the darker "Save the Day" cell first. The four
 * numbers are live — each carries a screen-reader sentence beside its two-digit display.
 */
export function Countdown() {
  const parts = useCountdown(WEDDING_TARGET)

  return (
    <section id={SECTION_IDS.countdown} className={countdownSectionClass} aria-label="Countdown to the day">
      <div className={containerClass}>
        <div className={countdownBarClass}>
          <span className={countdownFrameClass} aria-hidden="true" />
          <ul className={countdownRowClass}>
            <li className={countdownScriptCellClass}>
              <h3 className={countdownScriptClass}>{COUNTDOWN_SCRIPT}</h3>
            </li>
            {COUNTDOWN_CELLS.map((cell) => (
              <li key={cell.key} className={countdownNumberCellClass}>
                <h3 className={countdownNumberClass}>{pad(parts[cell.key])}</h3>
                <span className={countdownLabelClass} aria-hidden="true">
                  {cell.label}
                </span>
                <span className="sr-only">{`${parts[cell.key]} ${cell.label.toLowerCase()}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
