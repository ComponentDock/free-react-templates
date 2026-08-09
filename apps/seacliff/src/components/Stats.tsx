import { useEffect, useState } from 'react'

interface Stat {
  label: string
  value: number
  suffix: string
  decimals: number
}

const stats: Stat[] = [
  { label: 'Guests Hosted', value: 10000, suffix: '+', decimals: 0 },
  { label: 'Luxury Rooms', value: 150, suffix: '+', decimals: 0 },
  { label: 'Guest Rating', value: 4.9, suffix: '', decimals: 1 },
  { label: 'Years of Service', value: 25, suffix: '+', decimals: 0 },
]

function StatItem({ label, value, suffix, decimals }: Stat) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const step = Math.max(1, Math.ceil(value / 60))
    let currentValue = 0
    const id = window.setInterval(() => {
      currentValue += step
      if (currentValue >= value) {
        currentValue = value
        window.clearInterval(id)
      }
      setCurrent(currentValue)
    }, 30)
    return () => window.clearInterval(id)
  }, [value])

  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString('en-US')

  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-primary-900 dark:text-white lg:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
