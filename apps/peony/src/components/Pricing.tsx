import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Hair Style',
    price: '$50.00',
    features: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
  },
  {
    name: 'Manicure Pedicure',
    price: '$34.50',
    features: ['Manicure', 'Pedicure', 'Coloring', 'Nails', 'Nail Cut'],
  },
  {
    name: 'Makeup',
    price: '$54.50',
    features: ['Makeup', 'Professional Makeup', 'Blush On', 'Eyeliner', 'Lipstick'],
  },
  {
    name: 'Body Treatment',
    price: '$89.50',
    features: ['Facial Massage', 'Facial Spa', 'Massage', 'Body Spa', 'Foot Spa'],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Our Prices
          </h2>
          <p className="mt-4 text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col rounded-2xl border border-plum/10 p-6 text-center transition-colors hover:border-brand/40 dark:border-white/10"
            >
              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 font-display text-4xl font-semibold text-brand">{plan.price}</p>
              <p className="text-sm text-mist dark:text-white/60">/session</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-mist dark:text-white/60">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href="#booking"
                className="mt-6 inline-flex rounded-full border border-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Get Offer
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
