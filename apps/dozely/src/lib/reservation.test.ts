import { describe, expect, it } from 'vitest'
import { formatSummary, validateReservation } from './reservation'

const baseValues = {
  destination: 'Maldives',
  checkIn: '2026-08-10',
  checkOut: '2026-08-14',
  rooms: '',
  adults: '',
  children: '',
  email: 'mail@example.com',
  phone: '+1 555 0100',
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
  it('formats destination, singular room/adult/child labels and dates', () => {
    expect(
      formatSummary({
        ...baseValues,
        rooms: '1',
        adults: '1',
        children: '1',
      }),
    ).toBe(
      'Maldives · 1 room, 1 adult, 1 child · Aug 10 – Aug 14, 2026 · mail@example.com · +1 555 0100',
    )
  })

  it('uses plural room/adult/child labels', () => {
    expect(
      formatSummary({
        ...baseValues,
        rooms: '2',
        adults: '2',
        children: '2',
      }),
    ).toBe(
      'Maldives · 2 rooms, 2 adults, 2 children · Aug 10 – Aug 14, 2026 · mail@example.com · +1 555 0100',
    )
  })

  it('defaults untouched room/adult/child selects to 1 room, 1 adult, 0 children', () => {
    expect(formatSummary(baseValues)).toBe(
      'Maldives · 1 room, 1 adult, 0 children · Aug 10 – Aug 14, 2026 · mail@example.com · +1 555 0100',
    )
  })

  it('omits the contact segment when both email and phone are empty', () => {
    expect(
      formatSummary({
        ...baseValues,
        email: '',
        phone: '',
      }),
    ).toBe('Maldives · 1 room, 1 adult, 0 children · Aug 10 – Aug 14, 2026')
  })
})
