import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { CARD, COUNT_TITLE_ID, CTA, TARGET } from '../data/site'
import { useCountdown } from '../hooks/useCountdown'
import { Countdown } from './Countdown'

/**
 * The lime card: hard 12 px offset shadow, "Doors open in" beside the early-bird
 * chip, four dark tiles, the price line, the ticket CTA and the secondary link.
 *
 * The CTA holds a seat instead of navigating. In the reference it is an eighth
 * `href="#"` with nowhere to go; here it opens the seat step in place, which is
 * why the card owns one piece of state and the note is a status region.
 */
export function CountdownCard() {
  const countdown = useCountdown(TARGET)
  const [held, setHeld] = useState(false)

  return (
    <aside className="sp-card" aria-labelledby={COUNT_TITLE_ID}>
      <div className="sp-card-head">
        <h2 className="sp-card-title" id={COUNT_TITLE_ID}>
          {countdown.done ? CARD.open : CARD.title}
        </h2>
        <span className="sp-live">
          <span aria-hidden="true" />
          {held ? CARD.chipHeld : CARD.chip}
        </span>
      </div>

      <Countdown state={countdown} />

      <p className="sp-price">
        <strong>{CARD.price}</strong> {CARD.priceNote} <s>{CARD.priceWas}</s> {CARD.priceAfter}
      </p>

      <button type="button" className="sp-cta" onClick={() => setHeld(true)}>
        {held ? CTA.held : CTA.label}
        <ArrowRight size={20} aria-hidden="true" />
      </button>

      {held ? (
        <p className="sp-note" role="status">
          {CARD.note}
        </p>
      ) : null}

      <a className="sp-secondary" href={CARD.secondaryHref}>
        {CARD.secondary}
      </a>
    </aside>
  )
}
