import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PLANS } from '../content'

/**
 * The hero's real content: three plans as cards, the middle one ringed in the
 * brand blue, badged and the only one with a filled button. Radii, padding and
 * the `flex-1` blurb keep the three the same height at `sm` and up.
 */
export function PlanCards() {
  return (
    <div id="plans" data-plans className="grid gap-6 sm:grid-cols-3">
      {PLANS.items.map((plan) => (
        <div
          key={plan.name}
          data-plan-card
          data-featured={plan.featured ? 'true' : 'false'}
          className={cn(
            'flex flex-col rounded-2xl border p-6',
            plan.featured ? 'border-primary-600 shadow-md' : 'border-ink-100',
          )}
        >
          {plan.featured && (
            <p className="mb-3 self-start rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-700">
              {PLANS.badge}
            </p>
          )}
          <h3 className="text-lg font-bold text-ink-800">{plan.name}</h3>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-ink-800">{plan.price}</span>
            <span className="text-sm text-ink-400">{PLANS.suffix}</span>
          </p>
          <p className="mt-2 flex-1 text-ink-500">{plan.blurb}</p>
          <ul aria-label={PLANS.ticksLabel} className="mt-4 space-y-2">
            {plan.ticks.map((tick) => (
              <li key={tick} className="flex gap-2 text-sm text-ink-600">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-600"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>{tick}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={cn(
              'mt-6 block rounded-lg px-5 py-3 text-center text-sm font-bold transition-colors',
              plan.featured
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'border border-ink-200 text-ink-700 hover:border-primary-600 hover:text-primary-700',
            )}
          >
            {PLANS.cta}
          </a>
        </div>
      ))}
    </div>
  )
}
