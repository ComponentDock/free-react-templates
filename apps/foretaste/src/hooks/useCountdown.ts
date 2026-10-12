import { useEffect, useState } from 'react'
import { COUNTDOWN_OFFSET_MS, INITIAL_PARTS, remainingMs, toParts } from '../lib/countdown'
import type { CountdownParts } from '../lib/countdown'

/** How often the clock re-paints its digits. */
export const TICK_MS = 1_000

/**
 * Live countdown: the target is fixed at mount time (now + the offset) and the
 * remaining time is recomputed once a second, clamped at zero. The interval is
 * always cleared on unmount, and the hook never issues a request.
 */
export function useCountdown(offsetMs: number = COUNTDOWN_OFFSET_MS): CountdownParts {
  const [target] = useState(() => Date.now() + offsetMs)
  const [parts, setParts] = useState<CountdownParts>(INITIAL_PARTS)

  useEffect(() => {
    const id = setInterval(() => {
      setParts(toParts(remainingMs(target, Date.now())))
    }, TICK_MS)
    return () => clearInterval(id)
  }, [target])

  return parts
}
