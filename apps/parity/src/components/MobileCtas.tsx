import { COMPONENT_DOCK, type Plan } from '../content'

interface MobileCtasProps {
  plans: readonly Plan[]
}

/**
 * The one deliberate addition to the desktop layout: the reference hides both
 * the per-plan note and the plan CTA on a phone, which leaves three prices and
 * nothing to click. This row carries the same three destinations below the
 * table, and only exists on a page that loaded narrow.
 */
export function MobileCtas({ plans }: MobileCtasProps) {
  return (
    <div className="pt-mobile">
      {plans.map((plan) => (
        <a
          key={plan.id}
          className={plan.featured ? 'pt-mobile-cta pt-mobile-cta--pop' : 'pt-mobile-cta'}
          href={COMPONENT_DOCK}
          target="_blank"
          rel="noreferrer noopener"
        >
          {plan.cta} with {plan.name}
        </a>
      ))}
    </div>
  )
}
