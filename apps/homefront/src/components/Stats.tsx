import { useEffect, useState } from 'react'
import { stats } from '../data'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target])

  return <span>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="relative bg-navy py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-primary/80" />
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-4xl font-bold text-accent">
                <Counter target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
