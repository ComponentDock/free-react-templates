import { useEffect, useRef, useState } from 'react'

interface CounterItemProps {
  end: number
  suffix: string
  label: string
}

function CounterItem({ end, suffix, label }: CounterItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const steps = 60
          const increment = end / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-4xl text-white md:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  )
}

const stats = [
  { end: 100000, suffix: '+', label: 'Happy Customers' },
  { end: 40000, suffix: '+', label: 'Destination Places' },
  { end: 87000, suffix: '+', label: 'Hotels' },
  { end: 56400, suffix: '+', label: 'Restaurant' },
]

export function Counter() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/trailquest-counter/1920/800)' }}
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <CounterItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
