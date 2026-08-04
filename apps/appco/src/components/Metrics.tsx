const metrics = [
  { value: '50K+', label: 'Active Users' },
  { value: '250K+', label: 'Messages Sent' },
  { value: '4.9', label: 'Average Rating' },
  { value: '120+', label: 'Countries' },
] as const

export function Metrics() {
  return (
    <section id="metrics" className="bg-lavender py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Metrics
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            Say Hello To The Collaboration Hub.
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-gray-800"
            >
              <dd className="font-display text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                {metric.value}
              </dd>
              <dt className="mt-2 text-sm font-medium text-mist dark:text-gray-400">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
