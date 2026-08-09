import { ButtonLink } from '@free-react-templates/ui'

const tiers = [
  {
    name: 'Basic Hair Cut',
    price: '$79.00',
    features: ['Hair cut & style', 'Shampoo & blow dry', 'Beard trim'],
  },
  {
    name: 'Standard Hair Cut',
    price: '$89.00',
    features: ['Everything in Basic', 'Hot towel shave', 'Scalp massage'],
  },
  {
    name: 'Ultimate Hair Cut',
    price: '$99.00',
    features: ['Everything in Standard', 'Hair treatment', 'Styling products'],
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
            Choose Your Favorite Package
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Pricing Plan
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 ${
                index === 1
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-100 bg-white dark:bg-gray-950'
              }`}
            >
              <h3 className="font-display text-lg font-bold uppercase">{tier.name}</h3>
              <p className="mt-4">
                <span
                  className={`font-display text-4xl font-bold ${index === 1 ? 'text-white' : 'text-brand'}`}
                >
                  {tier.price}
                </span>
              </p>
              <ul
                className={`mt-6 flex-1 space-y-3 text-sm ${index === 1 ? 'text-white/90' : 'text-mist dark:text-gray-400'}`}
              >
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className={`mt-8 rounded-lg px-8 uppercase tracking-[0.2em] ${
                  index === 1
                    ? 'bg-white text-brand hover:bg-ink hover:text-white'
                    : 'border border-brand text-brand hover:bg-brand hover:text-white'
                }`}
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
