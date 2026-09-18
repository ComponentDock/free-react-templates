const stats = [
  { value: '99,399', label: 'Number of Clients' },
  { value: '199', label: 'Number of Personnel' },
  { value: '24', label: 'Years of Experience' },
]

export function Stats() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-5xl font-bold text-primary-500">{stat.value}</span>
              <span className="mt-2 block text-sm uppercase tracking-wider text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
