const plans = [
  {
    name: 'Basic plan',
    price: 9,
    features: ['1GB Disk Space', '100 Email Account', '24/24 Support'],
  },
  {
    name: 'Silver plan',
    price: 19,
    features: ['1GB Disk Space', '100 Email Account', '24/24 Support'],
  },
  {
    name: 'Gold plan',
    price: 39,
    features: ['1GB Disk Space', '100 Email Account', '24/24 Support'],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">Pricing Table</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group rounded bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-body">
                {plan.name}
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-heading">${plan.price}</span>
                <span className="text-body"> / month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-body">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-[3px] border-2 border-primary bg-transparent py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                Purchase now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
