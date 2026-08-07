import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: ['5GB Storage', '10GB Bandwidth', '1 Database', '1 E-mail Account'],
  },
  {
    name: 'Pro Plan',
    price: '$10',
    features: ['500GB Storage', 'Unlimited Bandwidth', '10 Databases', 'Unlimited E-mail Accounts'],
  },
  {
    name: 'Ultimate Plan',
    price: '$20',
    features: ['1TB Storage', 'Unlimited Bandwidth', '100 Databases', 'Unlimited E-mail Accounts'],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Start free and upgrade when you are ready. No hidden fees.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border-t-[5px] border-primary-400 bg-gray-50 p-8 text-center shadow-lg dark:bg-gray-900"
            >
              <h3 className="font-display text-xl font-semibold text-ink dark:text-gray-100">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold text-primary-400">
                  {plan.price}
                </span>
                <span className="text-sm text-smoke dark:text-gray-400">/ Per Month</span>
              </div>
              <ul className="mt-8 space-y-3 text-left text-sm text-smoke dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className="mt-9 inline-block w-full rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
