import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  label: string
}

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom), matching the source demo's static-number behavior. */
export function Counter({ value, label }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
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
    // The counter div always renders, so the ref is attached by the time
    // effects run; a null check here would be an untestable dead branch.
    observer.observe(ref.current as HTMLDivElement)
    return () => observer.disconnect()
  }, [value])

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
    <div ref={ref} className="text-center">
      <div className="text-4xl font-semibold text-brand lg:text-5xl">
        {display.toLocaleString()}
      </div>
      <div className="mt-2 text-[13px] font-medium uppercase tracking-wider text-label">
        {label}
      </div>
    </div>
  )
}
