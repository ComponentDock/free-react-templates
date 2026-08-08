import { useState } from 'react'
import { Check } from 'lucide-react'
import { Badge, ButtonLink, cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

type Billing = 'monthly' | 'annual'

interface Tier {
  name: string
  monthly: number
  annual: number
  annualNote: string
  description: string
  cta: string
  popular?: boolean
  features: readonly string[]
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    monthly: 29,
    annual: 23,
    annualNote: 'Billed annually ($276/year)',
    description: 'Perfect for small teams getting started',
    cta: 'Get started',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '10 GB storage',
      'Email support',
      'API access',
      'Custom integrations',
    ],
  },
  {
    name: 'Pro',
    monthly: 79,
    annual: 63,
    annualNote: 'Billed annually ($756/year)',
    description: 'For growing teams that need more',
    cta: 'Get started',
    popular: true,
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      '100 GB storage',
      'Priority support',
      'API access',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    monthly: 199,
    annual: 159,
    annualNote: 'Billed annually ($1908/year)',
    description: 'For large organizations',
    cta: 'Contact sales',
    features: [
      'Unlimited team members',
      'Custom analytics',
      'Unlimited storage',
      '24/7 dedicated support',
      'API access',
    ],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const annual = billing === 'annual'

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Annual billing"
            onClick={() => setBilling(annual ? 'monthly' : 'annual')}
            className="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"
          >
            <span className={cn(annual ? 'text-gray-400' : 'text-gray-900 dark:text-white')}>
              Monthly
            </span>
            <span
              className={cn(
                'flex h-6 w-11 items-center rounded-full p-0.5 transition-colors',
                annual ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700',
              )}
            >
              <span
                className={cn(
                  'h-5 w-5 rounded-full bg-white shadow transition-transform',
                  annual && 'translate-x-5',
                )}
              />
            </span>
            <span className={cn(annual ? 'text-gray-900 dark:text-white' : 'text-gray-400')}>
              Annual
            </span>
            <Badge className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
              Save 20%
            </Badge>
          </button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal
              key={tier.name}
              delay={index * 100}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8 shadow-soft transition-all hover:shadow-soft-lg',
                tier.popular
                  ? 'border-primary-500/50 bg-gray-950 text-white'
                  : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950',
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${annual ? tier.annual : tier.monthly}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {annual ? tier.annualNote : 'Billed monthly'}
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check
                      className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#cta"
                variant={tier.popular ? 'primary' : 'outline'}
                className="mt-8 w-full justify-center"
              >
                {tier.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
