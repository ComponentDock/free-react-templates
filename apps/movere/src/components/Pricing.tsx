import { Check } from 'lucide-react'
import { Badge, ButtonLink, cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface Tier {
  name: string
  price: string
  blurb: string
  features: readonly string[]
  popular?: boolean
}

const tiers: readonly Tier[] = [
  {
    name: 'Studio / 1BR',
    price: '$299',
    blurb: 'Perfect for apartments and small studios.',
    features: ['2 movers', '1 truck', 'Basic packing materials', '4 hours included'],
  },
  {
    name: '2-3 Bedrooms',
    price: '$599',
    blurb: 'Our most popular package for family homes.',
    features: [
      '3 movers',
      '1 truck',
      'Full packing materials',
      '8 hours included',
      'Furniture disassembly',
    ],
    popular: true,
  },
  {
    name: '4+ Bedrooms',
    price: '$999',
    blurb: 'Full-service moving for larger households.',
    features: [
      '4 movers',
      '2 trucks',
      'Premium packing materials',
      '12 hours included',
      'White-glove service',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Pricing
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Transparent, Honest Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Flat-rate packages with no hidden fees. What we quote is what you pay.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 100}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900',
                  tier.popular && 'ring-2 ring-primary-600',
                )}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tier.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tier.blurb}</p>
                <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                  <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                    from{' '}
                  </span>
                  {tier.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#quote"
                  className={cn('mt-8 w-full', tier.popular && 'bg-accent-500 hover:bg-accent-600')}
                >
                  Get Exact Quote
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Prices are estimates based on a standard household. Final quotes depend on distance, move
          date, and specialty items.
        </p>
      </div>
    </section>
  )
}
