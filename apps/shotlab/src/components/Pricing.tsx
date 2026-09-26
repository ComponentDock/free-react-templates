const plans = [
  {
    title: 'Model Photography',
    price: '$49.99',
    features: ['10 Photos', 'Basic Editing', 'Commercial License', '48h Delivery'],
  },
  {
    title: 'Portrait Photography',
    price: '$79.99',
    features: ['25 Photos', 'Advanced Editing', 'Commercial License', '24h Delivery'],
  },
  {
    title: 'Fashion Photography',
    price: '$99.99',
    features: ['50 Photos', 'Premium Editing', 'Commercial License', '24h Delivery'],
  },
  {
    title: 'Wedding Photography',
    price: '$149.99',
    features: ['100 Photos', 'Premium Editing', 'Full License', 'Same Day Delivery'],
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-dark py-20 text-white"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/shotlab-pricing-bg/1600/900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-16">
        <h2 className="mb-12 text-center font-display text-3xl lg:text-4xl">My Pricing</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded border border-white/10 bg-dark/80 p-8 text-center"
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">
                {plan.title}
              </h3>
              <div className="mb-6 text-3xl font-bold">{plan.price}</div>
              <ul className="mb-8 space-y-3 text-sm text-muted">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block w-full rounded border border-brand-400 py-2 text-xs font-semibold uppercase tracking-widest text-brand-400 transition-colors hover:bg-brand-400 hover:text-dark"
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
