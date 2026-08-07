const stats = [
  { value: '129', label: 'Awards Received' },
  { value: '1507', label: 'Cups of Coffee' },
  { value: '108', label: 'Projects Completed' },
  { value: '103', label: 'Happy Clients' },
] as const

export function Stats() {
  return (
    <section aria-label="Stats" className="bg-ink py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-bold text-primary-400">{stat.value}</div>
            <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
