const stats = [
  { value: '2,536', label: 'Happy Clients' },
  { value: '6,784', label: 'Total Projects' },
  { value: '1,059', label: 'Cups of Coffee' },
  { value: '12,239', label: 'Tickets Submitted' },
]

export function Counters() {
  return (
    <section className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-brand sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
