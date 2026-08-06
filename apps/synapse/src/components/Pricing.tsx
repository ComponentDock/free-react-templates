import { ButtonLink, cn } from '@free-react-templates/ui'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Real Basic',
    price: '$39',
    space: '2.5 GB Space',
    featured: false,
  },
  {
    name: 'Real Standard',
    price: '$69',
    space: '10 GB Space',
    featured: true,
  },
  {
    name: 'Real Premium',
    price: '$99',
    space: '20 GB Space',
    featured: false,
  },
] as const

const features = ['Secure Online Transfer', 'Unlimited Styles', 'Customer Service'] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Choose Your Price Plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'flex flex-col rounded-2xl border bg-white p-8 text-center dark:bg-gray-950',
                plan.featured
                  ? 'border-primary-500 shadow-lg ring-2 ring-primary-500/30'
                  : 'border-gray-100 dark:border-gray-800',
              )}
            >
              <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 font-display text-4xl font-extrabold text-primary-500">
                {plan.price}
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  {' '}
                  Per Month
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-left">
                {[plan.space, ...features].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-8 rounded-full px-8 py-3"
                variant={plan.featured ? 'primary' : 'outline'}
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
