const stats = [
  { value: '5,890', label: 'Rooms Available' },
  { value: '530', label: 'Nurse Staff' },
  { value: '4,029', label: 'Senior Living' },
  { value: '7,020', label: 'Happy People' },
]

export function StatsCounter() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-5xl font-bold text-white md:text-6xl">{stat.value}</div>
              <div className="text-sm font-medium uppercase tracking-wider text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
