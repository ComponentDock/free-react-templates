import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    monthly: 29,
    features: [
      '3 Dog Walks per week',
      '1 Vet Check-up',
      'Basic Grooming',
      'Email Support',
      'Pet Spa Access',
      'Emergency support',
    ],
  },
  {
    name: 'Professional',
    monthly: 59,
    features: [
      '5 Dog Walks per week',
      '3 Vet Check-ups',
      'Full Grooming',
      'Priority Email Support',
      'Pet Spa Access',
      'Emergency support',
      'Pet Taxi',
    ],
  },
  {
    name: 'Premium',
    monthly: 99,
    features: [
      'Unlimited Dog Walks',
      'Unlimited Vet Check-ups',
      'Premium Grooming',
      '24/7 Phone Support',
      'Pet Spa Access',
      'Emergency support',
      'Pet Taxi',
      'Training Sessions',
    ],
  },
] as const

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-night dark:text-white">
          Choose Your Plan
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-gray-500 dark:text-gray-400">
          Simple, transparent pricing for every pet and every budget.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-pressed={!yearly}
            onClick={() => setYearly(false)}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
              !yearly
                ? 'bg-brand text-white'
                : 'bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={yearly}
            onClick={() => setYearly(true)}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
              yearly
                ? 'bg-brand text-white'
                : 'bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            Yearly
          </button>
          <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
            Save 20%
          </span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly
            return (
              <article
                key={plan.name}
                className="flex flex-col rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800"
              >
                <h3 className="text-lg font-bold text-night dark:text-white">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-brand">${price}</span>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {' '}
                    / month
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm font-light text-gray-600 dark:text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 rounded-full bg-brand px-8 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-brand-strong"
                >
                  Get Started
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
