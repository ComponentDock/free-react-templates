import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 5000, label: 'Happy Customers' },
  { value: 4560, label: 'Yoga Workshops' },
  { value: 570, label: 'Years of Experience' },
  { value: 900, label: 'Lesson Conducted' },
] as const

export function Counter() {
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
    <section ref={ref} id="counter" className="relative overflow-hidden bg-night-900 py-24">
      <img
        src="https://picsum.photos/seed/shanti-counter/1920/800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-mauve-500 to-transparent opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <CounterNumber target={stat.value} started={started} />
              <span className="mt-2 block text-base text-white/80">{stat.label}</span>
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

  // Render the final value until the band scrolls into view (count-up then animates).
  return (
    <strong className="text-4xl font-extralight text-white tabular-nums">
      {started ? display : target}
    </strong>
  )
}
