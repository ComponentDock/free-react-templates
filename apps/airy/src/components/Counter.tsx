import { useEffect, useState } from 'react'

interface StatItemProps {
  end: number
  label: string
  suffix?: string
}

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frame: number

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [end, duration])

  return count
}

function StatItem({ end, label, suffix = '' }: StatItemProps) {
  const count = useCountUp(end)
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  )
}

export function Counter() {
  return (
    <section className="relative bg-dark-bg py-20">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <span className="text-sm font-medium uppercase tracking-wider text-primary-300">
              Some
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white">Interesting Facts</h2>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <StatItem end={2000} label="Done Works" />
            <StatItem end={300} label="Happy Customers" />
            <StatItem end={100} label="Coffee" />
            <StatItem end={1000} label="Work Hours" />
          </div>
        </div>
      </div>
    </section>
  )
}
