import { ButtonLink } from '@free-react-templates/ui'

const tiers = [
  { name: 'Basic', price: '$24.50', features: ['Consultation', 'Hair styling', 'Basic facial'] },
  {
    name: 'Standard',
    price: '$39.50',
    features: ['Everything in Basic', 'Makeup application', 'Manicure'],
  },
  {
    name: 'Premium',
    price: '$54.50',
    features: ['Everything in Standard', 'Full-body massage', 'Hair treatment'],
  },
  {
    name: 'Platinum',
    price: '$89.50',
    features: ['Everything in Premium', 'Spa day package', 'Priority booking'],
  },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Simple, Honest Pricing
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Beauty Pricing
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-4">
                <span className="font-display text-4xl font-extrabold text-brand">
                  {tier.price}
                </span>
                <span className="ml-1 text-xs uppercase text-mist">/ one trip</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-mist dark:text-gray-400">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href="#appointment"
                className="mt-8 rounded-full border border-brand px-8 uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Order Now
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
