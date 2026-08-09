import { describe, expect, it } from 'vitest'
import { formatSummary, validateReservation } from './reservation'

describe('validateReservation', () => {
  const valid = {
    destination: 'Lake Como',
    checkIn: '2026-08-10',
    checkOut: '2026-08-14',
    rooms: 1,
    adults: 2,
    children: 1,
  }

  it('returns no errors for a valid reservation', () => {
    expect(validateReservation(valid)).toEqual({})
  })

  it('flags a missing destination', () => {
    const errors = validateReservation({ ...valid, destination: '   ' })
    expect(errors.destination).toBe('Please enter a destination')
  })

  it('flags a missing check-in date', () => {
    const errors = validateReservation({ ...valid, checkIn: '' })
    expect(errors.checkIn).toBe('Please choose a check-in date')
  })

  it('flags a missing check-out date', () => {
    const errors = validateReservation({ ...valid, checkOut: '' })
    expect(errors.checkOut).toBe('Please choose a check-out date')
  })

  it('flags a check-out date before the check-in date', () => {
    const errors = validateReservation({ ...valid, checkOut: '2026-08-09' })
    expect(errors.checkOut).toBe('Check-out must be on or after check-in')
  })

  it('accepts a check-out date equal to the check-in date', () => {
    expect(validateReservation({ ...valid, checkOut: valid.checkIn })).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats guests, dates and destination', () => {
    expect(
      formatSummary({
        destination: 'Lake Como',
        checkIn: '2026-08-10',
        checkOut: '2026-08-14',
        rooms: 1,
        adults: 2,
        children: 1,
      }),
    ).toBe('2 adults, 1 child, 1 room · 2026-08-10 → 2026-08-14 · Lake Como')
  })

  it('uses plural nouns for multiple guests and rooms', () => {
    expect(
      formatSummary({
        destination: 'Barcelona',
        checkIn: '2026-10-01',
        checkOut: '2026-10-05',
        rooms: 2,
        adults: 3,
        children: 2,
      }),
    ).toBe('3 adults, 2 children, 2 rooms · 2026-10-01 → 2026-10-05 · Barcelona')
  })

  it('uses singular nouns for single guests and trims the destination', () => {
    expect(
      formatSummary({
        destination: '  Paris  ',
        checkIn: '2026-09-01',
        checkOut: '2026-09-02',
        rooms: 1,
        adults: 1,
        children: 0,
      }),
    ).toBe('1 adult, 0 children, 1 room · 2026-09-01 → 2026-09-02 · Paris')
  })
})
