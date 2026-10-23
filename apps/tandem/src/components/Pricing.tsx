import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
  },
  {
    name: 'Medium',
    price: '$49',
    features: ['Easy Installations', 'Unlimited support', 'Unique Elements'],
  },
  {
    name: 'Business',
    price: '$99',
    features: ['Easy Installations', 'Unlimited support', 'Unique Elements'],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">
            Pricing Plan
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Awesome Pricing Plan
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 font-display text-4xl font-bold text-primary-600">{plan.price}</p>
              <ul className="mt-8 space-y-3 text-sm text-ink dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink href="#contact" className="mt-10 w-full rounded-full">
                Purchase
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
