import { useCallback, useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  decimals?: number
  label: string
}

const stats: Stat[] = [
  { value: 2500, suffix: '+', label: 'Active Jobs' },
  { value: 500, suffix: '+', label: 'Companies' },
  { value: 50, suffix: 'K+', label: 'Successful Hires' },
  { value: 4.8, suffix: '', decimals: 1, label: 'User Rating' },
] as const

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
      <p className="text-4xl font-extrabold text-white lg:text-5xl">
        <span data-counter={text}>{text}</span>
      </p>
      <p className="mt-2 text-sm text-primary-100">{stat.label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <div className="relative border-t border-white/10 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 pb-16 lg:pb-20 dark:from-primary-900 dark:via-primary-950 dark:to-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  )
}
