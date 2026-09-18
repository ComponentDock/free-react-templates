import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Perfect for personal projects',
    features: ['1 Website', '5 GB Storage', '10 GB Bandwidth', 'SSL Certificate', 'Email Support'],
    featured: false,
  },
  {
    name: 'Startup',
    price: '$19',
    desc: 'For small businesses',
    features: [
      '5 Websites',
      '25 GB Storage',
      '100 GB Bandwidth',
      'SSL Certificate',
      'Priority Support',
      'Daily Backups',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    price: '$49',
    desc: 'For growing companies',
    features: [
      '25 Websites',
      '100 GB Storage',
      'Unlimited Bandwidth',
      'SSL Certificate',
      '24/7 Support',
      'Daily Backups',
      'CDN Included',
    ],
    featured: true,
  },
  {
    name: 'Pro',
    price: '$99',
    desc: 'For enterprise teams',
    features: [
      'Unlimited Websites',
      '500 GB Storage',
      'Unlimited Bandwidth',
      'SSL Certificate',
      '24/7 Support',
      'Daily Backups',
      'CDN Included',
      'Dedicated IP',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">Our Best Pricing</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded bg-white p-8 text-center ${plan.featured ? 'ring-2 ring-brand' : ''}`}
            >
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-text-muted">
                {plan.name}
              </h3>
              <div className="mb-2 text-5xl font-bold text-text-primary">{plan.price}</div>
              <p className="mb-6 text-sm text-text-muted">/mo</p>
              <p className="mb-6 text-sm text-text-muted">{plan.desc}</p>
              <ul className="mb-8 space-y-3 text-left text-sm text-text-muted">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
