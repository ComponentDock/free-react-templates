import { describe, expect, it } from 'vitest'
import { COUNTDOWN_CONFIG, pad, resolveTarget, splitRemaining } from './countdown'

const NOW = new Date('2026-06-01T00:00:00.000Z').getTime()

describe('splitRemaining', () => {
  it('splits a remainder into day, hour, minute and second parts', () => {
    expect(splitRemaining(0)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    expect(splitRemaining(90_061_000)).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 1 })
  })
})

describe('resolveTarget', () => {
  it('keeps a configured date that is still ahead of now', () => {
    const config = { years: 2027, months: 6, days: 1, hours: 12, minutes: 0, seconds: 0 }

    expect(resolveTarget(config, NOW)).toBe(new Date(2027, 5, 1, 12, 0, 0).getTime())
  })

  it('counts from now plus the configured days and hours when the date has passed', () => {
    expect(resolveTarget(COUNTDOWN_CONFIG, NOW)).toBe(NOW + 35 * 86_400_000 + 18 * 3_600_000)
  })

  it('defaults to the current clock when no reference time is passed', () => {
    const target = resolveTarget(COUNTDOWN_CONFIG)

    expect(target).toBeGreaterThan(Date.now())
  })
})

describe('COUNTDOWN_CONFIG', () => {
  it('mirrors the design target of 35 days and 18 hours', () => {
    expect(COUNTDOWN_CONFIG).toEqual({
      years: 0,
      months: 0,
      days: 35,
      hours: 18,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('pad', () => {
  it('zero-pads single digits and leaves two-digit values alone', () => {
    expect(pad(0)).toBe('00')
    expect(pad(9)).toBe('09')
    expect(pad(59)).toBe('59')
  })
})
