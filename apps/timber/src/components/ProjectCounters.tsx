const stats = [
  { label: 'Projects', value: 100 },
  { label: 'Employees', value: 49 },
  { label: 'Constructor', value: 50 },
  { label: 'Partners', value: 30 },
] as const

export function ProjectCounters() {
  return (
    <section className="bg-dark py-16 font-['Quicksand',sans-serif]">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="block text-4xl font-bold text-primary">{stat.value}</span>
            <span className="mt-2 block text-sm text-white/70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
