import { useRef, useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import {
  ANNOUNCE_DELAY,
  CALC_TITLE_ID,
  CARD_TITLE,
  COMPONENT_DOCK,
  CTA_LABEL,
  FOOTNOTE_LINK_LABEL,
  FOOTNOTE_PREFIX,
  SUM_ID,
} from '../content'
import { INITIAL_SEATS, ariaValueText, clampSeats, fillValue } from '../pricing'
import { PriceTotal } from './PriceTotal'
import { SeatControls } from './SeatControls'
import { TierChips } from './TierChips'

/**
 * One number of state and seven derived strings. The seat count is the only
 * thing React holds; the total, the average, the chip states, the detail line,
 * the fill and the value text are all computed during render, so the card can
 * never paint two answers at once.
 *
 * Two effects, both DOM-only: the first mirrors the seat count into the number
 * field unless the user is typing in it (which is what lets `30` be typed
 * without the field eating the `0`), the second announces the settled value to
 * screen readers once the dragging stops.
 */
export function SeatCalculator() {
  const [seats, setSeats] = useState(INITIAL_SEATS)
  const fieldRef = useRef<HTMLInputElement>(null)
  const liveRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const field = fieldRef.current
    if (field && document.activeElement !== field) field.value = String(seats)
  }, [seats])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      liveRef.current!.textContent = ariaValueText(seats)
    }, ANNOUNCE_DELAY)
    return () => window.clearTimeout(timer)
  }, [seats])

  const fill = { ['--pr-fill' as string]: fillValue(seats) } as CSSProperties

  return (
    <div className="pr-card" role="group" aria-labelledby={CALC_TITLE_ID} style={fill}>
      <h2 className="pr-card-title" id={CALC_TITLE_ID}>
        {CARD_TITLE}
      </h2>

      <SeatControls
        seats={seats}
        onSeatsChange={(raw) => setSeats(clampSeats(raw))}
        fieldRef={fieldRef}
        valueText={ariaValueText(seats)}
      />

      <TierChips seats={seats} />

      <PriceTotal seats={seats} id={SUM_ID} />

      <a className="pr-cta" href={COMPONENT_DOCK} target="_blank" rel="noreferrer noopener">
        {CTA_LABEL}
      </a>

      <p className="pr-fine">
        {FOOTNOTE_PREFIX}
        <a href={COMPONENT_DOCK} target="_blank" rel="noreferrer noopener">
          {FOOTNOTE_LINK_LABEL}
        </a>
      </p>

      {/* The settled value only: the visible total updates on every drag step,
          so the live region waits for the class's 300ms lull before it speaks. */}
      <span className="pr-vh" aria-live="polite" aria-atomic="true" ref={liveRef} />
    </div>
  )
}
