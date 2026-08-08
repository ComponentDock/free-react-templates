const metrics = [
  { value: '$2.4M', label: 'Funds Raised' },
  { value: '50,000+', label: 'Lives Impacted' },
  { value: '120+', label: 'Communities Served' },
  { value: '350K', label: 'Volunteer Hours' },
]

export function Impact() {
  return (
    <section id="impact" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
          Numbers That Matter
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Every gift adds up to real, measurable change.
        </p>
        <div className="mt-12 grid gap-8 rounded-3xl bg-primary-50 p-10 text-center sm:grid-cols-2 lg:grid-cols-4 dark:bg-gray-900">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
