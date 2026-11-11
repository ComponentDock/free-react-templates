import type { RefObject } from 'react'
import { FIELD_ID, FIELD_LABEL, RANGE_ID, SCALE, SEATS_LABEL, SUM_ID } from '../content'
import { MAX_SEATS, MIN_SEATS, clampSeats } from '../pricing'

interface SeatControlsProps {
  /** The current seat count — the slider is controlled, the field is not. */
  readonly seats: number
  /** Receives the raw string from either control; the parent clamps it. */
  readonly onSeatsChange: (raw: string) => void
  /** The number field, so the card can rewrite it without stealing focus. */
  readonly fieldRef: RefObject<HTMLInputElement | null>
  /** `aria-valuetext` for the slider, e.g. `"12 seats, $140 per month"`. */
  readonly valueText: string
}

/**
 * The seat control: a row with the visible label and a numeric field, then the
 * slider and its decorative scale. The visible label belongs to the slider —
 * the field is described by its total instead, which is why it carries the
 * visually hidden one.
 */
export function SeatControls({ seats, onSeatsChange, fieldRef, valueText }: SeatControlsProps) {
  return (
    <>
      <div className="pr-seats">
        <label className="pr-label" htmlFor={RANGE_ID}>
          {SEATS_LABEL}
        </label>

        <div className="pr-number">
          <label className="pr-vh" htmlFor={FIELD_ID}>
            {FIELD_LABEL}
          </label>
          <input
            className="pr-field"
            id={FIELD_ID}
            ref={fieldRef}
            type="number"
            min={MIN_SEATS}
            max={MAX_SEATS}
            step={1}
            inputMode="numeric"
            defaultValue={seats}
            aria-describedby={SUM_ID}
            onChange={(event) => onSeatsChange(event.currentTarget.value)}
            onBlur={(event) => {
              event.currentTarget.value = String(clampSeats(event.currentTarget.value))
            }}
          />
        </div>
      </div>

      <input
        className="pr-range"
        id={RANGE_ID}
        type="range"
        min={MIN_SEATS}
        max={MAX_SEATS}
        step={1}
        value={seats}
        aria-valuetext={valueText}
        onChange={(event) => onSeatsChange(event.currentTarget.value)}
      />

      {/* Evenly spaced ticks, not the slider's real positions: 50 is painted at
          21.7% of the track while the value 50 lives at 24.6%. */}
      <div className="pr-scale" aria-hidden="true">
        {SCALE.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </>
  )
}
