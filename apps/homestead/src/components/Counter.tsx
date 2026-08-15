import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { counterStats } from '../data'

/** Animated count-up stat band (four 50px black numbers with labels). */
export function Counter() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto grid max-w-[1250px] px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
        {counterStats.map((stat, index) => (
          <CountUpStat
            key={stat.label}
            value={stat.value}
            label={stat.label}
            bordered={index < 3}
          />
        ))}
      </div>
    </section>
  )
}

interface CountUpStatProps {
  value: number
  label: string
  bordered: boolean
}

function CountUpStat({ value, label, bordered }: CountUpStatProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const steps = 24
    const stepMs = 60
    let step = 0
    const interval = window.setInterval(() => {
      step += 1
      setCurrent(Math.round((value * step) / steps))
      if (step >= steps) {
        window.clearInterval(interval)
      }
    }, stepMs)
    return () => window.clearInterval(interval)
  }, [value])

  return (
    <div className={cn('px-4 py-6', bordered && 'border-r border-black/[0.07] max-lg:border-r-0')}>
      <p className="text-[50px] leading-tight font-semibold text-ink">{current}</p>
      <p className="mt-2 text-lg text-black/70">{label}</p>
    </div>
  )
}
