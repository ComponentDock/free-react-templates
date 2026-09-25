import { useEffect, useRef, useState } from 'react'

const stats = [
  { end: 99, suffix: '%', label: 'Patient Satisfaction' },
  { end: 50, suffix: '+', label: 'Expert Doctors' },
  { end: 10000, suffix: '+', label: 'Happy Patients' },
  { end: 30, suffix: '+', label: 'Years of Experience' },
] as const

export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return { count, ref }
}

export function Counter() {
  return (
    <section aria-label="Statistics" className="bg-purple-500 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <CounterItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}

function CounterItem({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end)

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl font-bold text-white sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-white/80">{label}</p>
    </div>
  )
}
