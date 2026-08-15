import { useEffect, useRef, useState } from 'react'
import { milestones } from '../data'

interface CounterProps {
  value: number
  suffix?: string
  label: string
}

function Counter({ value, suffix = '', label }: CounterProps) {
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
    observer.observe(document.getElementById(`amity-counter-${label}`)!)
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
    <div id={`amity-counter-${label}`} className="text-center">
      <p className="text-[48px] font-medium text-ink">
        {display}
        {suffix && <span className="text-[24px] font-medium">{suffix}</span>}
      </p>
      <p className="mt-2 text-[14px] text-muted">{label}</p>
    </div>
  )
}

export function Milestones() {
  return (
    <section aria-label="Milestones" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="relative pb-9 text-[36px] leading-[1.6] font-semibold text-ink">
            We love to help all the children that have problems in the world. After 15 years we have
            many goals achieved.
          </h2>
          <span className="mb-6 block h-1 w-16 rounded-sm bg-brand" aria-hidden="true" />
          <p className="text-[14px] text-muted">
            From classrooms to clean water, every milestone is a community of supporters making
            generosity a habit.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {milestones.map((milestone) => (
            <Counter key={milestone.label} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  )
}
