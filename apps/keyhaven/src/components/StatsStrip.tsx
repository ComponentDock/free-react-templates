const stats = [
  { value: '$2B+', label: 'Total Sales Volume' },
  { value: '500+', label: 'Properties Sold' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
] as const

export function StatsStrip() {
  return (
    <section className="border-b border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary-600 lg:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
