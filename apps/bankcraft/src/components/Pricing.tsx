import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: ['5 Transactions', 'Basic Analytics', 'Email Support', 'Mobile Banking'],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$79',
    period: '/month',
    features: [
      'Unlimited Transactions',
      'Advanced Analytics',
      'Priority Support',
      'Mobile Banking',
      'Investment Tools',
      'Insurance Coverage',
    ],
    popular: true,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    features: [
      'Unlimited Everything',
      'AI-Powered Analytics',
      'Dedicated Manager',
      'Mobile Banking',
      'Investment Tools',
      'Full Insurance',
      'Tax Advisory',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Pricing Plans</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Choose the plan that best fits your financial needs and goals.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 text-center ${
                plan.popular ? 'bg-brand text-white shadow-xl scale-105' : 'bg-white shadow-sm'
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase">
                  Popular
                </span>
              )}
              <h3 className={`mb-2 text-xl font-bold ${plan.popular ? '' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? '' : 'text-brand'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check
                      className={`h-5 w-5 shrink-0 ${plan.popular ? 'text-white' : 'text-secondary'}`}
                    />
                    <span className={`text-sm ${plan.popular ? '' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block w-full rounded-full py-3 text-sm font-bold transition ${
                  plan.popular
                    ? 'bg-white text-brand hover:bg-gray-100'
                    : 'bg-brand text-white hover:bg-brand-dark'
                }`}
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
