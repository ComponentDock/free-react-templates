const stats = [
  { target: 1930, label: 'Candidates' },
  { target: 54, label: 'Jobs Posted' },
  { target: 120, label: 'Jobs Filled' },
  { target: 550, label: 'Companies' },
]

export function Statistics() {
  return (
    <section className="relative py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/jobquest-stats/1920/600')" }}
      />
      <div className="absolute inset-0 bg-brand opacity-85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Careers Statistics</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-4xl font-extrabold text-white md:text-5xl">
                {stat.target.toLocaleString()}
              </span>
              <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-white/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
