const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '25+', label: 'Years Experience' },
  { value: '98%', label: 'On-Time Delivery' },
  { value: '150+', label: 'Team Members' },
] as const

export function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="border-y border-gray-200 bg-gray-50 py-14 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-primary-600 sm:text-4xl dark:text-primary-400">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
