import { describe, expect, it } from 'vitest'
import { COUNTDOWN_CONFIG, pad, resolveTarget, splitRemaining } from './countdown'

describe('pad', () => {
  it('zero-pads single digits', () => {
    expect(pad(0)).toBe('00')
    expect(pad(9)).toBe('09')
  })

  it('leaves two-digit values alone', () => {
    expect(pad(10)).toBe('10')
    expect(pad(59)).toBe('59')
  })
})

describe('resolveTarget', () => {
  it('keeps the configured calendar date while it is still ahead', () => {
    const now = new Date('2026-06-01T00:00:00.000Z').getTime()
    const target = resolveTarget({ ...COUNTDOWN_CONFIG, years: 2030 }, now)

    expect(target).toBe(new Date(2030, -1, 35, 18, 0, 0).getTime())
    expect(target).toBeGreaterThan(now)
  })

  it('falls back to now plus the configured days and hours once the date passed', () => {
    const now = new Date('2026-06-01T00:00:00.000Z').getTime()
    const target = resolveTarget(COUNTDOWN_CONFIG, now)

    expect(target).toBe(now + 35 * 86_400_000 + 18 * 3_600_000)
  })
})

describe('splitRemaining', () => {
  it('splits a remainder into days, hours, minutes and seconds', () => {
    const day = 86_400_000

    expect(splitRemaining(2 * day + 3 * 3_600_000 + 4 * 60_000 + 5_000)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    })
  })

  it('never reads below zero', () => {
    expect(splitRemaining(-1)).toEqual({ days: -1, hours: -1, minutes: -1, seconds: -1 })
  })
})
