import { useEffect, useRef, useState } from 'react'
import { counters } from '../data'

interface CounterProps {
  value: number
  suffix: string
  label: string
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls
   back to the final value instantly when IntersectionObserver is
   unavailable (jsdom). */
function Counter({ value, suffix, label }: CounterProps) {
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
    <div id={`counter-${label}`} className="px-5 py-10 text-center">
      <div className="font-display text-5xl font-semibold text-white">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">{label}</div>
    </div>
  )
}

/* Blue diagonal-stripe band with a red skewed tab and four animated
   counters. */
export function CounterBand() {
  return (
    <section aria-label="Key numbers" className="relative overflow-hidden">
      <div className="stripe-diagonal">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {counters.map((counter) => (
            <Counter key={counter.label} {...counter} />
          ))}
        </div>
      </div>
      <div
        className="absolute -left-7 top-0 h-full w-[70px] bg-primary [transform:skew(-15deg)] max-md:hidden"
        aria-hidden="true"
      />
    </section>
  )
}
