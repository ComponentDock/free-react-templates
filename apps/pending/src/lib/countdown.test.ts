import { describe, expect, it } from 'vitest'
import { MS_PER_DAY, MS_PER_HOUR, pad, remaining, START_DAYS, START_HOURS } from './countdown'

describe('countdown constants', () => {
  it('opens with the span the design always shows', () => {
    expect(START_DAYS).toBe(35)
    expect(START_HOURS).toBe(19)
    expect(MS_PER_DAY).toBe(86_400_000)
    expect(MS_PER_HOUR).toBe(3_600_000)
  })
})

describe('remaining', () => {
  it('splits a span into days, hours, minutes and seconds', () => {
    const span = 2 * MS_PER_DAY + 5 * MS_PER_HOUR + 31 * 60_000 + 9 * 1000

    expect(remaining(span)).toEqual({ days: 2, hours: 5, minutes: 31, seconds: 9 })
  })

  it('reads the opening span as 35 days 19 hours', () => {
    expect(remaining(START_DAYS * MS_PER_DAY + START_HOURS * MS_PER_HOUR)).toEqual({
      days: 35,
      hours: 19,
      minutes: 0,
      seconds: 0,
    })
  })

  it('never prints a negative value once the span has run out', () => {
    expect(remaining(0)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    expect(remaining(-5000)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('rolls whole days out of the hour field', () => {
    expect(remaining(48 * MS_PER_HOUR).hours).toBe(0)
    expect(remaining(48 * MS_PER_HOUR).days).toBe(2)
    expect(remaining(59 * 60_000 + 59_000).minutes).toBe(59)
  })
})

describe('pad', () => {
  it('zero-pads a single digit to two characters', () => {
    expect(pad(0)).toBe('00')
    expect(pad(7)).toBe('07')
    expect(pad(59)).toBe('59')
  })

  it('leaves two-digit values alone', () => {
    expect(pad(35)).toBe('35')
  })
})
