import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 18, label: 'Year Experience' },
  { value: 45, label: 'Our Staff' },
  { value: 120, label: 'Services Provided' },
]

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current!
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatItem({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl font-bold text-white">{count}</span>
      <p className="mt-1 text-sm text-white/80">{label}</p>
    </div>
  )
}

export function Counter() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/toothzen-counter/1920/400)' }}
      />
      <div className="absolute inset-0 bg-tooth-dark-blue/80" />
      <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  )
}
