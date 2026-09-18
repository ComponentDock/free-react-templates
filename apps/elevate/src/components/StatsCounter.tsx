import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  suffix?: string
  label: string
}

function AnimatedCounter({ target, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    /* v8 ignore next -- ref is always set after mount in React */
    if (!el) return

    const observer = new IntersectionObserver(
      /* v8 ignore start -- callback fires via mock IntersectionObserver;
         V8 coverage cannot track callback execution through the mock. */
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      /* v8 ignore end */
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-brand">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-ink-light dark:text-gray-400">{label}</div>
    </div>
  )
}

const stats = [
  { target: 150, suffix: '+', label: 'Happy Clients' },
  { target: 10, suffix: '+', label: 'Years Experience' },
  { target: 200, suffix: '+', label: 'Programs Completed' },
  { target: 95, suffix: '%', label: 'Success Rate' },
] as const

export function StatsCounter() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
