const plans = [
  {
    name: 'Beginner',
    price: 'Free',
    period: '1 Day',
    features: [
      '2 Email Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation Inside',
      'SEO Plan',
    ],
    highlighted: false,
  },
  {
    name: 'Beginner',
    price: '$29',
    period: 'Per Month',
    features: [
      '2 Email Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation Inside',
      'SEO Plan',
    ],
    highlighted: true,
  },
  {
    name: 'Beginner',
    price: '$59',
    period: 'Per Month',
    features: [
      '2 Email Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation Inside',
      'SEO Plan',
    ],
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/fitlane-pricing/1920/1080)',
        }}
      />
      <div className="absolute inset-0 bg-navy-500/85" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/80">
            Our Programs
          </p>
          <h2 className="font-display text-3xl font-bold text-white">Pricing</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={`${plan.name}-${i}`}
              className={`flex flex-col rounded bg-white px-8 py-10 text-center shadow-lg ${
                plan.highlighted ? 'border-2 border-primary-500' : ''
              }`}
            >
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                {plan.name}
              </h3>
              <div className="mb-1 text-4xl font-bold text-ink">{plan.price}</div>
              <p className="mb-6 text-sm text-muted">{plan.period}</p>

              <ul className="mb-8 flex-1 space-y-3 text-sm text-muted">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto inline-block rounded px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  plan.highlighted
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-navy-500 text-white hover:bg-navy-600'
                }`}
              >
                Order Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
