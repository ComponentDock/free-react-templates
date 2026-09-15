import { useEffect, useRef, useState } from 'react'
import { DollarSign, Heart, Users, Trophy } from 'lucide-react'

const stats = [
  { icon: DollarSign, label: 'Total Collection', value: 58967 },
  { icon: Heart, label: 'Helped People', value: 5896 },
  { icon: Users, label: 'Total Volunteers', value: 5896 },
  { icon: Trophy, label: 'Successful Missions', value: 589 },
] as const

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function StatItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof DollarSign
  label: string
  value: number
}) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <Icon className="h-8 w-8 text-primary-400" aria-hidden="true" />
      <span className="font-display text-3xl font-bold text-heading sm:text-4xl">
        {count.toLocaleString()}
      </span>
      <span className="text-sm font-medium uppercase tracking-wider text-smoke">{label}</span>
    </div>
  )
}

export function Counters() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} icon={stat.icon} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  )
}
