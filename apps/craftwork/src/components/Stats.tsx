const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '80+', label: 'Happy Clients' },
  { value: '15', label: 'Awards Won' },
]

export function Stats() {
  return (
    <section id="experiences" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Experiences
          </span>
          <h2 className="mt-2 text-4xl font-bold text-ink">A track record of success</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block text-5xl font-bold text-brand">{s.value}</span>
              <span className="mt-2 block text-sm font-medium uppercase tracking-wider text-mist">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
