import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TIERS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Three tiers and the one interactive thing in the band: a `role="switch"` that
 * rewrites every price and every billing note. Both the price and the note are
 * derived from the same two numbers, so the note can never drift.
 */
export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          size="sm"
          eyebrow="Membership"
          title="Free to read, paid to belong"
          lede="Membership pays the moderators and the recording bill. Nothing else funds this room."
        />

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={cn('text-sm font-medium', yearly ? 'text-gray-500' : 'text-gray-900')}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle annual billing"
            onClick={() => setYearly(!yearly)}
            className={cn(
              'relative h-7 w-14 rounded-full transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none',
              yearly ? 'bg-primary-600' : 'bg-gray-200',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
                yearly ? 'translate-x-7' : 'translate-x-0',
              )}
            />
          </button>
          <span className={cn('text-sm font-medium', yearly ? 'text-gray-900' : 'text-gray-500')}>
            Yearly
            <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Save 20%
            </span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 80} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl p-8 shadow-soft',
                  tier.ground,
                )}
              >
                {tier.popular ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                ) : null}

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                  <p className="mt-2 min-h-11 text-sm text-gray-600">{tier.blurb}</p>
                </div>

                <div className="mt-6 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold tabular-nums text-gray-900">
                      ${yearly ? tier.yearly : tier.monthly}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {yearly ? `Billed annually ($${tier.yearly}/year)` : 'Billed monthly'}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-3 text-sm">
                      {feature.included ? (
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 flex-none text-primary-600"
                        />
                      ) : (
                        <X aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-gray-400" />
                      )}
                      <span
                        className={cn(
                          feature.included ? 'text-gray-700' : 'text-gray-500 line-through',
                        )}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'mt-8 block w-full rounded-lg py-3 text-center font-medium transition-colors',
                    tier.ctaClass,
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
