/**
 * The two independent scales the countdown needs: milliseconds for the arithmetic, and the number
 * of seconds in a minute / hour / day when the remainder is split.
 */
export const MS_SECOND = 1000
export const MS_MINUTE = 60 * MS_SECOND
export const MS_HOUR = 60 * MS_MINUTE
export const MS_DAY = 24 * MS_HOUR

const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR

/** The day the page counts down to: 11 September 2027, 14:00 UTC. */
export const WEDDING_TARGET = Date.UTC(2027, 8, 11, 14, 0, 0)

export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function splitDuration(target: number, now: number): CountdownParts {
  const remaining = Math.max(target - now, 0)
  const totalSeconds = Math.floor(remaining / MS_SECOND)

  return {
    days: Math.floor(totalSeconds / SECONDS_PER_DAY),
    hours: Math.floor((totalSeconds % SECONDS_PER_DAY) / SECONDS_PER_HOUR),
    minutes: Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE),
    seconds: totalSeconds % SECONDS_PER_MINUTE,
  }
}

/** Every cell is printed as two digits, so the row never shifts as the numbers fall. */
export function pad(value: number): string {
  return String(value).padStart(2, '0')
}
