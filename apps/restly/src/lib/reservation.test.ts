import { describe, expect, it } from 'vitest'
import { formatSummary, validateReservation } from './reservation'

const baseValues = {
  destination: 'Downtown Dubai',
  guests: '1',
  children: '0',
  checkIn: '2026-08-10',
  checkOut: '2026-08-14',
}

describe('validateReservation', () => {
  it('flags every missing required field (destination, checkIn, checkOut)', () => {
    const errors = validateReservation({
      ...baseValues,
      destination: '',
      checkIn: '',
      checkOut: '',
    })

    expect(errors.destination).toBe('Please enter a destination.')
    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBe('Please choose a check-out date.')
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateReservation({
      ...baseValues,
      checkIn: '2026-08-14',
      checkOut: '2026-08-10',
    })

    expect(errors.checkOut).toBe('Please choose a check-out date on or after your check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    const errors = validateReservation({
      ...baseValues,
      checkIn: '2026-08-10',
      checkOut: '2026-08-10',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid reservation', () => {
    expect(validateReservation(baseValues)).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats destination, singular guest/child labels and dates', () => {
    expect(
      formatSummary({
        ...baseValues,
        guests: '1',
        children: '1',
      }),
    ).toBe('Downtown Dubai · 1 guest, 1 child · Aug 10 – Aug 14, 2026')
  })

  it('uses plural guest/child labels', () => {
    expect(
      formatSummary({
        ...baseValues,
        guests: '2',
        children: '2',
      }),
    ).toBe('Downtown Dubai · 2 guests, 2 children · Aug 10 – Aug 14, 2026')
  })
})
