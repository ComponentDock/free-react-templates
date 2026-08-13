import { useEffect, useRef, useState } from 'react'
import { about } from '../data'

/** About + counters (reference `.ftco-counter.img`): photo on the left, the
 *  club heading + copy and a 2×2 grid of light counter blocks on the right;
 *  the numbers count up when the section scrolls into view (waypoint). */
export function About() {
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
    <section id="about" ref={ref} aria-label="About" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <img
          src={about.image}
          alt="Kickoff team on the pitch"
          className="w-full rounded-[5px] object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="text-4xl font-black text-ink">{about.heading}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-5 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <div className="mt-10 grid grid-cols-2 gap-4">
            {about.counters.map(({ value, label }) => (
              <CounterBlock key={label} target={value} label={label} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CounterBlock({
  target,
  label,
  started,
}: {
  target: number
  label: string
  started: boolean
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!started) {
      return
    }
    const duration = 7000
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
    <div className="bg-mist px-4 py-8 text-center">
      <strong className="block text-4xl font-black text-ink tabular-nums">
        {started ? display.toLocaleString('en-US') : target.toLocaleString('en-US')}
      </strong>
      <span className="mt-2 block text-sm tracking-wider text-muted uppercase">{label}</span>
    </div>
  )
}
