import { Check } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

interface Plan {
  name: string
  price: number
  tagline: string
  popular?: boolean
  features: string[]
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: 9,
    tagline: 'For individuals getting started',
    features: ['1 app project', 'Community support', 'Basic analytics', 'Free updates'],
    cta: 'Choose Basic',
  },
  {
    name: 'Premium',
    price: 19,
    tagline: 'For growing app teams',
    popular: true,
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom domains'],
    cta: 'Choose Premium',
  },
  {
    name: 'Standard',
    price: 14,
    tagline: 'For small studios',
    features: ['5 app projects', 'Email support', 'Team analytics', 'Free updates'],
    cta: 'Choose Standard',
  },
  {
    name: 'Business',
    price: 49,
    tagline: 'For large organizations',
    features: [
      'Unlimited everything',
      'Dedicated manager',
      'SLA & security',
      'Custom integrations',
    ],
    cta: 'Choose Business',
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            Plans
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Pricing Table
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
            and emerging niches.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-white p-8',
                plan.popular
                  ? 'border-teal shadow-xl ring-2 ring-teal/30'
                  : 'border-gray-100 dark:border-gray-800 dark:bg-gray-950',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-aqua via-teal to-sky px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{plan.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-ink dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
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
