const plans = [
  {
    name: 'Standard',
    price: '$49',
    period: '/month',
    features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support'],
  },
  {
    name: 'Business',
    price: '$99',
    period: '/month',
    features: [
      '25 Projects',
      '50GB Storage',
      'Advanced Analytics',
      'Priority Support',
      'Custom Domain',
    ],
  },
  {
    name: 'Premium',
    price: '$199',
    period: '/month',
    features: [
      'Unlimited Projects',
      '200GB Storage',
      'Full Analytics',
      '24/7 Support',
      'Custom Domain',
      'API Access',
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-dark">Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="overflow-hidden rounded-lg border border-gray-200">
              <div className="bg-pricing-head px-6 py-4">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              </div>
              <div className="px-6 py-8">
                <p className="mb-6 text-4xl font-bold text-dark">
                  {plan.price}
                  <span className="text-sm font-normal text-text-muted">{plan.period}</span>
                </p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-text-muted">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block rounded-full border border-brand px-6 py-2 text-sm font-medium text-brand transition hover:bg-brand hover:text-dark"
                >
                  Purchase
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
