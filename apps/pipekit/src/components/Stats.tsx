import { useEffect, useRef, useState } from 'react'
import { Users, Briefcase, Award, Coffee } from 'lucide-react'

interface StatItemProps {
  icon: React.ReactNode
  end: number
  suffix: string
  label: string
}

function StatItem({ icon, end, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    // Guard: ref may be null if element unmounted before effect
    /* istanbul ignore next -- defensive null guard, element is always mounted in jsdom */
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = performance.now()

          function animate(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            setCount(Math.floor(eased * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <div className="mb-3 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/20 text-gold-400">
          {icon}
        </div>
      </div>
      <span className="text-4xl font-bold text-white">
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{label}</p>
    </div>
  )
}

const stats = [
  {
    icon: <Users className="h-7 w-7" aria-hidden="true" />,
    end: 350,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: <Briefcase className="h-7 w-7" aria-hidden="true" />,
    end: 200,
    suffix: '+',
    label: 'Projects Done',
  },
  {
    icon: <Award className="h-7 w-7" aria-hidden="true" />,
    end: 50,
    suffix: '+',
    label: 'Awards Won',
  },
  {
    icon: <Coffee className="h-7 w-7" aria-hidden="true" />,
    end: 8000,
    suffix: '+',
    label: 'Cups of Coffee',
  },
]

export function Stats() {
  return (
    <section className="bg-navy-600 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
