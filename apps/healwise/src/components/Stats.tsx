const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '15k+', label: 'Happy Patients' },
  { value: '50+', label: 'Number of Doctors' },
  { value: '100+', label: 'Number of Staff' },
]

export function Stats() {
  return (
    <section className="relative bg-ink py-20" data-testid="stats">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/seed/healwise-stats/1200/400')" }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 text-4xl font-bold text-brand">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
