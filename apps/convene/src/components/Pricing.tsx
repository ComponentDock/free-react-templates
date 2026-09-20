import { Star, ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface PricingTier {
  name: string
  price: string
  features: string[]
  highlighted?: boolean
}

const tiers: PricingTier[] = [
  {
    name: '1 Day Pass',
    price: '129',
    features: [
      'One Day Conference Ticket',
      'Coffee-break',
      'Lunch and Networking',
      'Keynote talk',
      'Talk to the Editors Session',
    ],
  },
  {
    name: 'Full Pass',
    price: '199',
    highlighted: true,
    features: [
      'One Day Conference Ticket',
      'Coffee-break',
      'Lunch and Networking',
      'Keynote talk',
      'Talk to the Editors Session',
      'Lunch and Networking',
      'Keynote talk',
    ],
  },
  {
    name: 'Group Pass',
    price: '79',
    features: [
      'One Day Conference Ticket',
      'Coffee-break',
      'Lunch and Networking',
      'Keynote talk',
      'Talk to the Editors Session',
    ],
  },
]

export function Pricing() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/convene-pricing/1600/800"
          alt=""
          className="h-full w-full object-cover opacity-15"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ticket Pricing</h2>
          <p className="mt-3 text-gray-400">Get your event ticket plan</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'rounded-lg p-8 text-center',
                tier.highlighted
                  ? 'relative bg-gradient-to-b from-brand/20 to-brand-pink/20 ring-2 ring-brand'
                  : 'bg-white/5 backdrop-blur-sm',
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-pink px-4 py-1 text-xs font-semibold text-white">
                  <Star className="mr-1 inline h-3 w-3" />
                  Top Rated
                </span>
              )}
              <h4 className="font-display text-lg font-semibold text-white">{tier.name}</h4>
              <div className="mt-4">
                <span className="text-sm text-gray-400">$</span>
                <span className="font-display text-5xl font-bold text-white">{tier.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-left text-sm text-gray-300">
                {tier.features.map((f, i) => (
                  <li key={`${tier.name}-${i}`} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-pink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get Ticket <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
