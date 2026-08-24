const stats = [
  { value: '50K+', label: 'Happy Users' },
  { value: '250K+', label: 'Downloads' },
  { value: '4.9', label: 'App Rating' },
  { value: '120+', label: 'Countries' },
] as const

export function Metrics() {
  return (
    <section className="bg-primary-500 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-primary-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
