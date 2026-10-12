import { describe, expect, it } from 'vitest'
import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND, WEDDING_TARGET, pad, splitDuration } from './countdown'

describe('splitDuration', () => {
  it('splits the remaining milliseconds into the four values the circles print', () => {
    const now = WEDDING_TARGET - 24 * MS_HOUR - 3 * MS_HOUR - 25 * MS_MINUTE - 9 * MS_SECOND

    expect(splitDuration(WEDDING_TARGET, now)).toEqual({
      days: 1,
      hours: 3,
      minutes: 25,
      seconds: 9,
    })
  })

  it('rolls a whole minute over into the next hour, as the design clock does', () => {
    expect(splitDuration(WEDDING_TARGET, WEDDING_TARGET - MS_MINUTE)).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    })
  })

  it('rests at zero once the hour has passed, never counting upwards', () => {
    expect(splitDuration(WEDDING_TARGET, WEDDING_TARGET + 5 * MS_DAY)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('keeps the millisecond and the second scales apart', () => {
    // Three days, five hours and seven seconds' worth of milliseconds, spread over four cells.
    const remaining = 3 * MS_DAY + 5 * MS_HOUR + 7 * MS_SECOND

    expect(splitDuration(WEDDING_TARGET, WEDDING_TARGET - remaining)).toEqual({
      days: 3,
      hours: 5,
      minutes: 0,
      seconds: 7,
    })
  })
})

describe('pad', () => {
  it('prints every figure two digits wide so the circles never shift', () => {
    expect(pad(9)).toBe('09')
    expect(pad(59)).toBe('59')
    expect(pad(120)).toBe('120')
  })
})
