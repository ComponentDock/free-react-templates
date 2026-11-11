import { Check } from 'lucide-react'
import { COMPONENT_DOCK, FLAG_LABEL, PER_LABEL, PRICE_PREFIX, type Plan } from '../content'

interface PlanCardProps {
  plan: Plan
  /** The figure on screen — it counts between the monthly and annual price. */
  figure: number
  annual: boolean
}

/**
 * One plan card: name, views, price, billing note, CTA and tick list. The
 * featured card is the same box as its siblings and differs only in fill, text
 * colour, its lime CTA and the flag pinned inside its top-right corner.
 */
export function PlanCard({ plan, figure, annual }: PlanCardProps) {
  return (
    <article
      className={plan.featured ? 'tb-plan tb-plan--pop' : 'tb-plan'}
      aria-labelledby={plan.id}
    >
      {plan.featured ? <p className="tb-flag">{FLAG_LABEL}</p> : null}

      <h2 className="tb-name" id={plan.id}>
        {plan.name}
      </h2>
      <p className="tb-views">{plan.views}</p>

      <p className="tb-price">
        <span className="tb-amount">
          {PRICE_PREFIX}
          {figure}
        </span>
        <span className="tb-per">{PER_LABEL}</span>
      </p>

      <p className="tb-note">{annual ? plan.notes.annual : plan.notes.monthly}</p>

      <a className="tb-cta" href={COMPONENT_DOCK} target="_blank" rel="noreferrer noopener">
        {plan.cta}
      </a>

      <ul className="tb-list">
        {plan.bullets.map((bullet) => (
          <li key={bullet}>
            <Check className="tb-tick" size={14} strokeWidth={2.4} aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}
