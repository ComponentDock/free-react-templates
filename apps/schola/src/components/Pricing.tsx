import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Explorer',
    tagline: 'Perfect for trying out Schola',
    monthly: '$0',
    yearly: '$0',
    cta: 'Get Started Free',
    highlighted: false,
    features: [
      'Access to free course previews',
      'Community forum access',
      'Weekly newsletter',
      'Mobile app access',
    ],
  },
  {
    name: 'Professional',
    tagline: 'Best for individual learners',
    monthly: '$39',
    yearly: '$348',
    cta: 'Start Learning',
    highlighted: true,
    features: [
      'Unlimited course access',
      'Downloadable resources',
      'Completion certificates',
      'Priority support',
      'Offline viewing',
      'Project reviews',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and organizations',
    monthly: '$79',
    yearly: '$708',
    cta: 'Contact Sales',
    highlighted: false,
    features: [
      'Everything in Professional',
      'Team management dashboard',
      'Custom learning paths',
      'Analytics & reporting',
      'SSO integration',
      'Dedicated account manager',
      'API access',
    ],
  },
] as const

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Start free and upgrade when you're ready. All plans include access to our community and
            mobile apps.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white p-1.5 dark:border-gray-800 dark:bg-gray-900">
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                !yearly ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setYearly((value) => !value)}
              role="switch"
              aria-checked={yearly}
              aria-label={yearly ? 'Switch to monthly billing' : 'Switch to yearly billing'}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full bg-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:bg-gray-700"
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                  yearly ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                yearly ? 'bg-primary-600 text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Yearly
            </span>
            <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
              Save 25%
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                plan.highlighted
                  ? 'border-primary-500 bg-gradient-to-b from-primary-50 to-white shadow-lg dark:border-primary-500 dark:from-primary-900/30 dark:to-gray-900'
                  : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{plan.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-gray-900 dark:text-white">
                  {yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {yearly ? '/yr' : '/mo'}
                </span>
              </div>
              {yearly && plan.yearly !== '$0' && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Billed annually</p>
              )}
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`mt-8 block w-full rounded-xl py-4 text-center font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg hover:opacity-90'
                    : 'border-2 border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  )
}
