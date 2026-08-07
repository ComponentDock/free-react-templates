const stats = [
  { value: '10', label: 'Years of Experience' },
  { value: '+500', label: 'Happy Clients' },
  { value: '17k', label: 'Followers on FB' },
  { value: '132', label: 'Finished Projects' },
  { value: '3', label: 'Coffees a day' },
] as const

export function Stats() {
  return (
    <section aria-label="Stats" className="bg-ink py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 md:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-4xl font-bold text-accent-400">{stat.value}</div>
            <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
