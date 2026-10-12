import { describe, expect, it } from 'vitest'
import { MS_DAY, MS_HOUR, MS_MINUTE, MS_SECOND, pad, splitDuration, WEDDING_TARGET } from './countdown'

describe('splitDuration', () => {
  it('splits a remaining span into the four cells', () => {
    const span = MS_DAY * 2 + MS_HOUR * 3 + MS_MINUTE * 4 + MS_SECOND * 5

    expect(splitDuration(span, 0)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5 })
  })

  it('never counts past the day it is counting to', () => {
    expect(splitDuration(1000, 5000)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('counts to a fixed day', () => {
    expect(WEDDING_TARGET).toBe(Date.UTC(2028, 5, 17, 15, 0, 0))
  })
})

describe('pad', () => {
  it('prints every cell as two digits', () => {
    expect(pad(7)).toBe('07')
    expect(pad(460)).toBe('460')
  })
})
