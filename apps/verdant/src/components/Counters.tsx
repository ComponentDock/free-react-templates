import { useEffect, useRef, useState } from 'react'
import { counters } from '../data'

interface CounterProps {
  value: number
  caption: string
}

function formatNumber(value: number): string {
  return value.toLocaleString('en-US')
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom), matching the reference's animateNumber behavior. */
function Counter({ value, caption }: CounterProps) {
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
    observer.observe(document.getElementById(`counter-${caption}`)!)
    return () => observer.disconnect()
  }, [value, caption])

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
    <div id={`counter-${caption}`} className="text-center">
      <div className="font-heading text-5xl font-semibold text-primary lg:text-6xl">
        {formatNumber(display)}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-black/60">
        {caption}
      </div>
    </div>
  )
}

/** Counters section: photo on the left, heading + paragraph + two animated
 *  counters (Current Downloads, Number of Templates) on the right. */
export function Counters() {
  return (
    <section aria-label="Counters" className="bg-white py-14 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <img
          src="https://picsum.photos/seed/verdant-counters/900/650"
          alt="Free Templates By Verdant illustration"
          className="h-72 w-full object-cover lg:h-[420px]"
          loading="lazy"
        />
        <div>
          <h2 className="font-heading text-3xl font-semibold uppercase text-black">
            Free Templates By Verdant
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {counters.map((counter) => (
              <Counter key={counter.caption} {...counter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
