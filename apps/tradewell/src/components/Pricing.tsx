import { useState } from 'react'
import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const tiers = [
  {
    name: 'Basic',
    description: 'Perfect for beginners starting their investment journey.',
    monthly: '$0',
    yearly: '$0',
    tagline: 'Free forever',
    features: [
      'Commission-free stocks & ETFs',
      'Fractional shares from $1',
      'Basic market data',
      'Mobile app access',
      'SIPC insurance protection',
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For active traders who need advanced tools and faster execution.',
    monthly: '$9.99',
    yearly: '$7.99',
    tagline: 'Per month',
    features: [
      'Everything in Basic',
      'Real-time market data',
      'Advanced charting tools',
      'Instant deposits',
      'Priority support',
      'Tax-loss harvesting',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Premium',
    description: 'The complete package for serious investors and professionals.',
    monthly: '$29.99',
    yearly: '$23.99',
    tagline: 'Per month',
    features: [
      'Everything in Pro',
      'Developer API access',
      'Options & futures trading',
      'Professional research',
      'Dedicated account manager',
      'Unlimited tax optimization',
    ],
    cta: 'Go Premium',
    highlighted: false,
  },
] as const

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Simple, Transparent{' '}
            <span className="text-primary-600 dark:text-primary-400">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={cn(
                'text-sm font-medium',
                !yearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
              )}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle billing period"
              onClick={() => setYearly((value) => !value)}
              className={cn(
                'relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                yearly ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700',
              )}
            >
              <span
                className={cn(
                  'pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200',
                  yearly && 'translate-x-7',
                )}
              />
            </button>
            <span
              className={cn(
                'text-sm font-medium',
                yearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
              )}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-accent-100 px-2 py-0.5 text-xs font-semibold text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-white p-8 dark:bg-gray-900',
                tier.highlighted
                  ? 'border-primary-500 shadow-[0_4px_24px_-4px] shadow-primary-500/30'
                  : 'border-gray-200 dark:border-gray-800',
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tier.description}</p>

              <div className="mb-6 mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-bold text-gray-900 dark:text-white">
                    {yearly ? tier.yearly : tier.monthly}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tier.tagline}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <ButtonLink
                  href="#"
                  className={cn(
                    'w-full rounded-xl font-semibold',
                    tier.highlighted
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-[0_4px_20px_-4px] shadow-primary-500/40 hover:from-primary-400 hover:to-primary-500'
                      : 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800',
                  )}
                >
                  {tier.cta}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
