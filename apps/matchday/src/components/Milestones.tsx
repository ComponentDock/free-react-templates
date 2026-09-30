import { useEffect, useRef, useState } from 'react'
import { Footprints, Medal, Trophy, Users } from 'lucide-react'
import { milestones } from '../data'

const icons = [Users, Trophy, Medal, Footprints] as const

interface CounterProps {
  value: number
  title: string
  subtitle: string
  iconIndex: number
}

/* Animated counter: counts up from 0 when the parallax band scrolls into
   view. Without IntersectionObserver (jsdom) the final value is derived
   during render. Observer + animation frame are cleaned up on unmount. */
function Counter({ value, title, subtitle, iconIndex }: CounterProps) {
  const observerAvailable = typeof IntersectionObserver !== 'undefined'
  const [display, setDisplay] = useState(() => (observerAvailable ? 0 : value))
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef<number>(0)
  const Icon = icons[iconIndex]!

  useEffect(() => {
    if (!observerAvailable) {
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
    const node = document.getElementById(`counter-${title}`)
    observer.observe(node!)
    return () => observer.disconnect()
  }, [observerAvailable, title])

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
    <div id={`counter-${title}`} className="text-center">
      <Icon className="mx-auto h-12 w-12 text-white" aria-hidden="true" />
      <div className="mt-4 text-4xl font-medium text-brand lg:text-5xl">{display}</div>
      <h3 className="mt-2 text-lg font-medium text-white">{title}</h3>
      <p className="mt-1 text-[11px] font-medium text-[#737791]">{subtitle}</p>
    </div>
  )
}

/** Milestones: parallax photo band with four club counters. */
export function Milestones() {
  return (
    <section
      aria-label="Club milestones"
      className="relative min-h-[400px] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/matchday-milestones/1920/600)' }}
    >
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[400px] max-w-7xl grid-cols-2 items-center gap-10 px-4 py-20 lg:grid-cols-4 lg:px-8">
        {milestones.map((item, i) => (
          <Counter
            key={item.title}
            value={item.value}
            title={item.title}
            subtitle={item.subtitle}
            iconIndex={i}
          />
        ))}
      </div>
    </section>
  )
}
