import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Tier {
  name: string
  monthly: number
  yearly: number
  blurb: string
  features: string[]
  popular?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Hobby',
    monthly: 0,
    yearly: 0,
    blurb: 'For side projects and learning.',
    features: ['3 projects', 'Community support', 'Basic analytics'],
  },
  {
    name: 'Startup',
    monthly: 49,
    yearly: 468,
    blurb: 'For growing teams shipping fast.',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom domains'],
    popular: true,
  },
  {
    name: 'Scale',
    monthly: 149,
    yearly: 1428,
    blurb: 'For companies at scale.',
    features: ['Everything in Startup', 'SLA & SSO', 'Dedicated success manager'],
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Start free, scale as you grow. All plans include a 14-day free trial of Pro features.
          </p>

          <div className="mt-8 inline-flex items-center gap-3">
            <span
              className={cn(
                'text-sm font-semibold',
                !yearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
              )}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
              onClick={() => setYearly((value) => !value)}
              className={cn(
                'relative h-7 w-14 rounded-full transition-colors',
                yearly ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700',
              )}
            >
              <span
                className={cn(
                  'absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all',
                  yearly ? 'left-8' : 'left-1',
                )}
              />
            </button>
            <span
              className={cn(
                'text-sm font-semibold',
                yearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
              )}
            >
              Yearly
            </span>
            <span className="rounded-full bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              Save 20%
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-2xl p-8',
                tier.popular
                  ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/25'
                  : 'border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900',
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-gray-900">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold">{tier.name}</h3>
              <p
                className={cn(
                  'mt-1 text-sm',
                  tier.popular ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400',
                )}
              >
                {tier.blurb}
              </p>
              <p className="mt-6 text-4xl font-extrabold">
                ${yearly ? tier.yearly : tier.monthly}
                <span
                  className={cn(
                    'text-base font-medium',
                    tier.popular ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400',
                  )}
                >
                  /{yearly ? 'year' : 'mo'}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={cn(
                        'h-4 w-4 shrink-0',
                        tier.popular ? 'text-white' : 'text-primary-600 dark:text-primary-400',
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={cn(
                  'mt-8 rounded-lg px-6 py-3 text-center text-base font-semibold transition-colors',
                  tier.popular
                    ? 'bg-white text-primary-700 hover:bg-primary-50'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800',
                )}
              >
                {tier.monthly === 0 ? 'Start for Free' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
