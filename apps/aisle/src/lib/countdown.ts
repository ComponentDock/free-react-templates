/**
 * The two scales the countdown needs: milliseconds for the arithmetic, and the seconds in a minute,
 * an hour and a day when the remainder is split. They are kept apart deliberately — a "seconds
 * since the epoch" split that divides by the millisecond constants prints minutes where days
 * belong.
 */
export const MS_SECOND = 1000
export const MS_MINUTE = 60 * MS_SECOND
export const MS_HOUR = 60 * MS_MINUTE
export const MS_DAY = 24 * MS_HOUR

const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR

/**
 * The hour the page counts down to: three in the afternoon on 12 September 2027, the app's own
 * date. The reference counts down to a 2017 date and has therefore sat at zero since the day it
 * shipped; this one is in the future and the page renders a real clock.
 */
export const WEDDING_TARGET = Date.UTC(2027, 8, 12, 15, 0, 0)

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

/** Every figure is printed two digits wide, so the circles never shift as the numbers fall. */
export function pad(value: number): string {
  return String(value).padStart(2, '0')
}
