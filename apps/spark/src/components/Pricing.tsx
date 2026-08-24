import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 9,
    features: ['5 Projects', '10 GB Storage', 'Basic Analytics', 'Email Support', 'API Access'],
    popular: false,
  },
  {
    name: 'Professional',
    price: 29,
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Advanced Analytics',
      'Priority Support',
      'API Access',
      'Custom Branding',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Unlimited Everything',
      '1 TB Storage',
      'Enterprise Analytics',
      'Dedicated Support',
      'API Access',
      'Custom Branding',
      'SSO Integration',
    ],
    popular: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl">
          Choose Your Very Best Pricing Plan.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-xl font-bold text-ink">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-primary-500">${plan.price}</span>
                <span className="text-smoke">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-ink">
                    <Check className="h-4 w-4 text-primary-500" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className={`block rounded-full py-3 text-center text-sm font-bold transition-colors ${
                  plan.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-mist text-primary-600 hover:bg-lavender'
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
