const plans = [
  {
    name: 'Basic Plan',
    price: 0,
    tagline: '100% free. Forever',
    features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 / GB Overages', 'All features'],
  },
  {
    name: 'Advance Plan',
    price: 19,
    tagline: 'All features are included',
    features: ['200 GB Bandwidth', '200 GB Storage', '$0.80 / GB Overages', 'All features'],
  },
  {
    name: 'Expert Plan',
    price: 49,
    tagline: 'All features are included',
    features: ['500 GB Bandwidth', '500 GB Storage', '$0.50 / GB Overages', 'All features'],
  },
  {
    name: 'Pro Plan',
    price: 99,
    tagline: 'All features are included',
    features: ['Unlimited Bandwidth', '1 TB Storage', '$0.20 / GB Overages', 'All features'],
  },
]

export function Pricing() {
  return (
    <section className="bg-panel py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-heading">Our Best Pricing</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group relative rounded bg-white p-8 shadow-sm transition-all hover:translate-y-[-4px]"
            >
              {/* Hover back-sheet */}
              <div className="absolute inset-x-4 bottom-[-20px] -z-10 h-full rounded bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="mb-1 text-base font-semibold text-muted">{plan.name}</h3>
              <div className="mb-2 flex items-baseline gap-1">
                <sup className="text-lg text-heading">$</sup>
                <span className="text-5xl font-semibold text-heading">{plan.price}</span>
                <span className="text-sm text-muted">/mo</span>
              </div>
              <p className="mb-6 text-sm text-muted">{plan.tagline}</p>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-heading">
                Enjoy All The Features
              </h4>
              <ul className="mb-8 flex flex-col gap-2 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#pricing"
                className="block w-full rounded-[5px] bg-brand-pink py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-pink/90"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
