import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { COUNTDOWN_CONFIG, COUNTDOWN_UNITS, pad, resolveTarget, splitRemaining } from './countdown'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

describe('countdown config', () => {
  it('counts down 35 days and 19 hours, the offset the design runs', () => {
    expect(COUNTDOWN_CONFIG).toEqual({ days: 35, hours: 19 })
  })

  it('lists the four units days → hours → minutes → seconds with abbreviated labels', () => {
    expect(COUNTDOWN_UNITS.map((unit) => unit.key)).toEqual(['days', 'hours', 'minutes', 'seconds'])
    expect(COUNTDOWN_UNITS.map((unit) => unit.label)).toEqual(['Days', 'Hr', 'Min', 'Sec'])
  })
})

describe('pad', () => {
  it('zero-pads a value shorter than the width', () => {
    expect(pad(7)).toBe('07')
    expect(pad(0)).toBe('00')
  })

  it('leaves a value at or above the width untouched', () => {
    expect(pad(35)).toBe('35')
    expect(pad(120)).toBe('120')
  })

  it('honours an explicit width', () => {
    expect(pad(5, 3)).toBe('005')
    expect(pad(1234, 2)).toBe('1234')
  })
})

describe('resolveTarget', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('adds the configured offset to now by default', () => {
    expect(resolveTarget()).toBe(Date.now() + 35 * DAY + 19 * HOUR)
  })

  it('honours an explicit config and reference moment', () => {
    expect(resolveTarget({ days: 1, hours: 2 }, 0)).toBe(DAY + 2 * HOUR)
  })
})

describe('splitRemaining', () => {
  it('splits a remainder into raw days and padded hours, minutes and seconds', () => {
    expect(splitRemaining(35 * DAY + 19 * HOUR + 5 * MINUTE + 9 * SECOND)).toEqual({
      days: '35',
      hours: '19',
      minutes: '05',
      seconds: '09',
    })
  })

  it('clamps an elapsed remainder to zero rather than going negative', () => {
    expect(splitRemaining(-5 * SECOND)).toEqual({
      days: '0',
      hours: '00',
      minutes: '00',
      seconds: '00',
    })
  })

  it('rolls the units over rather than carrying 24 hours or 60 minutes', () => {
    expect(splitRemaining(DAY + 25 * HOUR + 61 * MINUTE)).toEqual({
      days: '2',
      hours: '02',
      minutes: '01',
      seconds: '00',
    })
  })
})
