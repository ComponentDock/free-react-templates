import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: 29,
    period: '/month',
    features: ['1 Coaching Session/mo', 'Email Support', 'Resource Library', 'Progress Tracking'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: 59,
    period: '/month',
    features: [
      '4 Coaching Sessions/mo',
      'Priority Email Support',
      'Full Resource Library',
      'Progress Tracking',
      'Goal Setting Workshops',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 99,
    period: '/month',
    features: [
      'Unlimited Sessions',
      '24/7 Support',
      'Full Resource Library',
      'Progress Tracking',
      'Goal Setting Workshops',
      'Personal Mentor',
    ],
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Pricing Plans</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-light dark:text-gray-400">
            Choose the plan that fits your coaching journey.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 transition-colors ${
                plan.highlighted
                  ? 'border-brand bg-brand/5 shadow-lg'
                  : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-ink dark:text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-ink dark:text-white">${plan.price}</span>
                <span className="text-sm text-ink-light dark:text-gray-400">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-ink-light dark:text-gray-400"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className={`mt-8 w-full rounded-lg ${
                  plan.highlighted ? 'bg-brand text-white hover:bg-brand-dark' : ''
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
