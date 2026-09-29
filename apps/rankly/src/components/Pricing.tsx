import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Standard',
    audience: 'For Individuals',
    price: 199,
    description: 'Perfect for small projects getting started with SEO.',
    features: [
      'Up to 5 Pages Optimized',
      'Basic Keyword Research',
      'Monthly Reporting',
      'Email Support',
      'Standard Analytics',
    ],
  },
  {
    name: 'Business',
    audience: 'For Small Companies',
    price: 399,
    description: 'Advanced strategies for growing businesses.',
    features: [
      'Up to 20 Pages Optimized',
      'Advanced Keyword Research',
      'Weekly Reporting',
      'Priority Support',
      'Advanced Analytics',
    ],
    highlighted: true,
  },
  {
    name: 'Ultimate',
    audience: 'For Large Companies',
    price: 499,
    description: 'Enterprise-grade SEO for maximum visibility.',
    features: [
      'Unlimited Pages Optimized',
      'Enterprise Keyword Strategy',
      'Real-time Reporting',
      'Dedicated Account Manager',
      'Full Analytics Suite',
    ],
  },
]

export function Pricing() {
  return (
    <section id="plan" className="bg-paper py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Choose the Perfect Plan for You</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg bg-white p-8 shadow-md transition-shadow hover:shadow-lg ${
                plan.highlighted ? 'ring-2 ring-brand' : ''
              }`}
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
                  <p className="text-sm text-mist">{plan.audience}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-brand">${plan.price}</span>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-mist">{plan.description}</p>

              <ul className="mb-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ink">
                    <Check className="h-4 w-4 flex-shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="w-full rounded bg-brand py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
              >
                Purchase Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
