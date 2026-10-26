import { ArrowRight, Star } from 'lucide-react'
import { ACTIONS, HEADLINE, HERO_ID, NOTE, RATING_TEXT, STARS, SUB } from '../data/hero'

/**
 * The hero: five stacked, centred pieces — a glass rating pill, the balanced
 * headline, the sub-copy, two pill buttons and the free-plan note. The stars are
 * decoration beside a sentence that already states the score, so they stay
 * `aria-hidden` and a screen reader hears the sentence once.
 */
export function Hero() {
  return (
    <section id={HERO_ID} aria-labelledby={`${HERO_ID}-title`} className="ag-hero">
      <p className="ag-rating">
        <span className="ag-stars" aria-hidden="true">
          {Array.from({ length: STARS }, (_, index) => (
            <Star key={index} size={14} strokeWidth={0} className="fill-current" aria-hidden="true" />
          ))}
        </span>
        {RATING_TEXT}
      </p>

      <h1 id={`${HERO_ID}-title`} className="ag-title">
        {HEADLINE}
      </h1>

      <p className="ag-sub">{SUB}</p>

      <div className="ag-actions">
        <a href={ACTIONS.primary.href} className="ag-cta">
          {ACTIONS.primary.label}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
        <a href={ACTIONS.ghost.href} className="ag-ghost">
          {ACTIONS.ghost.label}
        </a>
      </div>

      <p className="ag-note">{NOTE}</p>
    </section>
  )
}
