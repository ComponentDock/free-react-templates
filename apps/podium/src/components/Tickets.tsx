import { Check, RefreshCcw, ShieldCheck, Zap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface TicketTier {
  name: string
  badge?: string
  badgeClass?: string
  description: string
  price: string
  originalPrice?: string
  features: string[]
  cta: string
  disabled?: boolean
  popular?: boolean
  cardClass: string
  ctaClass: string
}

const tiers: TicketTier[] = [
  {
    name: 'Early Bird',
    badge: 'Sold Out',
    badgeClass: 'bg-gray-500',
    description: 'Limited availability - save 40%',
    price: '$299',
    originalPrice: '$499',
    features: [
      'Full 3-day conference access',
      'All keynotes and talks',
      'Networking events',
      'Conference swag bag',
      'Lunch included',
    ],
    cta: 'Sold Out',
    disabled: true,
    cardClass: 'border-gray-200 bg-gray-50 opacity-75 dark:border-gray-800 dark:bg-gray-900',
    ctaClass: 'rounded-full bg-gray-300 text-gray-500 cursor-not-allowed',
  },
  {
    name: 'Regular',
    badge: 'Most Popular',
    badgeClass: 'bg-gradient-to-r from-primary-500 to-accent-500',
    description: 'Standard conference pass',
    price: '$499',
    features: [
      'Full 3-day conference access',
      'All keynotes and talks',
      'Networking events',
      'Conference swag bag',
      'Lunch included',
      'Workshop access (2 sessions)',
    ],
    cta: 'Get Regular Pass',
    popular: true,
    cardClass: 'border-primary-500 bg-primary-50 dark:bg-primary-950/50',
    ctaClass:
      'block w-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-primary-500/25 transition-shadow hover:shadow-xl',
  },
  {
    name: 'VIP',
    description: 'Premium experience',
    price: '$899',
    features: [
      'Full 3-day conference access',
      'All keynotes and talks',
      'Networking events',
      'Conference swag bag',
      'Lunch included',
      'Workshop access (2 sessions)',
      'VIP lounge access',
      'Priority seating',
    ],
    cta: 'Get VIP Pass',
    cardClass: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
    ctaClass:
      'block w-full rounded-full border-2 border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400 dark:hover:text-primary-400',
  },
  {
    name: 'Team',
    description: 'Best for 5+ members',
    price: '$1899',
    features: [
      'Full 3-day conference access',
      'All keynotes and talks',
      'Networking events',
      'Conference swag bag',
      'Lunch included',
      'Workshop access (2 sessions)',
      'Team of 5 passes',
      'Private networking session',
    ],
    cta: 'Get Team Pass',
    cardClass: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
    ctaClass:
      'block w-full rounded-full border-2 border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400 dark:hover:text-primary-400',
  },
]

const trustItems = [
  { icon: ShieldCheck, title: 'Secure checkout', sub: '256-bit SSL encrypted payments' },
  { icon: RefreshCcw, title: '30-day refund policy', sub: 'Full refund before the event' },
  { icon: Zap, title: 'Instant confirmation', sub: 'Tickets delivered by email' },
]

export function Tickets() {
  return (
    <section id="tickets" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Limited Availability
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get Your{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Tickets
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the pass that fits your needs. All tickets include access to keynotes and
            networking events.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={cn('relative rounded-2xl border-2 p-8 transition-all', tier.cardClass)}
            >
              {tier.badge && (
                <span
                  className={cn(
                    'absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-sm font-semibold text-white',
                    tier.badgeClass,
                  )}
                >
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {tier.price}
                </span>
                {tier.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">{tier.originalPrice}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">per person</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {tier.disabled ? (
                <button
                  type="button"
                  disabled
                  className={cn('mt-8 w-full px-6 py-3 text-center font-semibold', tier.ctaClass)}
                >
                  {tier.cta}
                </button>
              ) : (
                <a href="#tickets" className={cn('mt-8', tier.ctaClass)}>
                  {tier.cta}
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-8 md:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
