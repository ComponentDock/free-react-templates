import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

describe('validateBooking', () => {
  it('flags every missing required field (check-in, check-out)', () => {
    const errors = validateBooking({
      checkIn: '',
      checkOut: '',
      guests: '1',
      kids: '0',
    })

    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBe('Please choose a check-out date.')
  })

  it('short-circuits the date-order check when check-in is missing but check-out is set', () => {
    const errors = validateBooking({
      checkIn: '',
      checkOut: '2026-08-13',
      guests: '1',
      kids: '0',
    })

    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBeUndefined()
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateBooking({
      checkIn: '2026-08-13',
      checkOut: '2026-08-10',
      guests: '2',
      kids: '1',
    })

    expect(errors.checkOut).toBe('Please choose a check-out date on or after your check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    const errors = validateBooking({
      checkIn: '2026-08-10',
      checkOut: '2026-08-10',
      guests: '2',
      kids: '1',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid booking', () => {
    const errors = validateBooking({
      checkIn: '2026-08-10',
      checkOut: '2026-08-13',
      guests: '2',
      kids: '1',
    })

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats human-readable dates with plural guests and kids counts', () => {
    expect(
      formatSummary({
        checkIn: '2026-08-10',
        checkOut: '2026-08-13',
        guests: '2',
        kids: '1',
      }),
    ).toBe('Aug 10 → Aug 13, 2026 · 2 Guests · 1 Kid')
  })

  it('uses the singular labels for one guest and one kid', () => {
    expect(
      formatSummary({
        checkIn: '2026-08-10',
        checkOut: '2026-08-11',
        guests: '1',
        kids: '1',
      }),
    ).toBe('Aug 10 → Aug 11, 2026 · 1 Guest · 1 Kid')
  })

  it('pluralizes zero kids', () => {
    expect(
      formatSummary({
        checkIn: '2026-08-10',
        checkOut: '2026-08-11',
        guests: '2',
        kids: '0',
      }),
    ).toBe('Aug 10 → Aug 11, 2026 · 2 Guests · 0 Kids')
  })
})
