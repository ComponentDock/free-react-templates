import { describe, expect, it } from 'vitest'
import {
  COUNTDOWN_CONFIG,
  pad,
  resolveTarget,
  splitRemaining,
  type CountdownConfig,
} from './countdown'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

describe('countdown', () => {
  it('declares the design offset of 35 days plus 18 hours', () => {
    expect(COUNTDOWN_CONFIG).toEqual({ days: 35, hours: 18 })
  })

  describe('pad', () => {
    it('zero-pads single digits to two digits', () => {
      expect(pad(0)).toBe('00')
      expect(pad(9)).toBe('09')
    })

    it('leaves values that already fill two digits untouched', () => {
      expect(pad(10)).toBe('10')
      expect(pad(59)).toBe('59')
    })
  })

  describe('resolveTarget', () => {
    it('defaults to the design offset counted from now', () => {
      const before = Date.now()
      const target = resolveTarget()

      expect(target).toBeGreaterThanOrEqual(before + 35 * DAY + 18 * HOUR)
      expect(target).toBeLessThanOrEqual(Date.now() + 35 * DAY + 18 * HOUR)
    })

    it('accepts a custom offset and clock', () => {
      const config: CountdownConfig = { days: 1, hours: 2 }

      expect(resolveTarget(config, 0)).toBe(DAY + 2 * HOUR)
    })
  })

  describe('splitRemaining', () => {
    it('splits the opening remainder into 35 days, 18 hours and empty minutes/seconds', () => {
      expect(splitRemaining(35 * DAY + 18 * HOUR)).toEqual({
        days: 35,
        hours: 18,
        minutes: 0,
        seconds: 0,
      })
    })

    it('splits a part-way remainder', () => {
      expect(splitRemaining(35 * DAY + 17 * HOUR + 59 * MINUTE + 59 * SECOND)).toEqual({
        days: 35,
        hours: 17,
        minutes: 59,
        seconds: 59,
      })
    })

    it('clamps anything below zero', () => {
      expect(splitRemaining(-1)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    })

    it('keeps counting days past two digits without padding', () => {
      expect(splitRemaining(123 * DAY)).toEqual({
        days: 123,
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
    })
  })
})
