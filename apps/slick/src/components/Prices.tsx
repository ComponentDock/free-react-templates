const rows = [
  { name: 'Special Beard Treatment', price: '$15.00' },
  { name: 'Color your Beard', price: '$18.00' },
  { name: 'Wax your Beard', price: '$12.00' },
] as const

export function Prices() {
  return (
    <section
      id="prices"
      className="bg-coal py-20 transition-colors dark:bg-coal-dark lg:py-[120px]"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Visit Our Tailor
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-white sm:text-4xl">
            OUR TOP PRICES
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
            Honest pricing, no surprises. Every service below is performed by a senior barber with a
            satisfaction guarantee.
          </p>
        </div>
        <ul className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {rows.map((row) => (
            <li key={row.name} className="flex items-center justify-between px-6 py-5 sm:px-8">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
                {row.name}
              </span>
              <span className="font-display text-xl font-black text-brand">{row.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
