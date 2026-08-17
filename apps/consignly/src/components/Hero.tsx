import { useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { HERO, STATS, type Stat } from '../data'
import { DottedMap } from './DottedMap'

interface CounterProps {
  value: number
  label: string
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom), matching the demo's counter.js behavior. */
function Counter({ value, label }: CounterProps) {
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
    observer.observe(document.getElementById(`counter-${label}`)!)
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
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="font-display text-3xl font-bold text-white">
        {display}
        <span className="mx-auto mt-2 block h-0.5 w-[30px] bg-accent" aria-hidden="true" />
      </div>
      <div className="mt-3 text-sm text-white/50">{label}</div>
    </div>
  )
}

/* Hero — full-height navy band with the dotted world map, the "Find
   logistic services" headline, a ZIP-search form, and the four stat
   counters at the bottom. */
export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-navy py-28">
      <DottedMap className="pointer-events-none absolute left-1/2 top-[8%] w-[70%] -translate-x-1/2 text-white/10" />
      <div className="relative mx-auto w-full max-w-3xl px-4 text-center">
        <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
          {HERO.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
          {HERO.lead}
        </p>
        <form
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="search-location" className="sr-only">
            Location
          </label>
          <input
            id="search-location"
            name="location"
            type="text"
            defaultValue=""
            placeholder={HERO.searchPlaceholder}
            className="w-full border-0 border-b-[1px] border-black/30 bg-transparent px-2 py-3 text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
          />
          <Button
            type="submit"
            className="rounded bg-accent px-8 font-bold text-brand hover:bg-accent-soft"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            {HERO.searchLabel}
          </Button>
        </form>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat: Stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
