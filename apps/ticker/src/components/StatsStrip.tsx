const stats = [
  { value: '156', caption: 'Combined profits from our trading community' },
  { value: '73%', caption: 'Across all verified student trades' },
  { value: '2.4', caption: 'Learning and trading with us daily' },
] as const

export function StatsStrip() {
  return (
    <section className="border-y border-gray-200 bg-gray-100/50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.value} className="text-center">
            <p className="font-display text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
