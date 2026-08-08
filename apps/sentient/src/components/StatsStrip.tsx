import { useCallback, useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  decimals?: number
  label: string
}

const stats: Stat[] = [
  { value: 128, suffix: 'K+', label: 'Active Users' },
  { value: 99.99, suffix: '%', decimals: 2, label: 'Uptime SLA' },
  { value: 2.4, suffix: 'M+', decimals: 1, label: 'API Calls Served' },
  { value: 4.9, suffix: '', decimals: 1, label: 'User Rating' },
]

function useCountUp(target: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const started = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Number((target * eased).toFixed(decimals)))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, decimals, target])
  return value
}

function formatValue(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US')
}

function StatItem({ stat }: { stat: Stat }) {
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const value = useCountUp(stat.value, inView, stat.decimals ?? 0)
  const text = `${formatValue(value, stat.decimals ?? 0)}${stat.suffix}`

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
      <p className="font-display text-4xl font-bold text-white lg:text-5xl">
        <span data-counter={text}>{text}</span>
      </p>
      <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
    </div>
  )
}

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gray-950 py-14 lg:py-16">
      <div
        className="absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-primary-600/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
