import { MS_DAY, MS_HOUR, MS_MINUTE, pad, splitDuration, WEDDING_TARGET } from './countdown'

describe('the countdown maths', () => {
  it('splits a distance into days, hours, minutes and seconds', () => {
    const target = 1_000_000_000_000
    const distance = 10 * MS_DAY + 5 * MS_HOUR + MS_MINUTE + 5 * 1000

    expect(splitDuration(target, target - distance)).toEqual({
      days: 10,
      hours: 5,
      minutes: 1,
      seconds: 5,
    })
  })

  it('rests at zero once the moment has passed', () => {
    expect(splitDuration(1000, 5000)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('prints every part as two digits', () => {
    expect(pad(7)).toBe('07')
    expect(pad(23)).toBe('23')
    expect(pad(0)).toBe('00')
  })

  it('counts down to the day the page is for', () => {
    expect(new Date(WEDDING_TARGET).toISOString()).toBe('2027-09-11T14:00:00.000Z')
  })
})
