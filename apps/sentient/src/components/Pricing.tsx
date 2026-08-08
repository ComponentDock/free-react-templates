import { useState } from 'react'
import { Check } from 'lucide-react'
import { Badge, ButtonLink, cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

type Billing = 'monthly' | 'yearly'

interface Tier {
  name: string
  monthly: number
  yearly: number
  yearlyNote: string
  description: string
  cta: string
  popular?: boolean
  features: readonly string[]
}

const tiers: Tier[] = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    yearlyNote: 'billed annually ($0/year)',
    description: 'Explore the platform with generous free credits.',
    cta: 'Start Free',
    features: ['1,000 API calls/mo', 'Community support', '1 model deployment'],
  },
  {
    name: 'Pro',
    monthly: 49,
    yearly: 39,
    yearlyNote: 'billed annually ($468/year)',
    description: 'For teams shipping AI into production.',
    cta: 'Start Pro Trial',
    popular: true,
    features: [
      '500K API calls/mo',
      'Priority support',
      '10 model deployments',
      'Custom fine-tuning',
      'Analytics dashboard',
    ],
  },
  {
    name: 'Enterprise',
    monthly: 299,
    yearly: 239,
    yearlyNote: 'billed annually ($2,868/year)',
    description: 'Security, scale and control for large organizations.',
    cta: 'Contact Sales',
    features: [
      'Unlimited API calls',
      'Unlimited projects',
      'Dedicated success manager',
      'SSO & audit logs',
      '99.99% uptime SLA',
      'Custom models',
    ],
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const yearly = billing === 'yearly'

  return (
    <section id="pricing" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Usage-based pricing that scales
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Start free, upgrade when you grow. No hidden fees, cancel anytime.
          </p>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Annual billing"
            onClick={() => setBilling(yearly ? 'monthly' : 'yearly')}
            className="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"
          >
            <span className={cn(yearly ? 'text-gray-400' : 'text-gray-900 dark:text-white')}>
              Monthly
            </span>
            <span
              className={cn(
                'flex h-6 w-11 items-center rounded-full p-0.5 transition-colors',
                yearly ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700',
              )}
            >
              <span
                className={cn(
                  'h-5 w-5 rounded-full bg-white shadow transition-transform',
                  yearly && 'translate-x-5',
                )}
              />
            </span>
            <span className={cn(yearly ? 'text-gray-900 dark:text-white' : 'text-gray-400')}>
              Yearly
            </span>
            <Badge className="bg-accent-500/15 text-accent-600 dark:text-accent-400">
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
                'relative flex flex-col rounded-2xl border p-8',
                tier.popular
                  ? 'border-primary-500/50 bg-gray-950 text-white shadow-xl shadow-primary-600/20'
                  : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950',
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">
                  ${yearly ? tier.yearly : tier.monthly}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/mo</span>
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {yearly ? tier.yearlyNote : 'billed monthly'}
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
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
