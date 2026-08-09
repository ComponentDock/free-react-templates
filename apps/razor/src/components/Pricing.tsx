const plans = [
  {
    name: 'Basic',
    price: '$78',
    services: ['Hair Cut', 'Beard Trim', 'Moustache Trim', 'Clipper Cut'],
  },
  {
    name: 'Standard',
    price: '$88',
    services: [
      'Hair Cut',
      'Beard Trim',
      'Moustache Trim',
      'Clipper Cut',
      'Face Shave',
      'Hair Style',
    ],
  },
  {
    name: 'Premium',
    price: '$98',
    services: [
      'Hair Cut',
      'Beard Trim',
      'Moustache Trim',
      'Clipper Cut',
      'Face Shave',
      'Hair Style',
      'Hair Shampoo',
    ],
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
          <h2 className="font-display text-4xl font-bold uppercase text-ink dark:text-white lg:text-5xl">
            Price &amp; Plans
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <h3 className="font-display text-2xl font-semibold uppercase text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 font-display text-5xl font-bold text-brand">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-mist dark:text-gray-400">
                {plan.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full border-2 border-brand px-8 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-ink"
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
