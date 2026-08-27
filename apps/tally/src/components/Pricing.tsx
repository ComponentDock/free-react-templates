import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Personal',
    price: '$49',
    period: '/month',
    features: ['Basic Accounting', '1 User', 'Email Support', 'Monthly Reports', 'Tax Filing'],
    popular: false,
  },
  {
    name: 'Business',
    price: '$79',
    period: '/month',
    features: [
      'Advanced Accounting',
      '5 Users',
      'Priority Support',
      'Weekly Reports',
      'Tax Planning',
      'Payroll Management',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '$109',
    period: '/month',
    features: [
      'Full Accounting Suite',
      '15 Users',
      'Dedicated Support',
      'Real-time Reports',
      'Tax Strategy',
      'Financial Advisory',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$149',
    period: '/month',
    features: [
      'Enterprise Accounting',
      'Unlimited Users',
      '24/7 Support',
      'Custom Reports',
      'Tax Optimization',
      'Strategic Consulting',
      'Audit Support',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20" aria-label="Pricing">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">Pricing</p>
          <h2 className="text-3xl font-bold text-dark md:text-4xl">Pricing Plans</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-6 text-center transition-shadow hover:shadow-lg ${
                plan.popular ? 'border-brand shadow-md scale-105 relative' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-lg font-bold text-dark">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-brand shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
