import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  label: string
  suffix?: string
}

function useCountUp(target: number) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current!
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started.current) {
          started.current = true
          let current = 0
          const step = Math.ceil(target / 60)
          const interval = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(interval)
            }
            setCount(current)
          }, 30)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return { count, ref }
}

function Counter({ target, label, suffix = '' }: CounterProps) {
  const { count, ref } = useCountUp(target)

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 text-5xl font-bold text-heading">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-semibold uppercase tracking-widest text-text-muted">{label}</div>
    </div>
  )
}

const counters = [
  { target: 124, label: 'Noodles Sold' },
  { target: 200, label: 'Burgers Sold' },
  { target: 234, label: 'Chicken Sold' },
]

export function CounterSection() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
          Today&apos;s Fun Facts
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {counters.map((c) => (
            <Counter key={c.label} target={c.target} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
