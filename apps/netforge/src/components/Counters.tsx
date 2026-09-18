import { useEffect, useRef, useState } from 'react'
import { Briefcase, Users, Award, Globe } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 350, label: 'Projects Completed' },
  { icon: Users, value: 120, label: 'Happy Clients' },
  { icon: Award, value: 15, label: 'Awards Won' },
  { icon: Globe, value: 30, label: 'Countries Served' },
] as const

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 2000
    const step = 16
    const increment = target / (duration / step)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return count
}

function CounterItem({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Briefcase
  value: number
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    /* istanbul ignore next -- ref is always set after mount */
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(value, inView)

  return (
    <div ref={ref} className="text-center">
      <Icon className="mx-auto h-8 w-8 text-primary-500" aria-hidden="true" />
      <p className="mt-3 text-4xl font-bold text-white">{count}+</p>
      <p className="mt-1 text-sm text-gray-400">{label}</p>
    </div>
  )
}

export function Counters() {
  return (
    <section aria-label="Fun fact counters" className="bg-gray-900 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <CounterItem key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
