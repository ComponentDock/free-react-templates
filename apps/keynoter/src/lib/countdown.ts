import { useEffect, useState } from 'react'

export interface Remaining {
  readonly days: number
  readonly hours: number
  readonly minutes: number
  readonly seconds: number
}

const DAY = 86_400_000
const HOUR = 3_600_000
const MINUTE = 60_000
const SECOND = 1_000

/**
 * Split the gap between two timestamps into whole days/hours/minutes/seconds.
 *
 * The reference ships a countdown target in the past, so its live page renders
 * `00` in all four cells. Here the target is a future constant and a target
 * that has already passed floors at zero instead of going negative.
 */
export function remainingParts(target: number, now: number): Remaining {
  const diff = Math.max(0, target - now)
  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / SECOND),
  }
}

/** Two-digit display string (`7` → `07`, `56` → `56`). */
export function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** Live countdown to an ISO instant, ticking once a second. */
export function useCountdown(targetIso: string): Remaining {
  const target = Date.parse(targetIso)
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), SECOND)
    return () => clearInterval(id)
  }, [])

  return remainingParts(target, now)
}
