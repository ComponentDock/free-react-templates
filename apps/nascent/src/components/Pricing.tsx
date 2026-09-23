import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For individuals just getting started',
    features: ['1 workspace', 'Basic analytics', 'Email support', 'Public templates'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For growing teams and businesses',
    features: [
      'Unlimited workspaces',
      'Advanced analytics',
      'Priority support',
      'Private templates',
      'Custom domains',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mo',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'SLA guarantee',
      'SSO integration',
      'Custom integrations',
      'Audit logs',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section data-testid="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900">Affordable pricing plan</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Choose the plan that fits your needs. Upgrade as you grow — no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`rounded p-8 ${
                plan.featured
                  ? 'relative bg-orange-400 text-white shadow-xl'
                  : 'bg-white text-gray-900 shadow'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-orange-400">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-xl font-bold font-heading">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm opacity-80">{plan.period}</span>}
              </div>
              <p className={`mb-6 text-sm ${plan.featured ? 'opacity-90' : 'text-body'}`}>
                {plan.description}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className={plan.featured ? 'text-white' : 'text-orange-400'} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block rounded py-3 text-center text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-white text-orange-400 hover:bg-orange-50'
                    : 'bg-orange-400 text-white hover:bg-orange-600'
                }`}
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
