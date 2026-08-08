import { Globe2, Landmark, TrendingUp, Users } from 'lucide-react'

const stats = [
  { icon: Users, value: '12M+', label: 'Active Investors' },
  { icon: Landmark, value: '$180B+', label: 'Assets Under Custody' },
  { icon: TrendingUp, value: '5M+', label: 'Trades Executed Daily' },
  { icon: Globe2, value: '50+', label: 'Countries Supported' },
] as const

export function Stats() {
  return (
    <section aria-label="Platform statistics" className="bg-white py-16 lg:py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
              <stat.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 font-display text-3xl font-extrabold text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
