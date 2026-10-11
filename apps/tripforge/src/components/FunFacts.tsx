import { useEffect, useRef, useState } from 'react'
import { COUNTERS, FACTS } from '../data/content'
import { SectionHeading } from './SectionHeading'

const DURATION = 1200

interface CounterProps {
  value: number
  label: string
}

/* True when the visitor asked for reduced motion (and the browser can tell). */
function prefersReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/* Counts up from 0 the first time the number scrolls into view. When motion is
   switched off — or the browser has no IntersectionObserver — the final value
   is rendered directly instead. */
function Counter({ value, label }: CounterProps) {
  const canAnimate = !prefersReducedMotion() && typeof IntersectionObserver !== 'undefined'
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    if (!canAnimate) {
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
    observer.observe(nodeRef.current!)
    return () => observer.disconnect()
  }, [canAnimate])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / DURATION, 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div ref={nodeRef} className="text-center">
      <span className="counter-number">{canAnimate ? display : value}</span>
      <p className="text-white/80">{label}</p>
    </div>
  )
}

export function FunFacts() {
  return (
    <section
      id="facts"
      aria-label="Some fun facts"
      className="counter-band section-gap-lg"
      style={{ backgroundImage: `url(${FACTS.image})` }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subheading={FACTS.subheading}
          lead={FACTS.titleLead}
          rest={FACTS.titleRest}
          align="center"
          tone="light"
        >
          <p className="text-white/90">{FACTS.subtitle}</p>
        </SectionHeading>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {COUNTERS.map((counter) => (
            <Counter key={counter.label} value={counter.value} label={counter.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
