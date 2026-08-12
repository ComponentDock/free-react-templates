import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Counters — photo-background band with white skewed strips and four
 * statistics whose numbers count up when scrolled into view.
 */
export function Counters() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="counters"
      aria-label="Statistics"
      className="relative overflow-hidden bg-footer py-28"
    >
      <img
        src="https://picsum.photos/id/495/1920/800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading title="What we offer" light />
        <div className="mt-12 grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <CounterNumber target={stat.value} started={started} />
              <span className="mt-2 block text-xl text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[90px] w-1/2 bg-white [transform:skewY(-4deg)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[90px] w-1/2 bg-white [transform:skewY(4deg)]"
      />
    </section>
  )
}

function CounterNumber({ target, started }: { target: number; started: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!started) {
      return
    }
    const duration = 1500
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  return (
    <strong className="text-6xl font-light text-white tabular-nums">
      {started ? display : target}
    </strong>
  )
}
