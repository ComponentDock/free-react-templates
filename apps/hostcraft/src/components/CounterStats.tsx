const stats = [
  { value: '12,000', label: 'CMS Installation' },
  { value: '100', label: 'Awards Won' },
  { value: '10,000', label: 'Registered Domains' },
  { value: '9,000', label: 'Satisfied Customers' },
]

export function CounterStats() {
  return (
    <section className="bg-bg-counter py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="mb-8 text-sm font-medium uppercase tracking-wider text-white/80">
          More than 12,000 websites trusted hosted
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="mb-2 text-4xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
