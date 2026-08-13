import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'

interface CounterProps {
  value: number
  label: string
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom). */
function Counter({ value, label }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef<number>(0)
  const nodeRef = useRef<HTMLDivElement>(null)

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
    observer.observe(nodeRef.current!)
    return () => observer.disconnect()
  }, [value])

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
    <div ref={nodeRef} className="text-center">
      <div className="font-display text-5xl font-semibold text-white">{display}</div>
      <div className="mt-2 text-sm font-light uppercase tracking-[0.15em] text-white/80">
        {label}
      </div>
    </div>
  )
}

/** Stats band: cover photo with a dark overlay and 4 count-up statistics. */
export function StatsBand() {
  return (
    <section
      aria-label="Key numbers"
      className="relative bg-cover bg-center py-16 md:py-[7em]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/zendo-counter-bg/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-2 gap-10 px-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Counter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
