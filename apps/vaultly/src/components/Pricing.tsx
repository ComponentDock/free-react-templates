import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

interface Plan {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'Free forever',
    description: 'Get started with basic AI-powered financial guidance.',
    features: [
      '3 AI chats per month',
      'Basic portfolio tracking',
      'Monthly financial summary',
      'Community support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Plus',
    price: '$12',
    cadence: '/month',
    description: 'The most popular plan for serious wealth building.',
    features: [
      'Unlimited AI chats',
      'Smart portfolio management',
      'Goal-based planning',
      'Tax optimization',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$29',
    cadence: '/month',
    description: 'Everything in Plus, plus a dedicated human advisor.',
    features: [
      'Everything in Plus',
      'Dedicated human advisor',
      'Tax-loss harvesting',
      'Estate planning',
      '24/7 phone support',
    ],
    cta: 'Talk to Sales',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Start free and upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800',
                plan.popular
                  ? 'border-primary-600 ring-2 ring-primary-600/20 dark:border-primary-500'
                  : 'border-gray-200 dark:border-gray-700',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="font-mono text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm font-medium text-gray-500">{plan.cadence}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#"
                variant={plan.popular ? 'primary' : 'outline'}
                className="mt-8 w-full"
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
