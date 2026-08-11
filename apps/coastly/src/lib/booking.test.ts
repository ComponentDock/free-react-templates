import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

describe('validateBooking', () => {
  it('flags every missing required field (destination, check-in, check-out)', () => {
    const errors = validateBooking({
      destination: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
    })

    expect(errors.destination).toBe('Please enter a destination.')
    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBe('Please choose a check-out date.')
  })

  it('short-circuits the date-order check when check-in is missing but check-out is set', () => {
    const errors = validateBooking({
      destination: 'Paradise Resort',
      checkIn: '',
      checkOut: '2026-08-13',
      guests: '1',
    })

    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBeUndefined()
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateBooking({
      destination: 'Paradise Resort',
      checkIn: '2026-08-13',
      checkOut: '2026-08-10',
      guests: '1',
    })

    expect(errors.checkOut).toBe('Please choose a check-out date on or after your check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    const errors = validateBooking({
      destination: 'Paradise Resort',
      checkIn: '2026-08-10',
      checkOut: '2026-08-10',
      guests: '2',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid booking', () => {
    const errors = validateBooking({
      destination: 'Paradise Resort',
      checkIn: '2026-08-10',
      checkOut: '2026-08-13',
      guests: '2',
    })

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats the destination, human-readable dates and guest count', () => {
    expect(
      formatSummary({
        destination: 'Paradise Resort',
        checkIn: '2026-08-10',
        checkOut: '2026-08-13',
        guests: '2',
      }),
    ).toBe('Paradise Resort · Aug 10 → Aug 13, 2026 · 2 guests')
  })

  it('uses the singular guest label for one guest', () => {
    expect(
      formatSummary({
        destination: 'Paradise Resort',
        checkIn: '2026-08-10',
        checkOut: '2026-08-11',
        guests: '1',
      }),
    ).toBe('Paradise Resort · Aug 10 → Aug 11, 2026 · 1 guest')
  })
})
