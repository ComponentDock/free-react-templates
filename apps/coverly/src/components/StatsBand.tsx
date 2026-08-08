import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom), matching the demo's static "0" → data-counter behavior. */
function Counter({ value, prefix = '', suffix = '', decimals = 0, label }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(document.getElementById(`counter-${label}`)!)
    return () => observer.disconnect()
  }, [value, label])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1200, 1)
      setDisplay(Number((value * progress).toFixed(decimals)))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value, decimals])

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="text-4xl font-bold text-primary-600 lg:text-5xl dark:text-primary-400">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  )
}

const stats = [
  { value: 2.5, prefix: '$', suffix: 'M+', decimals: 1, label: 'Claims Paid' },
  { value: 50, suffix: 'K+', label: 'Active Policies' },
  { value: 99, suffix: '%', label: 'Claims Approval' },
  { value: 30, suffix: '+', label: 'Years Trusted' },
] as const

export function StatsBand() {
  return (
    <section
      aria-label="Key numbers"
      className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
