import { Target, Shield, Users, Award } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Road to Success',
    desc: 'Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.',
  },
  {
    icon: Shield,
    title: 'Road to Success',
    desc: 'Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.',
  },
  {
    icon: Users,
    title: 'Road to Success',
    desc: 'Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.',
  },
  {
    icon: Award,
    title: 'Road to Success',
    desc: 'Lorem ipsum dolor sit amet, sed eiusmod tempor incididunt labore dolore magna.',
  },
] as const

export function AboutSuccess() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={i}
              className="rounded-lg border border-gray-100 p-6 transition-shadow hover:shadow-md dark:border-gray-800"
            >
              <Icon className="mb-4 h-8 w-8 text-primary-400" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
