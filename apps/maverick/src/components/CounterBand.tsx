import { useEffect, useRef, useState } from 'react'
import { COUNTER_STATS, HIRE_ME } from '../data'

/* Counter band recreated from the ColorLib "Clark" counter: a photo
   background with a dark overlay and four #191919 stat boxes (amber
   number + label) that count up from 0 when scrolled into view. */

export function CounterBand() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setStarted(true)
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
      id="section-counter"
      className="relative overflow-hidden bg-black"
      aria-label="Statistics"
    >
      <img
        src={HIRE_ME.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {COUNTER_STATS.map((stat) => (
            <div key={stat.label} className="rounded-[5px] bg-counter p-[30px]">
              <CounterNumber target={stat.value} started={started} />
              <span className="mt-2 block text-[16px] text-white">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
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
    <strong className="text-[30px] font-bold text-brand tabular-nums">
      {started ? display : target}
    </strong>
  )
}
