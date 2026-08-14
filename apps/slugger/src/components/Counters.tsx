import { useEffect, useState } from 'react'
import { stats } from '../data'

interface CountUpProps {
  value: number
  suffix: string
  label: string
}

function CountUp({ value, suffix, label }: CountUpProps) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const stepMs = 30
    const increment = value / (1400 / stepMs)
    let current = 0
    const id = setInterval(() => {
      current += increment
      if (current >= value) {
        clearInterval(id)
        setDisplay(value)
      } else {
        setDisplay(Math.floor(current))
      }
    }, stepMs)
    return () => clearInterval(id)
  }, [value])

  return (
    <div className="text-center">
      <div className="font-display text-5xl font-extrabold text-brand">
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted">{label}</div>
    </div>
  )
}

export function Counters() {
  return (
    <section aria-label="Club statistics" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <CountUp key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
