import { Check, Ticket, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const tiers = [
  {
    name: 'Early Access',
    price: '$599',
    compareAt: '$999',
    note: 'Limited to first 500 registrants',
    features: [
      '3-day conference access',
      'All keynotes & talks',
      'Networking events',
      'Conference swag',
      'Lunch & refreshments',
    ],
    soldOut: true,
    popular: false,
  },
  {
    name: 'Builder',
    price: '$999',
    compareAt: null,
    note: 'For practitioners and engineers',
    features: [
      'Everything in Early Access',
      '2 workshop sessions',
      'Hackathon participation',
      'Discord community access',
      'Talk recordings (1 year)',
    ],
    soldOut: false,
    popular: true,
  },
  {
    name: 'Researcher',
    price: '$1,499',
    compareAt: null,
    note: 'For academics and lab members',
    features: [
      'Everything in Builder',
      'Poster presentation slot',
      'Research networking dinner',
      'Mentorship with lab leads',
    ],
    soldOut: false,
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    compareAt: null,
    note: 'For teams of 10+',
    features: [
      'Everything in Researcher',
      'Private team tracks',
      'Dedicated concierge',
      'On-site meeting rooms',
    ],
    soldOut: false,
    popular: false,
  },
]

export function Tickets() {
  return (
    <section id="tickets" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Secure Your Spot
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Early bird pricing sold out in 48 hours. Don&apos;t miss your chance to be part of the
            future.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'flex flex-col rounded-2xl border p-6',
                tier.popular
                  ? 'border-primary-500 bg-gray-950 text-white shadow-xl dark:bg-gray-900'
                  : 'border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900',
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{tier.name}</h3>
                {tier.popular && (
                  <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold">{tier.price}</span>
                {tier.compareAt && (
                  <span className="text-sm text-gray-400 line-through">{tier.compareAt}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-400">{tier.note}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400"
                      aria-hidden="true"
                    />
                    <span
                      className={
                        tier.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {tier.soldOut ? (
                  <span className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-400">
                    <X className="h-4 w-4" aria-hidden="true" />
                    Sold Out
                  </span>
                ) : (
                  <ButtonLink
                    href="#faq"
                    className="w-full rounded-full px-4 py-2.5 text-center text-sm"
                  >
                    <Ticket className="h-4 w-4" aria-hidden="true" />
                    Get Tickets
                  </ButtonLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
