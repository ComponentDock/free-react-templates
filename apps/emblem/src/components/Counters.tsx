import { useEffect, useRef, useState } from 'react'
import { counters } from '../data'

interface CounterProps {
  icon: (typeof counters)[number]['icon']
  value: string
  caption: string
}

/* Animated counter: counts up from 0 when scrolled into view (aegis
   StatsBand pattern); falls back to the final value instantly when
   IntersectionObserver is unavailable (jsdom). */
function Counter({ icon: Icon, value, caption }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(Number.parseInt(value, 10))
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
    observer.observe(document.getElementById(`counter-${caption}`)!)
    return () => observer.disconnect()
  }, [value, caption])

  useEffect(() => {
    if (!started) {
      return
    }
    const target = Number.parseInt(value, 10)
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1200, 1)
      setDisplay(Math.round(target * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  const suffix = value.replace(/[0-9]/g, '')

  return (
    <div id={`counter-${caption}`} className="text-center">
      <Icon className="mx-auto h-8 w-8 text-white" aria-hidden="true" />
      <div className="mt-4 text-3xl font-bold text-gold">
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-white/70">{caption}</p>
    </div>
  )
}

/** Emblem counter band: dark (#222) strip with three animated counters
 *  (icon + gold number + caption). */
export function Counters() {
  return (
    <section aria-label="Company numbers" className="bg-counter py-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-3 lg:px-10">
        {counters.map((counter) => (
          <Counter key={counter.caption} {...counter} />
        ))}
      </div>
    </section>
  )
}
