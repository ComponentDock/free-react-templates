import { useEffect, useRef, useState } from 'react'

interface DonationCounterProps {
  target: number
  durationMs?: number
}

/* Scroll-triggered count-up recreating the source jquery.animateNumber
   behavior (data-number="380000"): counts 0 → target when the number
   scrolls into view. Falls back to the final value instantly when
   IntersectionObserver is unavailable (jsdom). */
export function DonationCounter({ target, durationMs = 2000 }: DonationCounterProps) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      setDisplay(target)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          observer.disconnect()
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1)
            setDisplay(Math.round(target * progress))
            if (progress < 1) {
              frameRef.current = requestAnimationFrame(tick)
            }
          }
          frameRef.current = requestAnimationFrame(tick)
        }
      }
    })
    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameRef.current)
    }
  }, [target, durationMs])

  return <span ref={ref}>{display.toLocaleString('en-US')}</span>
}
