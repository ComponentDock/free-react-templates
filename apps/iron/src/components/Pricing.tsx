import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Standard',
    price: '£199',
    audience: 'Individuals',
    features: [
      'Access to all gym equipment',
      'Locker room access',
      'Basic fitness assessment',
      'Group classes included',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: '£399',
    audience: 'Small Company',
    features: [
      'Everything in Standard',
      'Private training sessions',
      'Nutrition consultation',
      'Priority class booking',
      'Guest passes (2/month)',
    ],
    highlighted: true,
  },
  {
    name: 'Ultimate',
    price: '£499',
    audience: 'Large Company',
    features: [
      'Everything in Business',
      'Dedicated personal trainer',
      'Custom meal plans',
      'VIP lounge access',
      'Unlimited guest passes',
      'Spa & recovery suite',
    ],
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing plans" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">
          Choose the Perfect Plan for you
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-lg',
                plan.highlighted && 'border-2 border-primary-400',
              )}
            >
              <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-smoke">{plan.audience}</p>
              <div className="mt-6 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold text-primary-400">
                  {plan.price}
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-left text-sm text-smoke">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#"
                className="mt-8 w-full rounded bg-primary-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
              >
                Purchase Plan
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
