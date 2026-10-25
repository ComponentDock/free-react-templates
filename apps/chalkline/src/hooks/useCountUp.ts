import { useCallback, useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/** Counts a figure up from zero the first time it scrolls into view. With
 * reduced motion the value is the target from first paint, with no tween. */
export function useCountUp(target: number, duration = 1400) {
  const [node, setNode] = useState<HTMLSpanElement | null>(null)
  const ref = useCallback((element: HTMLSpanElement | null) => setNode(element), [])
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0))

  useEffect(() => {
    if (!node || prefersReducedMotion()) {
      return
    }

    let frame = 0
    let startedAt: number | null = null

    const step = (now: number) => {
      if (startedAt === null) {
        startedAt = now
      }
      const progress = Math.min((now - startedAt) / duration, 1)
      setValue(Math.round(progress * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }
          observer.unobserve(entry.target)
          frame = requestAnimationFrame(step)
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [node, target, duration])

  return { ref, value }
}
