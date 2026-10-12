import { describe, expect, it } from 'vitest'
import {
  MS_DAY,
  MS_HOUR,
  MS_MINUTE,
  MS_SECOND,
  WEDDING_TARGET,
  pad,
  splitDuration,
} from './countdown'

describe('splitDuration', () => {
  it('splits what is left into days, hours, minutes and seconds', () => {
    const now = WEDDING_TARGET - (2 * MS_DAY + 3 * MS_HOUR + 4 * MS_MINUTE + 5 * MS_SECOND)

    expect(splitDuration(WEDDING_TARGET, now)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    })
  })

  it('rests at zero once the day has been and gone', () => {
    expect(splitDuration(WEDDING_TARGET, WEDDING_TARGET + MS_DAY)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('pad', () => {
  it('prints every value as two digits', () => {
    expect(pad(5)).toBe('05')
    expect(pad(42)).toBe('42')
  })
})
