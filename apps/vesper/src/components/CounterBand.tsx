const counters = [
  { label: 'Members', value: '2,500' },
  { label: 'Pastors', value: '45' },
  { label: 'Donation', value: '$1,240,000' },
  { label: 'Churches', value: '120' },
] as const

export function CounterBand() {
  return (
    <section className="border-t border-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
          Our Church in Numbers
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {counters.map((counter) => (
            <div key={counter.label}>
              <p className="font-serif text-4xl font-bold text-gold">{counter.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
