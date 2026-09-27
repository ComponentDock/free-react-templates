import { useState } from 'react'
import { Film, Users, Eye, Award } from 'lucide-react'
import { animateCount } from './animateCount'

const stats = [
  { icon: Film, value: 230, label: 'Completed Projects' },
  { icon: Users, value: 1068, label: 'Happy Clients' },
  { icon: Eye, value: 230, label: 'Perspective Clients' },
  { icon: Award, value: 230, label: 'Awards Won' },
] as const

function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Film
  value: number
  label: string
}) {
  const [count, setCount] = useState(0)

  return (
    <div
      className="flex flex-col items-center text-center"
      ref={(el) => {
        if (el) {
          let started = false
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry && entry.isIntersecting && !started) {
                started = true
                animateCount(value, 2000, setCount)
                observer.disconnect()
              }
            },
            { threshold: 0.3 },
          )
          observer.observe(el)
        }
      }}
    >
      <Icon className="mb-3 h-8 w-8 text-brand" aria-hidden="true" />
      <span className="font-display text-4xl font-bold text-white">{count}</span>
      <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/60">
        {label}
      </span>
    </div>
  )
}

export function Counter() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
