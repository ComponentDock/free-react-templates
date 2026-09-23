import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0.00',
    borderColor: 'border-primary-400',
    features: ['Basic Support', 'Migration Support', 'Dedicated Technical Support', 'Services'],
  },
  {
    name: 'Premium',
    price: '$99.00',
    borderColor: 'border-ink dark:border-white',
    features: ['Basic Support', 'Migration Support', 'Dedicated Technical Support', 'Services'],
  },
  {
    name: 'Enterprise',
    price: '$180.00',
    borderColor: 'border-primary-400',
    features: ['Basic Support', 'Migration Support', 'Dedicated Technical Support', 'Services'],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Pricing for All
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            Far far away, behind the word mountains, far from the countries.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border-t-4 bg-white p-8 text-center shadow-sm dark:bg-gray-800 ${plan.borderColor}`}
            >
              <h3 className="mb-4 font-display text-xl font-bold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mb-6 text-3xl font-bold text-primary-500">{plan.price}</p>
              <ul className="mb-8 space-y-3 text-left text-sm text-smoke dark:text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
