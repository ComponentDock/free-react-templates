import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PLANS, PLANS_FOOTNOTE } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Three monthly plans on the pink ground with the middle one featured — plum
 * card, amber ring, amber badge, amber ticks and a white CTA. The saving badge,
 * the price and the five inclusions are the design's whole argument: the number
 * is on the page before you sign anything.
 */
export function HealthPlans() {
  return (
    <section id="health-plans" className="scroll-mt-24 bg-primary-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHead
          align="center"
          variant="plumPill"
          eyebrow="Health plans"
          title="Preventive care, spread monthly"
          lede="Routine care paid by direct debit rather than in lumps. It works out cheaper than paying as you go and it means the boosters actually happen."
        />

        <Reveal>
          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <li
                key={plan.name}
                className={cn(
                  'flex flex-col rounded-3xl p-7',
                  plan.featured
                    ? 'bg-primary-700 text-white ring-2 ring-accent-400'
                    : 'border border-primary-200 bg-white',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={cn(
                        'text-xl font-bold',
                        plan.featured ? 'text-white' : 'text-gray-900',
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={cn(
                        'mt-1 text-sm',
                        plan.featured ? 'text-primary-200' : 'text-gray-500',
                      )}
                    >
                      {plan.subtitle}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-xs font-bold whitespace-nowrap',
                      plan.featured
                        ? 'bg-accent-400 text-primary-900'
                        : 'bg-accent-100 text-accent-800',
                    )}
                  >
                    {plan.saving}
                  </span>
                </div>

                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tabular-nums">{plan.price}</span>
                  <span
                    className={cn('text-sm', plan.featured ? 'text-primary-200' : 'text-gray-500')}
                  >
                    a month
                  </span>
                </p>

                <ul
                  className={cn(
                    'mt-6 flex-1 space-y-2.5 border-t pt-5 text-sm',
                    plan.featured ? 'border-primary-600' : 'border-primary-100',
                  )}
                >
                  {plan.inclusions.map((inclusion) => (
                    <li key={inclusion} className="flex gap-2.5">
                      <Check
                        aria-hidden="true"
                        className={cn(
                          'mt-0.5 h-4 w-4 flex-none',
                          plan.featured ? 'text-accent-300' : 'text-primary-600',
                        )}
                      />
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'mt-7 rounded-xl px-5 py-3 text-center text-base font-semibold transition-colors',
                    plan.featured
                      ? 'bg-white text-primary-700 hover:bg-primary-50'
                      : 'bg-primary-700 text-white hover:bg-primary-800',
                  )}
                >
                  {plan.cta}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-gray-600">
          {PLANS_FOOTNOTE}
        </p>
      </div>
    </section>
  )
}
