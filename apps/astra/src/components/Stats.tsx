import { useState, useEffect, useRef } from 'react'
import { cn } from '@free-react-templates/ui'

export interface StatsProps {
  className?: string
}

const STATS = [
  { target: 213, label: 'Projects Completed' },
  { target: 179, label: 'Happy Clients' },
  { target: 35, label: 'Awards Received' },
  { target: 2319, label: 'Cups of Coffee' },
] as const

function StatItem({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setCount(target)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el!)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl font-bold text-white md:text-6xl">{count}</div>
      <h3 className="mt-2 font-sans text-sm font-medium uppercase tracking-wider text-white/70">
        {label}
      </h3>
    </div>
  )
}

export function Stats({ className }: StatsProps) {
  return (
    <section className={cn('bg-dark-lighter py-20', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
