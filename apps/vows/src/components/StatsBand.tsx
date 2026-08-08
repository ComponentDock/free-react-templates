const stats = [
  { value: '500+', label: 'Weddings Planned' },
  { value: '12+', label: 'Years Experience' },
  { value: '99%', label: 'Happy Couples' },
  { value: '50+', label: 'Venue Partners' },
] as const

export function StatsBand() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary-600 lg:text-5xl dark:text-primary-400">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
