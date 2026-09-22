import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$39',
    period: '/month',
    features: [
      'Access to gym floor',
      'Locker room access',
      'Free WiFi',
      'Basic fitness assessment',
    ],
  },
  {
    name: 'Premium',
    price: '$99',
    period: '/month',
    features: [
      'All Basic features',
      'Unlimited classes',
      'Personal trainer (2x/week)',
      'Spa & sauna access',
      'Nutrition plan',
    ],
    highlighted: true,
  },
  {
    name: 'Standard',
    price: '$59',
    period: '/month',
    features: ['All Basic features', 'Group classes', 'Sauna access', 'Monthly body analysis'],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border p-10 text-center ${
                plan.highlighted
                  ? 'border-brand bg-ink-dark text-white'
                  : 'border-gray-200 bg-white text-ink'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand px-6 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
              <h3 className="mb-2 font-display text-2xl font-bold uppercase">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-muted'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 ${plan.highlighted ? 'text-brand' : 'text-brand'}`}
                    />
                    <span className={plan.highlighted ? 'text-gray-300' : 'text-muted'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className={`block w-full py-3 font-display text-sm font-light uppercase tracking-widest ${
                  plan.highlighted
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border border-brand bg-transparent text-ink hover:bg-brand hover:text-white'
                }`}
              >
                Get Started
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
