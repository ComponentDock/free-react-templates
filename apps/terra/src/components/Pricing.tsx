import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    features: ['Full Body Massage', 'Facial Therapy', 'Skin Care', 'Parlor & Beauty'],
  },
  {
    name: 'Standard',
    price: '$79',
    features: [
      'Full Body Massage',
      'Facial Therapy',
      'Skin Care',
      'Parlor & Beauty',
      'Aroma Therapy',
    ],
  },
  {
    name: 'Premium',
    price: '$109',
    features: [
      'Full Body Massage',
      'Facial Therapy',
      'Skin Care',
      'Parlor & Beauty',
      'Aroma Therapy',
      'Relaxation Room',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Pricing
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl dark:text-white">
          Get Our Package Pricing
        </h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl border border-ink/10 bg-brand-soft p-8 text-center transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-gray-900"
            >
              <h3 className="font-display text-xl text-ink dark:text-white">{plan.name}</h3>
              <p className="mt-4 font-display text-5xl text-brand">
                {plan.price}
                <span className="text-base text-muted">/session</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center justify-center gap-2 text-sm text-muted"
                  >
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink href="#contact" variant="primary" className="mt-8 rounded-full px-8">
                Get Started
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
