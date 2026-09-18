import { Award, Heart, BookOpen, Users } from 'lucide-react'

const stats = [
  { icon: Award, value: '20', label: 'Years Of Experience' },
  { icon: Heart, value: '700+', label: 'Happy Patients' },
  { icon: BookOpen, value: '120', label: 'Certificate' },
  { icon: Users, value: '40+', label: 'Dentist' },
] as const

export function Stats() {
  return (
    <section className="border-y border-gray-100 py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="text-center">
              <Icon className="mx-auto mb-3 h-12 w-12 text-primary-400" aria-hidden="true" />
              <div className="text-3xl font-bold dark:text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-smoke dark:text-gray-400">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
