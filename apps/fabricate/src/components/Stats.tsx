import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 2, suffix: 'K+', label: 'Projects Completed' },
  { value: 5.5, suffix: 'K', label: 'Total Employees' },
  { value: 959, suffix: '', label: 'Happy Clients' },
  { value: 367, suffix: '', label: 'Tickets Submitted' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 10) / 10)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )

    const el = ref.current
    /* v8 ignore start */
    if (el) observer.observe(el)
    /* v8 ignore stop */
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2">
      {count}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 bg-ink">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/fabricate-stats/1920/600)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
