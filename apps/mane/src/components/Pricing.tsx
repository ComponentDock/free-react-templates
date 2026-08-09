import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const tiers = [
  {
    name: 'Hair Style',
    price: '$50.00',
    features: ['Hair Dryer', 'Hair Coloring', 'Hair Cut'],
    active: false,
  },
  {
    name: 'Manicure Pedicure',
    price: '$34.50',
    features: ['Manicure', 'Pedicure', 'Coloring'],
    active: false,
  },
  {
    name: 'Makeup',
    price: '$54.50',
    features: ['Makeup', 'Professional Makeup', 'Blush On'],
    active: true,
  },
  {
    name: 'Body Treatment',
    price: '$89.50',
    features: ['Massage', 'Spa', 'Foot Spa', 'Body Spa'],
    active: false,
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
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Prices
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Transparent pricing for every treatment
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={
                tier.active
                  ? 'flex flex-col bg-plum p-8 text-center text-white shadow-lg dark:bg-plum-dark'
                  : 'flex flex-col bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950'
              }
            >
              <h3 className="font-display text-xl font-semibold uppercase text-ink dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-4 font-display text-4xl font-bold text-brand">
                {tier.price}
                <span className="ml-1 text-sm font-medium uppercase tracking-wide text-mist">
                  / session
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-mist dark:text-gray-400">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#booking"
                className="mt-8 rounded-full border border-brand bg-brand px-8 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
              >
                Get Offer
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
