import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 47,
    period: 'yr',
    popular: false,
    features: [
      { text: 'Basic account management', included: true },
      { text: 'Online banking access', included: true },
      { text: 'Monthly statements', included: true },
      { text: 'Investment advisory', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Premium',
    price: 200,
    period: 'yr',
    popular: true,
    features: [
      { text: 'Advanced account management', included: true },
      { text: 'Online banking access', included: true },
      { text: 'Monthly statements', included: true },
      { text: 'Investment advisory', included: true },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 750,
    period: 'yr',
    popular: false,
    features: [
      { text: 'Enterprise account management', included: true },
      { text: 'Online banking access', included: true },
      { text: 'Monthly statements', included: true },
      { text: 'Investment advisory', included: true },
      { text: 'Priority support', included: true },
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Choose the plan that fits your financial needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg bg-white p-8 shadow-sm transition hover:shadow-md ${
                plan.popular ? 'ring-2 ring-brand' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                  Popular
                </span>
              )}
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-brand">${plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check className="h-4 w-4 flex-shrink-0 text-secondary" />
                    ) : (
                      <X className="h-4 w-4 flex-shrink-0 text-gray-300" />
                    )}
                    <span className={f.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`w-full rounded-full py-3 text-sm font-bold transition ${
                  plan.popular
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
