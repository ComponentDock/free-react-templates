import { useEffect, useState } from 'react'
import { counterBackground, counterStats } from '../data'

const STEP_INTERVAL_MS = 60
const STEPS = 30

function useCountUp(target: number) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const increment = Math.max(1, Math.ceil(target / STEPS))
    let current = 0
    const id = window.setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        window.clearInterval(id)
      }
      setValue(current)
    }, STEP_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [target])

  return value
}

function CounterStatItem({ value, label, icon: Icon }: (typeof counterStats)[number]) {
  const count = useCountUp(value)

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white/10">
        <Icon aria-hidden="true" className="size-8" />
      </span>
      <div>
        <p className="text-4xl font-semibold">{count.toLocaleString('en-US')}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[1px] text-white/80">{label}</p>
      </div>
    </div>
  )
}

export function Counters() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${counterBackground})` }}
    >
      <span aria-hidden="true" className="absolute inset-0 bg-brand/90" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {counterStats.map((stat) => (
          <CounterStatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
