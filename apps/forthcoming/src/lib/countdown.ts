/** The countdown units the clock shows. */
export interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** The launch offset the design exposes: a day and an hour count. */
export interface CountdownConfig {
  days: number
  hours: number
}

/** The design counts down 35 days and 18 hours from first paint. */
export const COUNTDOWN_CONFIG: CountdownConfig = { days: 35, hours: 18 }

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/* the same units in whole seconds, for splitting a whole-second remainder */
const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR

/** Zero-pad a countdown unit to two digits; wider values stay untouched. */
export function pad(value: number): string {
  return value < 10 ? `0${value}` : String(value)
}

/** The moment the clock counts to: `now` plus the configured day/hour offset. */
export function resolveTarget(
  config: CountdownConfig = COUNTDOWN_CONFIG,
  now: number = Date.now(),
): number {
  return now + config.days * DAY + config.hours * HOUR
}

/**
 * Split a millisecond remainder into the four clock values. Anything below zero
 * reads as zero, so the clock never shows negative units.
 *
 * Note the design writes the day count raw (no leading zero) while the other
 * three units are two digits wide — formatting is the caller's job.
 */
export function splitRemaining(remaining: number): CountdownParts {
  const total = Math.max(0, Math.floor(remaining / SECOND))

  return {
    days: Math.floor(total / SECONDS_PER_DAY),
    hours: Math.floor(total / SECONDS_PER_HOUR) % 24,
    minutes: Math.floor(total / SECONDS_PER_MINUTE) % 60,
    seconds: total % SECONDS_PER_MINUTE,
  }
}
