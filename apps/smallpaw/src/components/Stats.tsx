import { useEffect, useRef, useState } from 'react'
import { STATS, type Stat } from '../data'

function format(value: number, suffix: string): string {
  return `${value.toLocaleString('en-GB')}${suffix}`
}

/**
 * One `data-counter`. The reference ramps from 0 to the value over 2 s with an
 * ease-out-cubic curve, once, at 50 % visibility. In a jsdom test there is no
 * `IntersectionObserver`, so the final value is derived during render instead
 * of being written back from an effect.
 */
function Counter({ stat }: { stat: Stat }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const shown = typeof IntersectionObserver === 'undefined' ? stat.value : display
  const ref = useRef<HTMLDivElement>(null)
  const startedAt = useRef<number | null>(null)
  const frame = useRef(0)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(ref.current as Element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) {
      return
    }

    const animate = (now: number) => {
      if (startedAt.current === null) {
        startedAt.current = now
      }
      const t = Math.min((now - startedAt.current) / 2000, 1)
      const eased = 1 - (1 - t) ** 3
      setDisplay(Math.round(stat.value * eased))
      if (t < 1) {
        frame.current = requestAnimationFrame(animate)
      }
    }

    frame.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame.current)
  }, [started, stat.value])

  return (
    <div ref={ref} className="flex flex-col-reverse text-center">
      <dt className="mt-2 text-sm font-medium text-gray-600">{stat.label}</dt>
      <dd className="text-4xl font-bold text-primary-600 lg:text-5xl">
        {format(shown, stat.suffix)}
      </dd>
    </div>
  )
}

/** The recessed `gray-50` strip the four counters sit on. */
export function Stats() {
  return (
    <section
      aria-label="The practice in numbers"
      className="border-y border-gray-200 bg-gray-50 py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <Counter key={stat.label} stat={stat} />
          ))}
        </dl>
      </div>
    </section>
  )
}
