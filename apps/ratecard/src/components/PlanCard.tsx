import { Check, Star } from 'lucide-react'
import { COMPONENT_DOCK, FLAG_LABEL, type Plan } from '../data/site'

interface PlanCardProps {
  plan: Plan
}

/**
 * One plan card. The stack is name, description, price, CTA, ruled label and
 * bullet list, each at its own measured margin — the card is a flex column of
 * blocks, not a spaced list, because the label's margins are part of the
 * reference's arithmetic.
 *
 * The featured card is signalled three ways at once (a 2px accent border, a
 * −16px vertical margin and a 48px padding-top), which together lift its
 * content exactly 1px below its neighbours' and let it overhang the grid.
 */
export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={plan.featured ? 'rc-plan rc-plan--pop' : 'rc-plan'}
      aria-labelledby={plan.id}
    >
      {plan.featured ? (
        <p className="rc-flag">
          <Star size={14} fill="currentColor" aria-hidden="true" />
          {FLAG_LABEL}
        </p>
      ) : null}

      <div>
        <h2 className="rc-name" id={plan.id}>
          {plan.name}
        </h2>
        <p className="rc-desc">{plan.description}</p>
      </div>

      <p className="rc-price">
        <span className="rc-amount">{plan.price}</span>
        <span className="rc-per">{plan.per}</span>
      </p>

      <a
        className={plan.featured ? 'rc-cta rc-cta--solid' : 'rc-cta'}
        href={COMPONENT_DOCK}
        target="_blank"
        rel="noreferrer noopener"
      >
        {plan.cta}
      </a>

      <p className="rc-label">{plan.label}</p>

      <ul className="rc-list">
        {plan.bullets.map((bullet) => (
          <li key={bullet}>
            <span className="rc-disc" aria-hidden="true">
              <Check size={14} strokeWidth={2} />
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}
