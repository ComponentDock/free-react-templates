import { describe, expect, it } from 'vitest'
import { MS_DAY, MS_HOUR, MS_MINUTE, pad, splitDuration, WEDDING_TARGET } from './countdown'

describe('splitDuration', () => {
  it('splits a whole day run into days, hours, minutes and seconds', () => {
    expect(splitDuration(WEDDING_TARGET, WEDDING_TARGET - 2 * MS_DAY - 3 * MS_HOUR - 4 * MS_MINUTE - 5000)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    })
  })

  it('runs the remainder down each scale', () => {
    const parts = splitDuration(MS_DAY + MS_HOUR + MS_MINUTE + 1000, 0)

    expect(parts).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 1 })
  })

  it('rests at zero once the moment has passed', () => {
    expect(splitDuration(WEDDING_TARGET, WEDDING_TARGET + 60_000)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('pad', () => {
  it('prints every value two digits wide', () => {
    expect(pad(0)).toBe('00')
    expect(pad(9)).toBe('09')
    expect(pad(29)).toBe('29')
  })
})
