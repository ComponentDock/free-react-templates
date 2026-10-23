import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

interface Plan {
  name: string
  blurb: string
  monthly: number
  yearly: number
  save?: string
  popular?: boolean
  features: string[]
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    blurb: 'Perfect for individuals and small projects',
    monthly: 0,
    yearly: 0,
    features: [
      'Up to 3 projects',
      'Basic analytics',
      'Community support',
      'Custom integrations',
      'Priority support',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    blurb: 'Best for growing teams and businesses',
    monthly: 29,
    yearly: 23,
    save: 'Save $72/year',
    popular: true,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority email support',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    blurb: 'For large organizations with custom needs',
    monthly: 99,
    yearly: 79,
    save: 'Save $240/year',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      '24/7 phone support',
      'Custom contracts',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Digital Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs. Save 20% with yearly billing.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 p-1 dark:border-gray-800">
            <button
              type="button"
              onClick={() => setYearly(false)}
              aria-pressed={!yearly}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                !yearly
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600 dark:text-gray-300',
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              aria-pressed={yearly}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                yearly
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600 dark:text-gray-300',
              )}
            >
              Yearly
            </button>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
              Save 20%
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8',
                plan.popular
                  ? 'border-primary-500 shadow-xl ring-2 ring-primary-500/30'
                  : 'border-gray-100 dark:border-gray-800',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{plan.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-ink dark:text-white">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              {plan.save && (
                <p className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {plan.save}
                </p>
              )}
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="mt-8 w-full rounded-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
