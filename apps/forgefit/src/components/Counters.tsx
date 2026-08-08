import { useEffect, useState } from 'react'

const counters = [
  { label: 'Active Members', target: 5000, suffix: '+' },
  { label: 'Weekly Classes', target: 50, suffix: '+' },
  { label: 'Expert Trainers', target: 15, suffix: '+' },
  { label: 'Years Open', target: 12, suffix: '' },
]

function useCountUp(target: number): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 1600
    const step = 16
    const totalSteps = duration / step
    let stepCount = 0

    const timer = window.setInterval(() => {
      stepCount += 1
      const progress = Math.min(stepCount / totalSteps, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress >= 1) window.clearInterval(timer)
    }, step)

    return () => window.clearInterval(timer)
  }, [target])

  return value
}

function Counter({ label, target, suffix }: { label: string; target: number; suffix: string }) {
  const value = useCountUp(target)
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-primary-600 dark:text-primary-500">
        {value.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  )
}

export function Counters() {
  return (
    <section aria-label="Gym statistics" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-4 sm:grid-cols-4 lg:px-8">
        {counters.map((counter) => (
          <Counter key={counter.label} {...counter} />
        ))}
      </div>
    </section>
  )
}
