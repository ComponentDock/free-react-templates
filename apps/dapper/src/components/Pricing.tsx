const plans = [
  {
    name: 'Basic Hair Cut & Shave',
    price: '$79.00',
    tag: 'Standard Package',
    items: [
      'Basic Hair Cut',
      'Basic Shave',
      'Basic Head Wash',
      'Basic Body Massage',
      'Basic Snacks',
    ],
    featured: false,
  },
  {
    name: 'Premium Hair Cut & Shave',
    price: '$89.00',
    tag: 'Standard Package',
    items: [
      'Premium Hair Cut',
      'Premium Shave',
      'Premium Head Wash',
      'Premium Body Massage',
      'Premium Snacks',
    ],
    featured: true,
  },
  {
    name: 'Luxury Hair Cut & Shave',
    price: '$99.00',
    tag: 'Standard Package',
    items: [
      'Luxury Hair Cut',
      'Luxury Shave',
      'Luxury Head Wash',
      'Luxury Body Massage',
      'Luxury Snacks',
    ],
    featured: false,
  },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Choose Your Package
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ad minim veniam.
          </p>
        </div>
        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-xl p-8 shadow-sm transition-shadow hover:shadow-lg ${
                plan.featured
                  ? 'bg-[#222222] text-white'
                  : 'bg-paper text-ink dark:bg-gray-900 dark:text-white'
              }`}
            >
              <h3 className="font-display text-xl font-bold uppercase">{plan.name}</h3>
              <p
                className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                  plan.featured ? 'text-brand-light' : 'text-brand'
                }`}
              >
                {plan.tag}
              </p>
              <p className="mt-6 font-display text-5xl font-bold">{plan.price}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-sm ${
                      plan.featured ? 'text-gray-300' : 'text-mist dark:text-gray-400'
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-light" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-90 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-brand to-brand-light text-white'
                    : 'bg-ink text-white dark:bg-white dark:text-ink'
                }`}
              >
                Order Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
