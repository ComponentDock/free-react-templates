import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  label: string
}

function Counter({ end, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center">
      <span className="block text-4xl font-bold text-white sm:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-2 block text-sm text-white/70">{label}</span>
    </div>
  )
}

const stats = [
  { end: 60, label: 'Projects' },
  { end: 9200, label: 'Happy Clients' },
  { end: 5800, label: 'Cups of Coffee' },
  { end: 100, label: 'Expert Workers' },
]

export function Counters() {
  return (
    <section className="bg-navy-700 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((s) => (
          <Counter key={s.label} end={s.end} label={s.label} />
        ))}
      </div>
    </section>
  )
}
