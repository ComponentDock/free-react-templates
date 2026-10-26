import { cn } from '@free-react-templates/ui'
import type { Plan } from '../content'
import { PlanCta } from './PlanCta'
import { PlanList } from './PlanList'
import { PlanPrice } from './PlanPrice'
import { PopularRibbon } from './PopularRibbon'

interface PlanCardProps {
  plan: Plan
}

/**
 * One plan: name, pitch, price, CTA, list label and list — in that order, on a
 * 22 px-radius plate. `featured` swaps the skin (surface, ink, rule, padding)
 * rather than the geometry: same width, same 302 px of content, no transform.
 */
export function PlanCard({ plan }: PlanCardProps) {
  const headingId = `plan-${plan.id}`

  return (
    <article
      className={cn('plan', plan.featured && 'plan-featured')}
      aria-labelledby={headingId}
    >
      {plan.featured ? <PopularRibbon label="Most popular" /> : null}
      <h2 className="plan-name" id={headingId}>
        {plan.name}
      </h2>
      <p className="plan-pitch">{plan.pitch}</p>
      <PlanPrice amount={plan.price} unit={plan.unit} />
      <PlanCta href={plan.cta.href} label={plan.cta.label} />
      <PlanList title={plan.listTitle} features={plan.features} />
    </article>
  )
}
