import { useEffect, useState } from 'react'

const STEP_MS = 24

/**
 * Counts from 0 to `target` over `duration` ms once mounted (source
 * `.experience` count-up animation). Deterministic under fake timers:
 * advancing by `duration` yields exactly `target`.
 */
export function useCountUp(target: number, duration = 1400): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let current = 0
    setValue(0)
    const increment = target / (duration / STEP_MS)
    const id = setInterval(() => {
      current += increment
      if (current >= target) {
        setValue(target)
        clearInterval(id)
      } else {
        setValue(Math.round(current))
      }
    }, STEP_MS)
    return () => clearInterval(id)
  }, [target, duration])

  return value
}
