import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  { name: 'Standard', price: '$50.00' },
  { name: 'Business', price: '$50.00' },
  { name: 'Premium', price: '$60.00' },
  { name: 'Ultimate', price: '$80.00' },
] as const

const planFeatures = [
  '2GB Bandwidth',
  'Two Account',
  '15GB Storage',
  'Sale After Service',
  '3 Host Domain',
  '24/7 Support',
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Simple Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-accent text-xl text-body dark:text-gray-400">
            Life firmament under them evening make after called dont saying likeness isn't wherein
            also forth she'd air two without
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-2xl font-semibold text-ink dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-primary-600">
                {plan.price}
                <span className="text-lg font-medium text-body dark:text-gray-400"> / mo</span>
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {planFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                className="mt-8 w-full rounded-full font-accent uppercase tracking-wide"
              >
                Purchase Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
