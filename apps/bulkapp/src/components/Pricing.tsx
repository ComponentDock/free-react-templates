import { ButtonLink } from '@free-react-templates/ui'
import { Check } from 'lucide-react'

const plan = {
  name: 'Standard',
  audience: 'For the individuals',
  price: '£199',
  features: [
    '2.5 GB Free Photos',
    'Secure Online Transfer Indeed',
    'Unlimited Styles for interface',
    'Reliable Customer Service',
    'Manual Backup Provided',
  ],
} as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-gray-900 dark:text-white">
          Pricing Table
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        {/* The original ColorLib design renders the Standard card three times
            in a three-column row; kept 1:1. */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{plan.audience}</p>
              <p className="mt-6 font-display text-5xl font-bold text-primary-600">{plan.price}</p>
              <ul className="mt-8 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#screens"
                className="mt-10 w-full rounded-md bg-gradient-to-r from-brand-start to-brand-end text-white hover:opacity-90"
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
