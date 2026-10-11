export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** The launch target rules the design exposes (calendar date + day/hour offset). */
export interface CountdownConfig {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** The design counts down 35 days and 18 hours from first paint. */
export const COUNTDOWN_CONFIG: CountdownConfig = {
  years: 0,
  months: 0,
  days: 35,
  hours: 18,
  minutes: 0,
  seconds: 0,
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/** Zero-pad a countdown unit to two digits (the day count stays unpadded). */
export function pad(value: number): string {
  return value < 10 ? `0${value}` : String(value)
}

/**
 * Resolve the moment the countdown counts to: the configured calendar date when
 * it is still ahead, otherwise `now` plus the configured days and hours, so the
 * screen never reads zero on a fresh visit.
 */
export function resolveTarget(config: CountdownConfig, now: number = Date.now()): number {
  const configured = new Date(
    config.years,
    config.months - 1,
    config.days,
    config.hours,
    config.minutes,
    config.seconds,
  ).getTime()

  return configured > now ? configured : now + config.days * DAY + config.hours * HOUR
}

/** Split a millisecond remainder into day, hour, minute and second parts. */
export function splitRemaining(remaining: number): CountdownParts {
  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor(remaining / HOUR) % 24,
    minutes: Math.floor(remaining / MINUTE) % 60,
    seconds: Math.floor(remaining / SECOND) % 60,
  }
}
