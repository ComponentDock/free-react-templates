import { useEffect, useRef, useState } from 'react'
import { COUNTERS } from '../data'
import { Reveal } from './Reveal'

const DURATION = 2000

function formatCount(value: number, prefix: string, suffix: string): string {
  return `${prefix}${Math.round(value).toLocaleString('en-US')}${suffix}`
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

interface CounterProps {
  final: string
  number: number
  prefix: string
  suffix: string
  label: string
}

/**
 * One counter. It ships the reference's final literal (so a no-JS visitor reads
 * the truth), then animates from 0 over two seconds once half-visible, and
 * writes the *literal* on the last frame — which is how `< 3h` survives.
 */
function Counter({ final, number, prefix, suffix, label }: CounterProps) {
  const [text, setText] = useState(final)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    if (prefersReducedMotion()) {
      return
    }

    let frame = 0
    let start: number | null = null

    const step = (now: number) => {
      if (start === null) {
        start = now
      }
      const progress = Math.min(1, (now - start) / DURATION)
      const eased = 1 - (1 - progress) ** 3
      setText(progress >= 1 ? final : formatCount(number * eased, prefix, suffix))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect()
          frame = requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(ref.current as Element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [final, number, prefix, suffix])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold tabular-nums text-primary-600 lg:text-5xl">{text}</div>
      <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
    </div>
  )
}

/** The hairline band between the hero and the channels. */
export function CounterBand() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COUNTERS.map((counter, index) => (
            <Reveal key={counter.label} delay={index * 100}>
              <Counter {...counter} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
