/** Milliseconds in a day, used by the countdown arithmetic. */
export const MS_PER_DAY = 86_400_000

/** Milliseconds in an hour, used by the countdown arithmetic. */
export const MS_PER_HOUR = 3_600_000

/**
 * How long the page opens with, measured from load: the design's own literal
 * target date always sits in the past, so its script falls back to this span and
 * the page always starts at `35 Days 19 Hr`.
 */
export const START_DAYS = 35

/** The hour component of the opening span. */
export const START_HOURS = 19

/** The four fields the countdown row prints. */
export interface Remaining {
  readonly days: number
  readonly hours: number
  readonly minutes: number
  readonly seconds: number
}

/**
 * Split a remaining millisecond span into its four fields, clamping anything at
 * or below zero to zero so the row can never print a negative value.
 */
export function remaining(ms: number): Remaining {
  const left = Math.max(0, ms)

  return {
    days: Math.floor(left / MS_PER_DAY),
    hours: Math.floor(left / MS_PER_HOUR) % 24,
    minutes: Math.floor(left / 60_000) % 60,
    seconds: Math.floor(left / 1_000) % 60,
  }
}

/** Two digits — the design zero-pads the hour, minute and second fields. */
export function pad(value: number): string {
  return `0${value}`.slice(-2)
}
