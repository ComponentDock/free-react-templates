import { useEffect, useState } from 'react'

export interface CountdownValue {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/** Split a millisecond remainder into day/hour/minute/second parts. */
export function splitRemaining(remaining: number): CountdownValue {
  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor(remaining / HOUR) % 24,
    minutes: Math.floor(remaining / MINUTE) % 60,
    seconds: Math.floor(remaining / SECOND) % 60,
  }
}

/**
 * Live countdown to `target`, ticking once a second and never reading below
 * zero. The value is painted immediately, then re-painted on every tick.
 */
export function useCountdown(target: number): CountdownValue {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const tick = () => {
      setRemaining(Math.max(0, target - Date.now()))
    }

    tick()
    const timer = setInterval(tick, SECOND)
    return () => clearInterval(timer)
  }, [target])

  return splitRemaining(remaining)
}
