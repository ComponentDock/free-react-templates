export interface CountdownParts {
  readonly days: string
  readonly hours: string
  readonly minutes: string
  readonly seconds: string
}

/** How far ahead of load time the page counts: 35 days and 18 hours. */
export const COUNTDOWN_OFFSET_MS = 35 * 86_400_000 + 18 * 3_600_000

/**
 * The values the markup paints before the first tick runs, so the clock is
 * never blank or zeroed on the very first frame.
 */
export const INITIAL_PARTS: CountdownParts = {
  days: '35',
  hours: '17',
  minutes: '59',
  seconds: '57',
}

/** Milliseconds left until `target`, clamped at zero once it has passed. */
export function remainingMs(target: number, now: number): number {
  return Math.max(0, target - now)
}

/** Zero-pads one countdown unit to at least two characters. */
export function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** Splits a millisecond remainder into the four countdown units. */
export function toParts(ms: number): CountdownParts {
  const seconds = Math.floor(ms / 1_000)
  return {
    days: pad(Math.floor(seconds / 86_400)),
    hours: pad(Math.floor(seconds / 3_600) % 24),
    minutes: pad(Math.floor(seconds / 60) % 60),
    seconds: pad(seconds % 60),
  }
}
