import { Check } from 'lucide-react'
import { ButtonLink, Card } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic Plan',
    price: '$29',
    features: ['1 project', '2 design revisions', 'Email support', 'Delivery in 30 days'],
    featured: false,
    cta: 'Get started',
    note: null,
  },
  {
    name: 'Standard Plan',
    price: '$29',
    features: ['5 projects', 'Unlimited revisions', 'Priority support', 'Delivery in 21 days'],
    featured: true,
    cta: 'Get started',
    note: 'Free 30 Day Trial',
  },
  {
    name: 'Premium Plan',
    price: '$29',
    features: [
      'Unlimited projects',
      'Dedicated architect',
      'On-site visits',
      'Delivery in 14 days',
    ],
    featured: false,
    cta: 'Request a quote',
    note: null,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Simple, transparent pricing for projects of every size — no hidden fees, cancel anytime.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.featured ? 'border-brand/60 ring-2 ring-brand/40' : undefined}
            >
              <Card.Header className="p-6 pb-2">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 font-display text-4xl font-extrabold text-ink dark:text-white">
                  {plan.price}
                  <span className="text-base font-medium text-mist dark:text-gray-400">
                    {' '}
                    per month
                  </span>
                </p>
              </Card.Header>
              <Card.Content className="p-6 pt-2">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-mist dark:text-gray-300"
                    >
                      <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#contact"
                  variant={plan.featured ? 'primary' : 'outline'}
                  className={plan.featured ? undefined : 'mt-6 w-full'}
                  size="md"
                >
                  {plan.cta}
                </ButtonLink>
                {plan.note && (
                  <p className="mt-3 text-center text-xs font-medium text-brand">{plan.note}</p>
                )}
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
