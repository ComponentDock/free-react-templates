const stats = [
  { value: '1M+', label: 'Developers' },
  { value: '50B+', label: 'API Calls/mo' },
  { value: '99.999%', label: 'Uptime' },
  { value: '200+', label: 'SDKs' },
] as const

export function Stats() {
  return (
    <section
      aria-label="Platform metrics"
      className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold tracking-tight text-primary-600 sm:text-4xl dark:text-primary-400">
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
