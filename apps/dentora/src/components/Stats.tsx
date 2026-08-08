const stats = [
  { value: '10,000+', label: 'Happy Patients' },
  { value: '15+', label: 'Years Experience' },
  { value: '12', label: 'Expert Dentists' },
  { value: '99%', label: 'Satisfaction Rate' },
] as const

export function Stats() {
  return (
    <section
      aria-label="Clinic statistics"
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
