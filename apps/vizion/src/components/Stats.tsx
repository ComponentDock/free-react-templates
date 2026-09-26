const stats = [
  { value: '520', suffix: '+', label: 'Total Projects' },
  { value: '244', suffix: '', label: 'On Going Projects' },
  { value: '95', suffix: '%', label: 'Job Success' },
]

export function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl font-bold text-navy md:text-5xl">
                {stat.value}
                <span className="text-brand">{stat.suffix}</span>
              </h3>
              <p className="mt-2 text-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
