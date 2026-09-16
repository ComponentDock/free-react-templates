const stats = [
  { value: '1200', label: 'Projects Done' },
  { value: '500', label: 'Happy Clients' },
  { value: '30', label: 'Years Experience' },
  { value: '15', label: 'Awards Won' },
]

export function StatsSection() {
  return (
    <section className="bg-brand-500 py-16">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="mb-1 text-3xl font-bold text-white sm:text-4xl">{value}</p>
            <p className="text-sm font-medium uppercase tracking-wide text-white/80">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
