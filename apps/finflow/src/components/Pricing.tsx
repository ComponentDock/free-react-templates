import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: '47',
    period: 'yr',
    features: ['Basic banking services', 'Online access'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '200',
    period: 'yr',
    features: ['All Basic features', 'Priority support', 'Investment tools', 'Insurance coverage'],
    highlighted: true,
  },
  {
    name: 'Professional',
    price: '750',
    period: 'yr',
    features: [
      'All Premium features',
      'Dedicated advisor',
      'Custom solutions',
      'Business tools',
      'Advanced analytics',
    ],
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Pricing
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 text-center shadow-sm transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? 'relative border-2 border-brand bg-white dark:bg-gray-950'
                  : 'border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-ink dark:text-white">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-brand">${plan.price}</span>
                <span className="text-sm text-mist dark:text-gray-400">/{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-4 text-left">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-mist dark:text-gray-400"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="#contact"
                  className={`w-full rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                    plan.highlighted
                      ? 'bg-brand text-white hover:bg-brand-dark'
                      : 'border border-brand text-brand hover:bg-brand hover:text-white'
                  }`}
                >
                  Buy Now
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
