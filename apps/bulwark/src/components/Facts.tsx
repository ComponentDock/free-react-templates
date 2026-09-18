const STATS = [
  { number: '2536', label: 'Projects Completed' },
  { number: '6784', label: 'Happy Clients' },
  { number: '1059', label: 'Total Tasks' },
  { number: '2239', label: 'Cups of Coffee' },
  { number: '435', label: 'In House Professionals' },
]

export function Facts() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-white">
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
