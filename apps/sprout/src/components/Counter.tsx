import { useState, useEffect, useRef } from 'react'
import { counterStats } from '../data'

function useCounterInView(target: number) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const step = Math.ceil(target / (duration / 16))
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 16)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [target])

  return { count, ref }
}

function CounterItem({ label, value }: { label: string; value: number }) {
  const { count, ref } = useCounterInView(value)
  return (
    <div ref={ref} className="text-center">
      <span
        data-testid={`counter-${label}`}
        className="block text-4xl font-bold text-white sm:text-5xl"
      >
        {count.toLocaleString()}
      </span>
      <span className="mt-2 block text-sm uppercase tracking-wider text-gray-300">{label}</span>
    </div>
  )
}

export function Counter() {
  return (
    <section className="bg-counter-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Sprout Church</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-300">
            We are a community of believers dedicated to growing in faith, serving others, and
            sharing the love of Christ with the world around us.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {counterStats.map((stat) => (
            <CounterItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  )
}
