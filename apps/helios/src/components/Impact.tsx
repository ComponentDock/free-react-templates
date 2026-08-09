import { useEffect, useRef, useState } from 'react'
import { Leaf, Plug, Sprout, TrendingUp, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

interface CounterProps {
  value: number
  label: string
  icon: LucideIcon
}

function formatNumber(value: number): string {
  return Math.round(value).toLocaleString('en-US')
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom), matching the demo's count-up behavior. */
function Counter({ value, label, icon: Icon }: CounterProps) {
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
    observer.observe(document.getElementById(`impact-counter-${label}`)!)
    return () => observer.disconnect()
  }, [value, label])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1200, 1)
      setDisplay(value * progress)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div id={`impact-counter-${label}`} className="text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div className="mt-3 text-3xl font-extrabold text-white lg:text-4xl">
        {formatNumber(display)}
      </div>
      <div className="mt-1 text-sm font-medium text-white/80">{label}</div>
    </div>
  )
}

const counters = [
  { value: 25000, label: 'Tons CO2 Offset', icon: Leaf },
  { value: 1500000, label: 'Trees Equivalent', icon: Sprout },
  { value: 48000000, label: 'kWh Generated', icon: Plug },
  { value: 12000, label: 'Homes Powered', icon: TrendingUp },
] as const

export function Impact() {
  return (
    <section className="bg-primary-600 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
              Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Our Environmental Impact
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Every system we install moves us closer to a cleaner, more sustainable grid.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {counters.map((counter) => (
            <Counter key={counter.label} {...counter} />
          ))}
        </div>
      </div>
    </section>
  )
}
