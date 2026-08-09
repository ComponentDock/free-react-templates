const pricing = [
  { name: 'Hair Cut', price: '$10.00' },
  { name: 'Hair Color', price: '$10.00' },
  { name: 'Hair Straight', price: '$10.00' },
  { name: 'Shampoo', price: '$10.00' },
  { name: 'Hair Wash', price: '$10.00' },
  { name: 'Hair Shave', price: '$10.00' },
  { name: "Men's Facial", price: '$10.00' },
  { name: 'Wedding Style', price: '$10.00' },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Pricing Plan
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Transparent prices, no surprises
          </p>
        </div>
        <ul className="mt-12 divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white shadow-sm dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-950">
          {pricing.map((row) => (
            <li key={row.name} className="flex items-center justify-between px-6 py-5 sm:px-8">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                {row.name}
              </h3>
              <span className="font-display text-xl font-bold text-brand">{row.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
