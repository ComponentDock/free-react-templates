import { useEffect, useState } from 'react'
import { ARRIVAL_WINDOWS, type ArrivalWindow } from '../content'

/**
 * The shift a given hour belongs to. The overnight window wraps midnight, so it
 * is the default arm rather than a range test — every hour of the day lands in
 * exactly one of the three.
 */
export function windowKeyFor(hour: number): string {
  if (hour >= 7 && hour < 17) return '7-17'
  if (hour >= 17 && hour < 22) return '17-22'
  return '22-7'
}

export function resolveWindow(hour: number): ArrivalWindow {
  const key = windowKeyFor(hour)
  return ARRIVAL_WINDOWS.find((item) => item.key === key)!
}

/**
 * The visitor's own clock, re-read once a minute so a page left open across a
 * window boundary does not lie. Read lazily at mount: never in the render body.
 */
export function useArrivalWindow(): ArrivalWindow {
  const [hour, setHour] = useState(() => new Date().getHours())

  useEffect(() => {
    const id = setInterval(() => setHour(new Date().getHours()), 60_000)
    return () => clearInterval(id)
  }, [])

  return resolveWindow(hour)
}
