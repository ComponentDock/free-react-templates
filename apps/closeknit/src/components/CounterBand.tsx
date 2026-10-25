import { useEffect, useRef, useState } from 'react'
import { COUNTERS } from '../content'
import { useReducedMotion } from '../lib/motion'

const DURATION_MS = 2000

function format(value: number, suffix: string): string {
  if (suffix === '%') {
    return `${value}%`
  }
  return suffix === '' ? `${value}` : `${value} ${suffix}`
}

interface CounterProps {
  value: number
  suffix: string
  label: string
  started: boolean
  reduced: boolean
}

function Counter({ value, suffix, label, started, reduced }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)
  /* No IntersectionObserver, no requestAnimationFrame, or reduced motion means
     no frame loop at all: the settled figure is derived during render instead
     of being written back from an effect. */
  const animates =
    started &&
    !reduced &&
    typeof IntersectionObserver !== 'undefined' &&
    typeof requestAnimationFrame !== 'undefined'
  const shown = !started ? 0 : animates ? display : value

  useEffect(() => {
    if (!animates) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / DURATION_MS, 1)
      setDisplay(Math.round(value * (1 - (1 - progress) ** 3)))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [animates, value])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary-600 tabular-nums lg:text-5xl">
        {format(shown, suffix)}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
    </div>
  )
}

/**
 * Four counters that run once, from zero, when the band is half visible. With
 * no IntersectionObserver the final strings are what render first paint.
 */
export function CounterBand() {
  const reduced = useReducedMotion()
  const [inView, setInView] = useState(false)
  const bandRef = useRef<HTMLDivElement | null>(null)
  const observed = typeof IntersectionObserver !== 'undefined'
  const started = !observed || inView || reduced

  useEffect(() => {
    if (!observed) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(bandRef.current as HTMLDivElement)
    return () => observer.disconnect()
  }, [observed])

  return (
    <section
      aria-label="Key numbers"
      className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div ref={bandRef} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COUNTERS.map((counter) => (
            <Counter
              key={counter.label}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
              started={started}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
