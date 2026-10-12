import { useEffect, useState } from 'react'
import type { CountdownUnit } from './site'

export const SECOND_MS = 1000
export const MINUTE_MS = 60 * SECOND_MS
export const HOUR_MS = 60 * MINUTE_MS
export const DAY_MS = 24 * HOUR_MS

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface CountdownModel extends CountdownParts {
  /** True once the day itself has arrived — the counters give way to a single line. */
  hasPassed: boolean
}

/** How much of the wait is left, split into the four parts the design counts. */
export function partsUntil(target: number, now: number): CountdownParts {
  const left = Math.max(target - now, 0)

  return {
    days: Math.floor(left / DAY_MS),
    hours: Math.floor((left % DAY_MS) / HOUR_MS),
    minutes: Math.floor((left % HOUR_MS) / MINUTE_MS),
    seconds: Math.floor((left % MINUTE_MS) / SECOND_MS),
  }
}

/** The parts in the design's own order, keyed by the labels it prints under them. */
export function unitValues(parts: CountdownParts): Record<CountdownUnit, number> {
  return {
    Days: parts.days,
    Hours: parts.hours,
    Minutes: parts.minutes,
    Seconds: parts.seconds,
  }
}

/** Two digits whenever the number fits in two, so the row never jitters as it ticks. */
export function formatUnit(value: number): string {
  return String(value).padStart(2, '0')
}

/**
 * The countdown itself: it reads the real clock once, then once a second, against the instant the
 * day begins. A target that has already passed yields zeros and `hasPassed`.
 */
export function useCountdown(target: string): CountdownModel {
  const targetMs = new Date(target).getTime()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, SECOND_MS)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return { ...partsUntil(targetMs, now), hasPassed: targetMs - now <= 0 }
}
