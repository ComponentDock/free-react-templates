import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './Reveal'
import { counters, type Counter } from '../content'

const DURATION = 2000
const STEPS = 20

/** Cubic ease-out: fast out of the gate, slow into the target. */
function ease(progress: number): number {
  return 1 - Math.pow(1 - progress, 3)
}

export interface CounterValueProps {
  counter: Counter
}

/**
 * Ships the final figure and animates up from zero once, when half of the box
 * is visible. Without an observer (jsdom) or with reduced motion the figure is
 * simply the final value — never a flash of zero.
 */
export function CounterValue({ counter }: CounterValueProps) {
  const [display, setDisplay] = useState<number | null>(null)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const ticker = useRef<number | null>(null)
  const disabled = typeof IntersectionObserver === 'undefined' || prefersReducedMotion()

  useEffect(() => {
    const element = ref.current as HTMLSpanElement
    if (disabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || started.current) {
          return
        }
        started.current = true
        observer.disconnect()

        let step = 0
        ticker.current = window.setInterval(() => {
          step += 1
          setDisplay(Math.round(counter.value * ease(step / STEPS)))
          if (step >= STEPS) {
            window.clearInterval(ticker.current as number)
            ticker.current = null
          }
        }, DURATION / STEPS)
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (ticker.current !== null) {
        window.clearInterval(ticker.current)
      }
    }
  }, [counter.value, disabled])

  /** First paint is the real figure; the count starts when the band is in view. */
  const shown = disabled || display === null ? counter.value : display

  return (
    <span ref={ref} data-counter={counter.value} className="text-4xl font-bold text-primary-600 tabular-nums lg:text-5xl">
      {shown}
      {counter.suffix ?? ''}
    </span>
  )
}

/** Four counters on the grey band, ruled top and bottom. */
export function Counters() {
  return (
    <section
      aria-label="The practice in numbers"
      className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20"
    >
      <dl className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 lg:px-8">
        {counters.map((counter) => (
          <div key={counter.label}>
            <dd>
              <CounterValue counter={counter} />
            </dd>
            <dt className="mt-2 text-sm text-gray-600">{counter.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
