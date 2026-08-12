import { useState } from 'react'
import { Check } from 'lucide-react'
import { Badge, cn } from '@free-react-templates/ui'

interface Plan {
  name: string
  tagline: string
  monthly: number | null
  yearly: number | null
  features: string[]
  cta: string
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'For small businesses',
    monthly: 499,
    yearly: 399,
    features: [
      'Initial Business Assessment',
      'Monthly Strategy Session',
      'Email Support',
      'Basic Analytics Report',
      'Dedicated Consultant',
      '24/7 Priority Support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    tagline: 'For growing companies',
    monthly: 999,
    yearly: 799,
    features: [
      'Everything in Starter',
      'Bi-Weekly Strategy Sessions',
      'On-Site Workshops',
      'Advanced Analytics Report',
      'Dedicated Senior Consultant',
      'Priority Phone Support',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For large organizations',
    monthly: null,
    yearly: null,
    features: [
      'Everything in Professional',
      'Custom Engagement Model',
      'Executive Advisory Board',
      'Full-Team Embedding',
      'SLA-Backed Support',
      'Quarterly Business Reviews',
    ],
    cta: 'Contact Us',
  },
]

function formatPrice(price: number | null) {
  return price === null ? 'Custom' : `$${price}`
}

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section aria-labelledby="pricing-heading" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Our Pricing Plans
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            Choose Your Plan
          </h2>
        </div>

        <div className="mb-12 flex items-center justify-center gap-4">
          <span
            className={cn(
              'text-sm font-medium',
              !yearly ? 'text-brand-deep dark:text-white' : 'text-gray-400',
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((value) => !value)}
            className={cn(
              'relative h-7 w-14 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              yearly ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600',
            )}
          >
            <span
              className={cn(
                'absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform',
                yearly ? 'translate-x-8' : 'translate-x-1',
              )}
              aria-hidden="true"
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium',
              yearly ? 'text-brand-deep dark:text-white' : 'text-gray-400',
            )}
          >
            Yearly
          </span>
          <span className="rounded bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
            Save 20%
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800',
                plan.featured && 'border-2 border-accent',
              )}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white">
                  Most Popular
                </Badge>
              )}
              <h3 className="font-display text-xl font-bold text-brand-deep dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{plan.tagline}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-brand-deep dark:text-white">
                  {formatPrice(yearly ? plan.yearly : plan.monthly)}
                </span>
                <span className="text-sm text-gray-400">/month</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-body dark:text-gray-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-8 inline-flex justify-center rounded px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  plan.featured
                    ? 'bg-accent text-white hover:bg-accent/85'
                    : 'bg-brand text-white hover:bg-brand-deep',
                )}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
