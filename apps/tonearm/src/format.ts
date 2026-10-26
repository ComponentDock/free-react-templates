/**
 * Seconds as `m:ss`. Minutes are floored and never padded, seconds are always
 * two digits, and a negative input prints `0:00` — the remaining label prefixes
 * its own hyphen, so the formatter must not produce a second one.
 */
export function formatTime(seconds: number): string {
  const whole = Math.max(0, Math.round(seconds))
  const minutes = Math.floor(whole / 60)
  const rest = String(whole % 60).padStart(2, '0')
  return `${minutes}:${rest}`
}

/** Keeps a simulated clock inside its track. */
export function clampSeconds(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}
