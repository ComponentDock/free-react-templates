import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Beginner',
    price: '$45',
    period: '/month',
    features: [
      'Access to basic gym equipment',
      'Locker room access',
      'Basic fitness assessment',
      '2 group classes per week',
    ],
    highlighted: false,
  },
  {
    name: 'Expert',
    price: '$65',
    period: '/month',
    features: [
      'Everything in Beginner',
      'Personal trainer sessions',
      'Nutrition consultation',
      'Unlimited group classes',
      'Priority class booking',
    ],
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$85',
    period: '/month',
    features: [
      'Everything in Expert',
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
        <h2 className="text-center font-display text-3xl font-bold text-ink">Choose Your Plan</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-lg',
                plan.highlighted && 'border-2 border-primary-400',
              )}
            >
              <h3 className="font-display text-xl font-bold text-ink">{plan.name}</h3>
              <div className="mt-6 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold text-primary-400">
                  {plan.price}
                </span>
                <span className="text-sm text-smoke">{plan.period}</span>
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
                href="#contact"
                className="boxed-btn3 mt-8 w-full px-6 py-3 text-xl text-white"
              >
                Join Now
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
