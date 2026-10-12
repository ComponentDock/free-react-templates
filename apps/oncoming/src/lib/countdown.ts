const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/** The offset the clock counts down from. */
export interface CountdownConfig {
  readonly days: number
  readonly hours: number
}

/** Launch offset of the design: 35 days plus 19 hours from first paint. */
export const COUNTDOWN_CONFIG: CountdownConfig = { days: 35, hours: 19 }

/** The four units the clock prints. */
export type CountdownKey = 'days' | 'hours' | 'minutes' | 'seconds'

/**
 * The units in the order the design lays them out, each with the ABBREVIATED
 * label the page shows under its numeral.
 */
export const COUNTDOWN_UNITS: readonly { readonly key: CountdownKey; readonly label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hr' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Sec' },
]

/** What the clock shows right now, already formatted for the page. */
export interface CountdownValues {
  readonly days: string
  readonly hours: string
  readonly minutes: string
  readonly seconds: string
}

/** Zero-pad a value to `width` digits; longer values are left untouched. */
export function pad(value: number, width = 2): string {
  const text = String(value)

  return text.length >= width ? text : '0'.repeat(width - text.length) + text
}

/** The moment the clock counts to: the given moment plus the configured offset. */
export function resolveTarget(
  config: CountdownConfig = COUNTDOWN_CONFIG,
  now: number = Date.now(),
): number {
  return now + config.days * DAY + config.hours * HOUR
}

/**
 * Split a millisecond remainder into the four units: the day count raw (the
 * design never pads it) and hours, minutes and seconds zero-padded to two
 * digits. An elapsed remainder clamps to zero rather than going negative.
 */
export function splitRemaining(remaining: number): CountdownValues {
  const total = Math.max(0, remaining)

  return {
    days: String(Math.floor(total / DAY)),
    hours: pad(Math.floor(total / HOUR) % 24),
    minutes: pad(Math.floor(total / MINUTE) % 60),
    seconds: pad(Math.floor(total / SECOND) % 60),
  }
}
