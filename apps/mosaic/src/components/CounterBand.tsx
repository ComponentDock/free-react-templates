import { useEffect, useRef, useState } from 'react'
import { COUNTERS } from '../data'

interface CounterProps {
  value: number
  label: string
}

/* Animated counter: counts up from 0 when it scrolls into view (reference
   numbers animate 0 → target on scroll). Falls back to the final value
   instantly when IntersectionObserver is unavailable (jsdom). */
function Counter({ value, label }: CounterProps) {
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
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="text-4xl font-medium text-white md:text-5xl">{display.toLocaleString()}</div>
      <div className="mx-auto mt-3 max-w-[260px] text-sm leading-relaxed text-white/70">
        {label}
      </div>
    </div>
  )
}

/* Counter band — azure #29bae4 band with the heading "Our achievements"
   and three animated counters (400 / 1000 / 8000). */
export function CounterBand() {
  return (
    <section id="counter" aria-label="Our achievements" className="bg-azure py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
          Our achievements
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {COUNTERS.map((counter) => (
            <Counter key={counter.label} value={counter.value} label={counter.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
