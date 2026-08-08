const stats = [
  { value: '500K+', label: 'Deployments' },
  { value: '40+', label: 'Global Regions' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '10K+', label: 'Active Teams' },
] as const

export function Stats() {
  return (
    <section
      aria-label="Company statistics"
      className="border-y border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900 lg:py-20"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-primary-600 lg:text-5xl dark:text-primary-400">
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
