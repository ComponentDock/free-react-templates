import { describe, expect, it } from 'vitest'
import { COUNTDOWN_OFFSET_MS, INITIAL_PARTS, pad, remainingMs, toParts } from './countdown'

describe('remainingMs', () => {
  it('returns the milliseconds left while the target is in the future', () => {
    expect(remainingMs(1_000, 400)).toBe(600)
  })

  it('clamps a passed target at zero instead of going negative', () => {
    expect(remainingMs(1_000, 4_000)).toBe(0)
  })
})

describe('pad', () => {
  it('zero-pads a single-digit unit to two characters', () => {
    expect(pad(7)).toBe('07')
  })

  it('leaves two-digit and longer units untouched', () => {
    expect(pad(35)).toBe('35')
    expect(pad(100)).toBe('100')
  })
})

describe('toParts', () => {
  it('splits a remainder into days, hours, minutes and seconds', () => {
    const ms = ((35 * 24 + 17) * 3_600 + 59 * 60 + 57) * 1_000
    expect(toParts(ms)).toEqual({ days: '35', hours: '17', minutes: '59', seconds: '57' })
  })

  it('rolls each unit over at its own boundary', () => {
    expect(toParts(86_400_000)).toEqual({ days: '01', hours: '00', minutes: '00', seconds: '00' })
  })

  it('floors sub-second remainders and reads zero once the target passed', () => {
    expect(toParts(1_999)).toEqual({ days: '00', hours: '00', minutes: '00', seconds: '01' })
    expect(toParts(0)).toEqual({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  })
})

describe('countdown constants', () => {
  it('targets 35 days and 18 hours from load time', () => {
    expect(COUNTDOWN_OFFSET_MS).toBe(35 * 86_400_000 + 18 * 3_600_000)
  })

  it('ships non-zero values for every unit before the first tick', () => {
    expect(INITIAL_PARTS).toEqual({ days: '35', hours: '17', minutes: '59', seconds: '57' })
    for (const unit of Object.values(INITIAL_PARTS)) {
      expect(Number(unit)).toBeGreaterThan(0)
    }
  })
})
