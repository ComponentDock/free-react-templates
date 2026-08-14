import { useEffect, useRef, useState } from 'react'
import { facts } from '../data'

interface CounterProps {
  value: number
  label: string
}

/** Animated counter: counts up from 0 when scrolled into view. Falls back to
 *  the final value instantly when IntersectionObserver is unavailable
 *  (jsdom), so tests always see the settled number. */
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
      <div className="text-4xl font-semibold text-white lg:text-5xl">{display}</div>
      <p className="mt-2 text-sm font-light uppercase tracking-wide text-white/90">{label}</p>
    </div>
  )
}

/** Facts band: brand gradient background with four count-up statistics. */
export function Facts() {
  return (
    <section aria-label="Facts" className="bg-gradient-to-br from-primary to-accent py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 px-4 lg:grid-cols-4">
        {facts.map((fact) => (
          <Counter key={fact.label} value={fact.value} label={fact.label} />
        ))}
      </div>
    </section>
  )
}
