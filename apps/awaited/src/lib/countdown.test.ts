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

  it('lists the four units days → hours → minutes → seconds', () => {
    expect(COUNTDOWN_UNITS.map((unit) => unit.key)).toEqual(['days', 'hours', 'minutes', 'seconds'])
    expect(COUNTDOWN_UNITS.map((unit) => unit.label)).toEqual([
      'Days',
      'Hours',
      'Minutes',
      'Seconds',
    ])
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
  it('adds the configured offset to the given moment', () => {
    expect(resolveTarget(COUNTDOWN_CONFIG, 0)).toBe(35 * DAY + 19 * HOUR)
    expect(resolveTarget({ days: 1, hours: 2 }, 1000)).toBe(1000 + DAY + 2 * HOUR)
  })

  it('clamps nothing: the offset is a plain sum of days and hours', () => {
    expect(resolveTarget({ days: 0, hours: 0 }, 0)).toBe(0)
  })
})

describe('splitRemaining', () => {
  it('splits a remainder into raw days plus padded hours, minutes and seconds', () => {
    expect(splitRemaining(35 * DAY + 19 * HOUR + 5 * MINUTE + 9 * SECOND)).toEqual({
      days: '35',
      hours: '19',
      minutes: '05',
      seconds: '09',
    })
  })

  it('floors the leftover milliseconds of the final second', () => {
    expect(splitRemaining(2 * DAY + 3 * HOUR + 4 * MINUTE + 5 * SECOND + 999)).toEqual({
      days: '2',
      hours: '03',
      minutes: '04',
      seconds: '05',
    })
  })

  it('clamps an elapsed target to zero instead of counting negative', () => {
    expect(splitRemaining(-1)).toEqual({
      days: '0',
      hours: '00',
      minutes: '00',
      seconds: '00',
    })
  })
})

describe('resolveTarget defaults', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('falls back to the design offset and to the current clock', () => {
    expect(resolveTarget()).toBe(Date.now() + 35 * DAY + 19 * HOUR)
    expect(resolveTarget({ days: 1, hours: 0 })).toBe(Date.now() + DAY)
  })
})
