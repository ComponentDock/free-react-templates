import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Tier {
  name: string
  monthly: number
  yearly: number
  blurb: string
  save: string
  features: string[]
  popular?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    blurb: 'Get started with free courses',
    save: '',
    features: ['50+ free courses', 'Basic certificates', 'Community forum', 'Mobile app'],
  },
  {
    name: 'Pro',
    monthly: 29,
    yearly: 232,
    blurb: 'Perfect for serious learners',
    save: 'Save $58/year',
    features: [
      'Unlimited access',
      'Verified certificates',
      'Offline downloads',
      'Priority support',
      'Advanced progress tracking',
    ],
    popular: true,
  },
  {
    name: 'Team',
    monthly: 49,
    yearly: 392,
    blurb: 'For teams and organizations',
    save: 'Save $118/year',
    features: [
      'Everything in Pro',
      'Team management dashboard',
      'Custom learning paths',
      'Analytics & reporting',
      'Dedicated support',
    ],
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Pricing
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Choose Your Learning Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Start free, upgrade when you are ready.
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
                  ? 'bg-white shadow-xl ring-2 ring-primary-600 dark:bg-gray-800'
                  : 'border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800',
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tier.blurb}</p>
              <p className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white">
                ${yearly ? tier.yearly : tier.monthly}
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  /{yearly ? 'year' : 'mo'}
                </span>
              </p>
              {tier.save && (
                <p className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {tier.save}
                </p>
              )}
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#courses"
                className={cn(
                  'mt-8 rounded-full px-6 py-3 text-center text-base font-semibold transition-colors',
                  tier.popular
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700',
                )}
              >
                {tier.monthly === 0 ? 'Get Started Free' : 'Start Learning'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
