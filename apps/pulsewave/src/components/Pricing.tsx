const PLANS = [
  {
    name: 'Basic',
    price: '$49',
    period: '/mo',
    features: ['5 Projects', '10GB Storage', 'Basic Support', 'Email Access'],
  },
  {
    name: 'Standard',
    price: '$99',
    period: '/mo',
    features: ['25 Projects', '50GB Storage', 'Priority Support', 'Email & Chat'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$199',
    period: '/mo',
    features: ['Unlimited Projects', '200GB Storage', '24/7 Support', 'All Channels'],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-icon-bg py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">
          Choose Your Pricing Plan
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map(({ name, price, period, features, highlighted }) => (
            <div
              key={name}
              className={`rounded-xl bg-white p-8 text-center shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)] ${
                highlighted ? 'ring-2 ring-brand' : ''
              }`}
            >
              <h3 className="mb-4 text-xl font-bold text-text-dark">{name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand">{price}</span>
                <span className="text-text-muted">{period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="text-sm text-text-muted">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block rounded-full px-8 py-3 text-sm font-semibold transition-colors ${
                  highlighted
                    ? 'bg-brand text-white hover:bg-brand/90'
                    : 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                GET STARTED
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
