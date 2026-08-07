import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Business',
    price: '$50.00',
    features: [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ],
  },
  {
    name: 'Business',
    price: '$60.00',
    features: [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ],
  },
  {
    name: 'Business',
    price: '$80.00',
    features: [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Simple Pricing
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Life firmament under them evening make after called dont saying likeness isn't wherein
            also forth she'd air two without business.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.price}
              className="rounded-md border border-gray-100 bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-display text-xl font-semibold text-ink dark:text-gray-100">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold text-primary-400">
                  {plan.price}
                </span>
                <span className="text-sm text-smoke dark:text-gray-400">/ mo</span>
              </div>
              <ul className="mt-8 space-y-3 text-left text-sm text-smoke dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-9 w-full rounded-md bg-gradient-to-r from-primary-500 to-accent-400 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Choose Plan
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
