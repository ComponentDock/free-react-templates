import { describe, expect, it } from 'vitest'
import { COUNTDOWN_CONFIG, pad, resolveTarget, splitRemaining } from './countdown'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

describe('pad', () => {
  it('zero-pads a single digit', () => {
    expect(pad(0)).toBe('00')
    expect(pad(9)).toBe('09')
  })

  it('leaves two-digit and wider values untouched', () => {
    expect(pad(10)).toBe('10')
    expect(pad(59)).toBe('59')
    expect(pad(100)).toBe('100')
  })
})

describe('resolveTarget', () => {
  it('defaults to the design offset of 35 days and 18 hours from now', () => {
    const now = 1_700_000_000_000

    expect(resolveTarget(COUNTDOWN_CONFIG, now)).toBe(now + 35 * DAY + 18 * HOUR)
  })

  it('uses the design offset and the current clock when called with no arguments', () => {
    const target = resolveTarget()
    const offset = target - Date.now()

    expect(offset).toBeGreaterThan(34 * DAY + 17 * HOUR)
    expect(offset).toBeLessThanOrEqual(35 * DAY + 18 * HOUR)
  })

  it('honours a custom offset', () => {
    expect(resolveTarget({ days: 1, hours: 2 }, 0)).toBe(DAY + 2 * HOUR)
  })
})

describe('splitRemaining', () => {
  it('splits a remainder into days, hours, minutes and seconds', () => {
    expect(splitRemaining(35 * DAY + 18 * HOUR)).toEqual({
      days: 35,
      hours: 18,
      minutes: 0,
      seconds: 0,
    })
  })

  it('carries the sub-day units correctly', () => {
    expect(splitRemaining(2 * DAY + 3 * HOUR + 4 * MINUTE + 5 * SECOND + 900)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    })
  })

  it('never reads below zero', () => {
    expect(splitRemaining(-1)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('reads zero exactly at the target', () => {
    expect(splitRemaining(0)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })
})
