import { useState, useEffect } from 'react'

interface StatItem {
  value: number
  label: string
}

const stats: StatItem[] = [
  { value: 596, label: 'Projects Completed' },
  { value: 552, label: 'Happy Clients' },
  { value: 5962, label: 'Total Tasks' },
  { value: 1009, label: 'Cups of Coffee' },
  { value: 435, label: 'In House Professionals' },
]

export function CounterItem({ value, label }: StatItem) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    let rafId: number
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [value])

  return (
    <div className="flex-1 text-center">
      <h4 className="font-oswald text-[48px] font-medium text-dark">{count}</h4>
      <p className="font-roboto text-sm text-dark">{label}</p>
    </div>
  )
}

export function Counter() {
  return (
    <section className="bg-accent py-[115px]">
      <div className="mx-auto flex max-w-[1170px] flex-wrap justify-between px-4">
        {stats.map((stat) => (
          <CounterItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
