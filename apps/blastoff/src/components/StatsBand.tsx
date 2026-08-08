import { useEffect, useState } from 'react'

interface Counter {
  target: number
  label: string
  format: (value: number) => string
}

const counters: Counter[] = [
  { target: 2000, label: 'Active Users', format: (value) => `${value.toLocaleString()}+` },
  { target: 99.9, label: 'Uptime', format: (value) => `${value.toFixed(1)}%` },
  { target: 2.5, label: 'Funding Raised', format: (value) => `$${value.toFixed(1)}M` },
  { target: 4.9, label: 'User Rating', format: (value) => value.toFixed(1) },
]

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let current = 0
    const steps = 48
    const step = target / steps
    const id = window.setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        window.clearInterval(id)
      }
      setValue(current)
    }, duration / steps)
    return () => window.clearInterval(id)
  }, [target, duration])

  return value
}

export function StatsBand() {
  return (
    <section
      aria-label="Key statistics"
      className="border-y border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 lg:px-8">
        {counters.map((counter) => {
          const value = useCountUp(counter.target)
          return (
            <div key={counter.label}>
              <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                {counter.format(value)}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {counter.label}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
