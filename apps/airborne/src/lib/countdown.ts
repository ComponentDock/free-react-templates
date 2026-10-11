/** The launch offset the design counts down from: 35 days plus 18 hours. */
export interface CountdownConfig {
  days: number
  hours: number
}

/** The design counts down 35 days and 18 hours from first paint. */
export const COUNTDOWN_CONFIG: CountdownConfig = { days: 35, hours: 18 }

/** One flip card per digit: a two-digit day pair followed by hh, mm and ss. */
export const CARD_COUNT = 8

/** The eight digits a full clock shows, day pair first. */
export type FlipDigits = readonly [string, string, string, string, string, string, string, string]

/** One change flag per card. */
export type FlipMask = readonly [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
]

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/* the same units in whole seconds, for splitting a millisecond remainder */
const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE
const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR

/** Zero-pad a value to `width` digits; longer values are left untouched. */
export function pad(value: number, width = 2): string {
  const text = String(value)

  return text.length >= width ? text : '0'.repeat(width - text.length) + text
}

/** The moment the clock counts to: `now` plus the configured day/hour offset. */
export function resolveTarget(
  config: CountdownConfig = COUNTDOWN_CONFIG,
  now: number = Date.now(),
): number {
  return now + config.days * DAY + config.hours * HOUR
}

/**
 * Split a millisecond remainder into the eight card digits — the day pair
 * (always two digits for an eight-card clock) then zero-padded hours, minutes
 * and seconds, trimmed to the card count from the left like the design does.
 */
export function splitDigits(remaining: number): FlipDigits {
  const total = Math.max(0, Math.floor(remaining / SECOND))
  const text =
    pad(Math.floor(total / SECONDS_PER_DAY), Math.max(2, CARD_COUNT - 6)) +
    pad(Math.floor(total / SECONDS_PER_HOUR) % 24) +
    pad(Math.floor(total / SECONDS_PER_MINUTE) % 60) +
    pad(total % SECONDS_PER_MINUTE)

  return text.slice(-CARD_COUNT).split('') as unknown as FlipDigits
}

/** Flag the cards whose digit moved between two frames. */
export function diffMask(previous: FlipDigits, next: FlipDigits): FlipMask {
  return next.map((digit, index) => digit !== previous[index]) as unknown as FlipMask
}
