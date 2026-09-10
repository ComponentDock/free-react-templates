import { Check } from 'lucide-react'

interface Plan {
  name: string
  tagline: string
  price: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Basic',
    tagline: 'For small projects',
    price: '$9.99',
    features: ['5 Pages', '10GB Storage', 'Email Support', 'Basic Analytics'],
  },
  {
    name: 'Advanced',
    tagline: 'For growing businesses',
    price: '$39.99',
    features: [
      '25 Pages',
      '50GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'Custom Domain',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    tagline: 'For enterprise',
    price: '$59.99',
    features: [
      'Unlimited Pages',
      '200GB Storage',
      '24/7 Support',
      'Full Analytics',
      'Custom Domain',
      'API Access',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing-section" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wide text-heading">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded border bg-white p-8 text-center shadow-sm ${
                plan.highlighted ? 'border-primary-500 shadow-md' : 'border-gray-200'
              }`}
            >
              <h3 className="mb-1 text-lg font-bold uppercase text-heading">{plan.name}</h3>
              <p className="mb-4 text-sm text-smoke">{plan.tagline}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary-500">{plan.price}</span>
                <span className="text-sm text-smoke"> / month</span>
              </div>
              <ul className="mb-8 space-y-3 text-left text-sm text-smoke">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={16} className="text-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-primary-500 py-3 text-sm font-bold uppercase text-primary-500 transition-colors hover:bg-primary-500 hover:text-white">
                Buy It Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
