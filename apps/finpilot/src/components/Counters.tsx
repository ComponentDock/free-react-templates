export default function Counters() {
  const stats = [
    { value: '520+', label: 'Total Projects' },
    { value: '244', label: 'Ongoing Projects' },
    { value: '95%', label: 'Job Success' },
  ]

  return (
    <section className="py-16 bg-brand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="text-4xl md:text-5xl font-bold text-white block mb-2">
                {stat.value}
              </span>
              <span className="text-white/80 text-sm uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
