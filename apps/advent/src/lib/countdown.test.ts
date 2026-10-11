import { describe, expect, it } from 'vitest'
import {
  COUNTDOWN_CONFIG,
  pad,
  resolveTarget,
  splitRemaining,
  type CountdownConfig,
} from './countdown'

const DAY = 24 * 60 * 60 * 1000
const HOUR = 60 * 60 * 1000

describe('countdown', () => {
  it('declares the design target of 35 days and 18 hours', () => {
    expect(COUNTDOWN_CONFIG).toEqual({
      years: 0,
      months: 0,
      days: 35,
      hours: 18,
      minutes: 0,
      seconds: 0,
    })
  })

  describe('pad', () => {
    it('zero-pads single digits', () => {
      expect(pad(0)).toBe('00')
      expect(pad(9)).toBe('09')
    })

    it('keeps two-digit values untouched', () => {
      expect(pad(10)).toBe('10')
      expect(pad(59)).toBe('59')
    })
  })

  describe('resolveTarget', () => {
    it('counts to the configured calendar date while it is still ahead', () => {
      const config: CountdownConfig = {
        years: 2999,
        months: 1,
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }

      expect(resolveTarget(config, Date.now())).toBe(new Date(2999, 0, 1, 0, 0, 0).getTime())
    })

    it('falls back to now plus the configured days and hours when the date is past', () => {
      const now = 1_700_000_000_000

      expect(resolveTarget(COUNTDOWN_CONFIG, now)).toBe(now + 35 * DAY + 18 * HOUR)
    })
  })

  describe('splitRemaining', () => {
    it('splits a remainder into days, hours, minutes and seconds', () => {
      const remaining = 35 * DAY + 17 * HOUR + 59 * 60 * 1000 + 59 * 1000

      expect(splitRemaining(remaining)).toEqual({
        days: 35,
        hours: 17,
        minutes: 59,
        seconds: 59,
      })
    })

    it('clamps nothing below zero', () => {
      expect(splitRemaining(0)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    })
  })
})
