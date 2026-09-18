import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    features: ['Basic Analytics', '1 Project', 'Community Support', '5GB Storage'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Startup',
    price: '$29',
    period: '/mo',
    features: ['Advanced Analytics', '10 Projects', 'Email Support', '25GB Storage', 'API Access'],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$79',
    period: '/mo',
    features: [
      'Custom Analytics',
      'Unlimited Projects',
      'Priority Support',
      '100GB Storage',
      'API Access',
      'Custom Domain',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    features: [
      'Enterprise Analytics',
      'Unlimited Projects',
      'Dedicated Support',
      'Unlimited Storage',
      'API Access',
      'Custom Domain',
      'SLA Guarantee',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-ink md:text-4xl">
          Our Best Pricing
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-8 text-center ${
                tier.highlighted ? 'bg-brand shadow-lg ring-2 ring-brand' : 'bg-white shadow-sm'
              }`}
            >
              <h3
                className={`font-display text-lg font-semibold ${
                  tier.highlighted ? 'text-dark' : 'text-ink'
                }`}
              >
                {tier.name}
              </h3>
              <div className="mt-4">
                <span
                  className={`font-display text-4xl font-bold ${
                    tier.highlighted ? 'text-dark' : 'text-ink'
                  }`}
                >
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlighted ? 'text-dark/70' : 'text-mist'}`}>
                  {tier.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-left">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check
                      className={`h-4 w-4 shrink-0 ${
                        tier.highlighted ? 'text-dark' : 'text-brand'
                      }`}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${tier.highlighted ? 'text-dark' : 'text-mist'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-block rounded-[30px] px-8 py-2 text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-dark text-white hover:bg-ink-dark'
                    : 'bg-brand text-dark hover:bg-brand-dark'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
