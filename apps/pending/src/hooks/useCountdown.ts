import { useEffect, useState } from 'react'
import {
  MS_PER_DAY,
  MS_PER_HOUR,
  START_DAYS,
  START_HOURS,
  remaining,
  type Remaining,
} from '../lib/countdown'

/** The span the page opens with, in milliseconds. */
const START_MS = START_DAYS * MS_PER_DAY + START_HOURS * MS_PER_HOUR

/** How often the row is re-painted. */
const TICK_MS = 1000

/**
 * The countdown: the remaining time is measured against a target fixed at mount
 * (`now + 35 days + 19 hours`, mirroring the design's own past-date fallback),
 * re-painted once a second, and the interval is retired as soon as the span runs
 * out — as well as on unmount.
 */
export function useCountdown(): Remaining {
  const [state, setState] = useState<Remaining>(() => remaining(START_MS))

  useEffect(() => {
    const target = Date.now() + START_MS

    const timer = setInterval(() => {
      const left = target - Date.now()
      setState(remaining(left))

      if (left <= 0) {
        clearInterval(timer)
      }
    }, TICK_MS)

    return () => clearInterval(timer)
  }, [])

  return state
}
