import { useCallback, useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Photo Shoots' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Awards Won' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const started = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])
  return value
}

function StatItem({ stat }: { stat: Stat }) {
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const value = useCountUp(stat.value, inView)

  const setNode = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setInView(true)
        }
      })
      observer.observe(node)
      observerRef.current = observer
    } else {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div ref={setNode} className="text-center">
      <p className="font-serif text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
        <span data-counter={`${value}${stat.suffix}`}>
          {value}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
        {stat.label}
      </p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
