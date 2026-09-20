import { useEffect, useRef, useState } from 'react'
import { Users, Award, Monitor, BookOpen } from 'lucide-react'

const STATS = [
  { icon: Users, value: 1200, label: 'Speakers', suffix: '+' },
  { icon: Award, value: 500, label: 'Sponsors', suffix: '' },
  { icon: Monitor, value: 3500, label: 'Total Seats', suffix: '+' },
  { icon: BookOpen, value: 150, label: 'Topics', suffix: '' },
]

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    /* v8 ignore next */
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !counted.current) {
          counted.current = true
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
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

function StatBox({
  icon: Icon,
  value,
  label,
  suffix,
}: {
  icon: typeof Users
  value: number
  label: string
  suffix: string
}) {
  const { count, ref } = useCountUp(value)

  return (
    <div ref={ref} className="text-center">
      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
        <Icon size={24} />
      </div>
      <span className="text-4xl font-extrabold text-charcoal">
        {count}
        {suffix}
      </span>
      <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gray-400">{label}</p>
    </div>
  )
}

export function Counters() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatBox key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
