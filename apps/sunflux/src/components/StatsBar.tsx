import { Reveal } from './Reveal'

const stats = [
  { value: '10K+', label: 'Installations' },
  { value: '$50M+', label: 'Saved for Customers' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '50', label: 'States Served' },
] as const

export function StatsBar() {
  return (
    <section
      aria-label="Key numbers"
      className="border-y border-gray-200 bg-gray-50 py-14 lg:py-16 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-600 lg:text-4xl dark:text-primary-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
