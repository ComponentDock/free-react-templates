import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

interface Package {
  name: string
  price: string
  guests: string
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    name: 'Intimate',
    price: '$3,500',
    guests: 'Up to 50 guests',
    features: [
      'Day-of coordination',
      'Basic decor consultation',
      'Vendor coordination',
      'Full event design',
      'Rehearsal dinner planning',
    ],
  },
  {
    name: 'Classic',
    price: '$7,500',
    guests: 'Up to 150 guests',
    popular: true,
    features: [
      'Partial planning & design',
      'Custom design concept',
      'Venue search assistance',
      'Rehearsal dinner coordination',
      'Honeymoon planning',
    ],
  },
  {
    name: 'Grand',
    price: '$15,000',
    guests: 'Unlimited guests',
    features: [
      'Full planning & design',
      'Destination wedding coordination',
      'Multi-day celebration extras',
      'Guest concierge services',
      'Honeymoon design',
    ],
  },
]

export function Packages() {
  return (
    <section id="packages" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-500">
            Investment
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Wedding Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the level of planning support that fits your needs. Every package is customizable
            to match your unique vision.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl gap-8 lg:grid-cols-3">
          {packages.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm dark:bg-gray-900',
                plan.popular
                  ? 'border-primary-600 ring-2 ring-primary-600 dark:border-primary-500 dark:ring-primary-500'
                  : 'border-gray-200 dark:border-gray-800',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  one-time investment
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400">
                {plan.guests}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className={cn(
                  'mt-8 block w-full rounded-full py-3 text-center text-sm font-medium',
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'border border-gray-300 bg-white text-gray-700 hover:border-primary-600 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-primary-400 dark:hover:text-primary-400',
                )}
              >
                Inquire
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
