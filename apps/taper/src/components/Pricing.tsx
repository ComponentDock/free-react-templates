const leftColumn = [
  { name: 'Styling', price: '$25' },
  { name: 'Styling + Color', price: '$65' },
  { name: 'Styling + Tint', price: '$65' },
  { name: 'Semi-permanent wave', price: '$65' },
  { name: 'Cut + Styling', price: '$63' },
  { name: 'Cut + Styling + Color', price: '$100' },
  { name: 'Cut + Styling + Tint', price: '$100' },
] as const

const rightColumn = [
  { name: 'Cut', price: '$25' },
  { name: 'Shave', price: '$65' },
  { name: 'Beard trim', price: '$65' },
  { name: 'Cut + beard trim', price: '$65' },
  { name: 'Cut + shave', price: '$63' },
  { name: 'Clean up', price: '$100' },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Best Pricing
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            We provide best price in the city!
          </p>
        </div>
        <div className="mt-14 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <ul key={columnIndex} className="divide-y divide-gray-200 dark:divide-gray-800">
              {column.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-display text-base font-medium uppercase tracking-wide text-ink dark:text-white">
                    {item.name}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted border-gray-300 dark:border-gray-700"
                    aria-hidden="true"
                  />
                  <span className="font-display text-lg font-semibold text-brand">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
