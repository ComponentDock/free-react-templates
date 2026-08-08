import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

const stats = [
  { value: 20000, suffix: '+', decimals: 0, label: 'Treatments Given', display: '20K+' },
  { value: 15, suffix: '+', decimals: 0, label: 'Specialists' },
  { value: 10, suffix: '+', decimals: 0, label: 'Years Experience' },
  { value: 4.9, suffix: '', decimals: 1, label: 'Client Rating' },
] as const

interface StatItem {
  value: number
  suffix: string
  decimals: number
  label: string
  display?: string
}

function formatValue(item: StatItem, current: number): string {
  if (item.display) {
    // 20K+ style readouts snap to their short label once the animation lands
    return current >= item.value ? item.display : `${current.toLocaleString()}${item.suffix}`
  }
  return `${current.toFixed(item.decimals)}${item.suffix}`
}

function CountUp({ item }: { item: StatItem }) {
  const [current, setCurrent] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof requestAnimationFrame === 'undefined') {
      setCurrent(item.value)
      return
    }
    const duration = 1200
    let frame = 0
    const tick = (now: number) => {
      // Anchor the clock to the first frame's timestamp: jsdom rAF frames
      // can carry a different time base than performance.now().
      if (startRef.current === null) startRef.current = now
      const progress = Math.min((now - startRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(item.value * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setCurrent(item.value)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [item])

  return (
    <div className="text-center">
      <div className="font-heading text-4xl font-bold text-primary-600 dark:text-primary-400">
        {formatValue(item, current)}
      </div>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
    </div>
  )
}

export function StatsBand() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100}>
            <CountUp item={stat} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
