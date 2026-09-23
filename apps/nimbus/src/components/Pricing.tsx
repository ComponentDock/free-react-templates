const plans = [
  {
    name: 'Real Basic',
    price: 39,
    features: ['2.5 GB Space', 'Secure Online Transfer', 'Unlimited Styles', 'Customer Service'],
  },
  {
    name: 'Real Standard',
    price: 69,
    features: ['10 GB Space', 'Secure Online Transfer', 'Unlimited Styles', 'Customer Service'],
  },
  {
    name: 'Real Ultimate',
    price: 99,
    features: ['50 GB Space', 'Secure Online Transfer', 'Unlimited Styles', 'Customer Service'],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Choose the best pricing for you</h2>
          <p className="text-smoke">Simple, transparent pricing that grows with you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group border border-gray-200 text-center transition-all hover:border-primary-400"
            >
              <div className="border-b border-gray-200 bg-white/50 px-6 py-8">
                <h3 className="text-lg font-light text-ink">{plan.name}</h3>
              </div>
              <div className="bg-mist px-6 py-10 transition-colors group-hover:bg-primary-400">
                <div className="mb-6 flex items-start justify-center">
                  <span className="mt-2 text-lg text-ink group-hover:text-white">$</span>
                  <span className="text-6xl font-light text-ink group-hover:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-2 mt-4 text-left text-xs text-smoke group-hover:text-white">
                    Per
                    <br />
                    Month
                  </span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-smoke group-hover:text-white/90">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block bg-primary-400 px-8 py-3 text-sm font-medium text-white transition-colors group-hover:bg-accent-400"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
