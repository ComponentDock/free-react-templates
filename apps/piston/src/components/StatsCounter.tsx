const stats = [
  { value: '5000+', label: 'Happy Customers' },
  { value: '4560+', label: 'Perfect Bodies' },
  { value: '570+', label: 'Working Hours' },
  { value: '900+', label: 'Success Stories' },
]

export function StatsCounter() {
  return (
    <section className="relative bg-darker py-20">
      <img
        src="https://picsum.photos/seed/piston-stats/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="block text-4xl font-bold text-brand">{s.value}</span>
            <span className="text-sm text-gray-300">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
