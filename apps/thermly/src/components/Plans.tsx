import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { plans, plansFootnote } from '../data'

/**
 * Three monthly plans. Emphasis on the middle card is carried by a brand
 * border, a badge and the only filled CTA — not by size or position alone.
 */
export function Plans() {
  return (
    <section id="plans" className="section-band scroll-mt-24 bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
            Maintenance plans
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Two visits a year, and you go to the front of the queue
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Pick the cover that matches how many systems your house runs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'flex flex-col rounded-2xl border bg-white p-6',
                plan.featured ? 'border-primary-600 shadow-md' : 'border-ink-100',
              )}
            >
              {plan.featured ? (
                <p className="mb-3 inline-flex w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-bold tracking-wide text-primary-700 uppercase">
                  Most chosen
                </p>
              ) : null}
              <h3 className="text-lg font-bold text-ink-800">{plan.name}</h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-ink-800">{plan.price}</span>
                <span className="text-sm text-ink-400">per month</span>
              </p>
              <p className="mt-3 text-sm text-ink-500">{plan.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-ink-600">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-600"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                variant={plan.featured ? 'primary' : 'outline'}
                className="mt-6 h-auto w-full px-5 py-3 text-sm font-bold"
                aria-label={`Choose ${plan.name}`}
              >
                Choose {plan.name}
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-400">{plansFootnote}</p>
      </div>
    </section>
  )
}
