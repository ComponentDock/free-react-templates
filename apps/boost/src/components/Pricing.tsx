import { Check } from 'lucide-react'

interface Tier {
  name: string
  price: string
  billing: string
  features: string[]
  highlighted: boolean
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    price: '$30',
    billing: 'Billed annually or $10 per month',
    features: [
      'Max 5 users',
      '29 local security',
      'Desktop App',
      'Email Support',
      'Phone Support 24/7',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$72',
    billing: 'Billed annually or $30 per month',
    features: [
      'Max 10 users',
      '29 local security',
      'Desktop App',
      'Email Support',
      'Phone Support 24/7',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$130',
    billing: 'Billed annually or $10 per month',
    features: [
      'Unlimited users',
      '29 local security',
      'Desktop App',
      'Email Support',
      'Phone Support 24/7',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white">Pricing for All</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-mist dark:text-gray-400">
          Simple, transparent pricing that scales with your team.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.highlighted
                  ? 'relative rounded-xl border-2 border-brand bg-white p-8 shadow-lg dark:bg-gray-900'
                  : 'rounded-xl border border-line bg-white p-8 dark:border-gray-800 dark:bg-gray-900'
              }
            >
              <h3 className="text-lg font-semibold text-ink dark:text-white">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-1 text-ink dark:text-white">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-mist dark:text-gray-400">/year</span>
              </p>
              <p className="mt-2 text-xs text-mist dark:text-gray-400">{tier.billing}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-mist dark:text-gray-400"
                  >
                    <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  tier.highlighted
                    ? 'mt-8 block rounded bg-brand px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:brightness-95'
                    : 'mt-8 block rounded border border-line bg-paper px-4 py-2.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white'
                }
              >
                Buy Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
