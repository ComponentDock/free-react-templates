import { useEffect, useState } from 'react'
import type { CountdownParts } from '../lib/countdown'
import { splitRemaining } from '../lib/countdown'

const SECOND = 1000

/**
 * Live countdown to `target`, ticking once a second and never reading below
 * zero. The value is painted immediately, then re-painted on every tick, and
 * the interval clears itself as soon as the remainder reaches zero.
 */
export function useCountdown(target: number): CountdownParts {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const tick = () => {
      const next = Math.max(0, target - Date.now())
      setRemaining(next)

      if (next <= 0) {
        clearInterval(timer)
      }
    }

    const timer = setInterval(tick, SECOND)
    tick()

    return () => clearInterval(timer)
  }, [target])

  return splitRemaining(remaining)
}
