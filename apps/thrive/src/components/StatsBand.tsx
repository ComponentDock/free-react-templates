import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  label: string
}

function Counter({ target, label }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    /* c8 ignore next -- ref is always set after mount in React 18+ */
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-light text-white">{count.toLocaleString()}</div>
      <div className="mt-2 text-text-white-50">{label}</div>
    </div>
  )
}

const STATS = [
  { target: 244982, label: 'Reviews' },
  { target: 2488938, label: 'Downloads' },
  { target: 1335, label: 'Employees' },
] as const

export function StatsBand() {
  return (
    <section className="bg-brand-teal py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Stats</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat) => (
            <Counter key={stat.label} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
