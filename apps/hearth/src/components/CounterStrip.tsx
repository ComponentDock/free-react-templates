import { useEffect, useRef, useState } from 'react'
import { COUNTERS, COUNTER_BG } from '../data'

type CounterProps = {
  value: number
  label: string
}

const DURATION_MS = 1200

/* Animated counter: counts up from 0 when the strip scrolls into view
   (source `.block-18` counterUp). Falls back to the final value instantly
   when IntersectionObserver is unavailable (jsdom). */
function Counter({ value, label }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
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
    observer.observe(elementRef.current!)
    return () => observer.disconnect()
  }, [value])

  useEffect(() => {
    if (!started) return
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / DURATION_MS, 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div ref={elementRef} className="text-center">
      <strong className="block text-[40px] font-medium text-white">{display}</strong>
      <span className="mt-2 block text-base text-white/80">{label}</span>
    </div>
  )
}

/**
 * CounterStrip — full-bleed photo band (source `#section-counter`) with four
 * animated statistics: 30 Years of Experienced, 100 Happy Customers, 50
 * Finished Projects, 100 Working Days. Numbers are 40px white Poppins, labels
 * 16px translucent white.
 */
export function CounterStrip() {
  return (
    <section aria-label="Restaurant statistics" className="relative overflow-hidden py-24">
      <img src={COUNTER_BG} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:grid-cols-4">
        {COUNTERS.map((counter) => (
          <Counter key={counter.label} value={counter.value} label={counter.label} />
        ))}
      </div>
    </section>
  )
}
