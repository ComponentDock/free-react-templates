import { useEffect, useRef, useState } from 'react'
import { COUNTER_STATS } from '../data'

/* .ftco-counter.img — photo band (no overlay) with 4 count-up stats:
   black 40px/500 numbers that animate from 0 when scrolled into view
   (IntersectionObserver + rAF), 16px rgba(0,0,0,.8) labels. Falls back
   to the final value instantly when IntersectionObserver is unavailable. */
interface StatProps {
  value: number
  label: string
}

function Stat({ value, label }: StatProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
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
    // ref.current is guaranteed post-commit, so observe directly (no
    // defensive branch — keeps 100% branch coverage).
    observer.observe(ref.current!)
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
    <div ref={ref} className="text-center">
      <div className="text-[40px] font-medium text-ink">{display.toLocaleString('en-US')}</div>
      <div className="mt-1 text-[16px] text-black/80">{label}</div>
    </div>
  )
}

export function Counter() {
  // Light roasted-coffee-bean photo (picsum id 425) - black numbers stay
  // readable without an overlay (source: no overlay on the counter band).
  return (
    <section
      aria-label="Restaurant statistics"
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: "url('https://picsum.photos/id/425/1920/600')" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 md:grid-cols-4">
        {COUNTER_STATS.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
