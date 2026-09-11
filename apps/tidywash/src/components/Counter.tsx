import { useEffect, useRef, useState } from 'react'

interface StatItem {
  label: string
  value: number
}

const stats: StatItem[] = [
  { label: 'Project Completed', value: 200 },
  { label: 'Employees', value: 1200 },
  { label: 'Clients', value: 850 },
  { label: 'Awards', value: 45 },
]

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current!

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = () => {
            const elapsed = performance.now() - start
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatCounter({ stat }: { stat: StatItem }) {
  const { count, ref } = useCountUp(stat.value)
  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl font-bold text-white">{count}</span>
      <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
    </div>
  )
}

export function Counter() {
  return (
    <section aria-label="Statistics" className="relative">
      <img
        src="https://picsum.photos/seed/tidywash-counter/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
