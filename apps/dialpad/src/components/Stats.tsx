const stats = [
  { value: '2,536', label: 'Projects Completed' },
  { value: '6,784', label: 'Happy Clients' },
  { value: '1,059', label: 'Tasks Completed' },
  { value: '2,239', label: 'Cups of Coffee' },
  { value: '435', label: 'In-House Professionals' },
] as const

export function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-sky to-brand bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-ink">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
