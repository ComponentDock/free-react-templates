import { Scale } from 'lucide-react'

const stats = [
  { icon: Scale, value: '596+', label: 'Qualified Lawyers' },
  { icon: Scale, value: '20,650+', label: 'Solved Cases' },
  { icon: Scale, value: '2.5k', label: 'Trusted Clients' },
  { icon: Scale, value: '50+', label: 'Achievements' },
] as const

export function Stats() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="text-center">
              <Icon className="mx-auto mb-4 h-12 w-12 text-primary-400" aria-hidden="true" />
              <h3 className="font-display text-3xl font-bold text-ink dark:text-white">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-smoke dark:text-gray-400">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
