const plans = [
  {
    name: 'Haircut',
    items: [
      ["Men's Cut", '$29.00'],
      ["Men's Cut with Shampoo and Blow Dry", '$10.00'],
      ["Ladie's Cut with Shampoo and Blow Dry", '$32.00'],
      ['Head Shave', '$23.00'],
      ['Hair Art', '$54.00'],
    ],
  },
  {
    name: 'Hair Styling',
    items: [
      ['Shampoo', '$29.00'],
      ['Blow Dry', '$10.00'],
      ['Iron', '$32.00'],
      ['Brazilian Blow Out', '$23.00'],
      ['Hair Art', '$54.00'],
    ],
  },
  {
    name: 'Hair Scalp Care',
    items: [
      ['Shampoo', '$29.00'],
      ['Blow Dry', '$10.00'],
      ['Iron', '$32.00'],
      ['Brazilian Blow Out', '$23.00'],
      ['Hair Art', '$54.00'],
    ],
  },
] as const

export function Pricing() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Services &amp; Pricing
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <h3 className="font-display text-xl font-bold uppercase text-ink dark:text-white">
                {plan.name}
              </h3>
              <ul className="mt-6 space-y-3">
                {plan.items.map(([item, price]) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-3 border-b border-dashed border-gray-200 pb-2 dark:border-gray-800"
                  >
                    <span className="text-sm text-mist dark:text-gray-400">{item}</span>
                    <span className="text-sm font-semibold text-ink dark:text-white">{price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
