import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface Tier {
  name: string
  price: number
  features: readonly string[]
  highlighted?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Basic',
    price: 10,
    features: ['5 Projects', '10GB Storage', 'Basic Support', 'Analytics'],
  },
  {
    name: 'Premium',
    price: 50,
    features: ['Unlimited Projects', '50GB Storage', 'Priority Support', 'Advanced Analytics'],
    highlighted: true,
  },
  {
    name: 'Business',
    price: 80,
    features: ['Team Access', '200GB Storage', 'Dedicated Support', 'Custom Reports'],
  },
  {
    name: 'Ultimate',
    price: 100,
    features: ['White Label', '500GB Storage', '24/7 Support', 'API Access'],
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="price" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">
            Pricing Plans
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
        </div>

        {/* Toggle */}
        <div
          className="mt-8 flex justify-center gap-1 rounded-full bg-white p-1 shadow-sm dark:bg-gray-800"
          role="tablist"
          aria-label="Billing period"
        >
          <button
            role="tab"
            aria-selected={!yearly}
            onClick={() => setYearly(false)}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-colors',
              !yearly ? 'bg-gradient-to-r from-brand to-brand-light text-white' : 'text-mist',
            )}
          >
            Monthly
          </button>
          <button
            role="tab"
            aria-selected={yearly}
            onClick={() => setYearly(true)}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-colors',
              yearly ? 'bg-gradient-to-r from-brand to-brand-light text-white' : 'text-mist',
            )}
          >
            Yearly
          </button>
        </div>

        {/* Tiers */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map(({ name, price, features, highlighted }) => (
            <div
              key={name}
              className={cn(
                'rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900',
                highlighted && 'ring-2 ring-brand shadow-md',
              )}
            >
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">{name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-brand">${price}</span>
                <span className="text-sm text-mist">/ {yearly ? 'Year' : 'Month'}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-mist">
                    <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#price"
                className="mt-8 block rounded-full bg-gradient-to-r from-brand to-brand-light py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand hover:ring-2 hover:ring-brand"
              >
                Purchase Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
