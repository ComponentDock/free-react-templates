import { describe, expect, it } from 'vitest'
import {
  CARD_COUNT,
  COUNTDOWN_CONFIG,
  diffMask,
  pad,
  resolveTarget,
  splitDigits,
  type CountdownConfig,
} from './countdown'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

const ZERO_DIGITS = ['0', '0', '0', '0', '0', '0', '0', '0']
const NO_FLAGS = [false, false, false, false, false, false, false, false]

describe('countdown', () => {
  it('declares the design offset of eight cards and 35 days plus 18 hours', () => {
    expect(COUNTDOWN_CONFIG).toEqual({ days: 35, hours: 18 })
    expect(CARD_COUNT).toBe(8)
  })

  describe('pad', () => {
    it('zero-pads single digits to the default two-digit width', () => {
      expect(pad(0)).toBe('00')
      expect(pad(9)).toBe('09')
    })

    it('leaves values that already fill the width untouched', () => {
      expect(pad(35)).toBe('35')
      expect(pad(100)).toBe('100')
    })

    it('honours an explicit width', () => {
      expect(pad(5, 4)).toBe('0005')
    })
  })

  describe('resolveTarget', () => {
    it('counts to the given moment plus the configured days and hours', () => {
      expect(resolveTarget(COUNTDOWN_CONFIG, 0)).toBe(35 * DAY + 18 * HOUR)
    })

    it('accepts a custom offset', () => {
      const config: CountdownConfig = { days: 1, hours: 2 }

      expect(resolveTarget(config, 0)).toBe(DAY + 2 * HOUR)
    })

    it('defaults to the design offset counted from now', () => {
      const before = Date.now()
      const target = resolveTarget()

      expect(target).toBeGreaterThanOrEqual(before + 35 * DAY + 18 * HOUR)
      expect(target).toBeLessThanOrEqual(Date.now() + 35 * DAY + 18 * HOUR)
    })
  })

  describe('splitDigits', () => {
    it('renders the day pair first, then zero-padded hours, minutes and seconds', () => {
      expect(splitDigits(35 * DAY + 18 * HOUR)).toEqual(['3', '5', '1', '8', '0', '0', '0', '0'])
    })

    it('renders a part-way remainder', () => {
      expect(splitDigits(35 * DAY + 17 * HOUR + 59 * MINUTE + 59 * SECOND)).toEqual([
        '3',
        '5',
        '1',
        '7',
        '5',
        '9',
        '5',
        '9',
      ])
    })

    it('clamps anything below zero', () => {
      expect(splitDigits(-1)).toEqual(ZERO_DIGITS)
    })

    it('trims the frame from the left once the day pair outgrows two digits', () => {
      expect(splitDigits(123 * DAY + 4 * HOUR + 5 * MINUTE + 6 * SECOND)).toEqual([
        '2',
        '3',
        '0',
        '4',
        '0',
        '5',
        '0',
        '6',
      ])
    })
  })

  describe('diffMask', () => {
    it('flags only the cards whose digit moved', () => {
      const before = splitDigits(35 * DAY + 18 * HOUR)
      const after = splitDigits(35 * DAY + 18 * HOUR - SECOND)

      // the second that elapses rolls the hour pair, then both minutes and
      // seconds: five of the eight cards move, exactly like the design
      expect(diffMask(before, after)).toEqual([false, false, false, true, true, true, true, true])
    })

    it('flags nothing when two frames are identical', () => {
      const frame = splitDigits(35 * DAY)

      expect(diffMask(frame, frame)).toEqual(NO_FLAGS)
    })
  })
})
