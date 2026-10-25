import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TIERS } from '../content'
import { SectionHead } from './SectionHead'

/**
 * Three tiers behind a monthly/yearly switch. The billing note is derived from
 * the active yearly price, so the note can never disagree with the number
 * beside it.
 */
export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" aria-label="Plans" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          pill="Plans"
          title="You are the customer, so there is a price"
          lede="Closeknit is small on purpose. A subscription is the only thing keeping it that way."
        />

        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              'text-sm',
              yearly ? 'font-medium text-gray-500' : 'font-semibold text-gray-900',
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle annual billing"
            onClick={() => setYearly((value) => !value)}
            className={cn(
              'relative h-7 w-14 cursor-pointer rounded-full transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none',
              yearly ? 'bg-primary-600' : 'bg-gray-200',
            )}
          >
            <span
              className={cn(
                'absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
                yearly && 'translate-x-7',
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm',
              yearly ? 'font-semibold text-gray-900' : 'font-medium text-gray-500',
            )}
          >
            Yearly{' '}
            <span className="ml-1.5 inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Save 20%
            </span>
          </span>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const price = yearly ? tier.yearly : tier.monthly
            return (
              <li
                key={tier.name}
                className={cn(
                  'relative rounded-2xl p-8 shadow-soft transition hover:shadow-soft-lg',
                  tier.featured ? 'bg-white ring-2 ring-primary-600' : 'bg-gray-50',
                )}
              >
                {tier.featured === true && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{tier.blurb}</p>

                <div className="mt-6 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900 tabular-nums">${price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {yearly ? `Billed annually ($${tier.yearly}/year)` : 'Billed monthly'}
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-primary-600"
                        />
                      ) : (
                        <X aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className={cn(
                      'block w-full rounded-lg py-3 text-center font-medium transition-colors',
                      tier.ctaTone === 'primary'
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
                    )}
                  >
                    {tier.cta}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
