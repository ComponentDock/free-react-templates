import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

const valid = {
  name: 'Alex',
  email: 'alex@example.com',
  phone: '555-0100',
  rooms: '1',
  guests: '1 Person',
  checkIn: '2026-08-10',
  checkOut: '2026-08-13',
}

describe('validateBooking', () => {
  it('flags every missing required field (name, email, phone, dates)', () => {
    const errors = validateBooking({
      name: '',
      email: '',
      phone: '',
      rooms: '1',
      guests: '1 Person',
      checkIn: '',
      checkOut: '',
    })

    expect(errors.name).toBe('Please enter your name.')
    expect(errors.email).toBe('Please enter your email address.')
    expect(errors.phone).toBe('Please enter your phone number.')
    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBe('Please choose a check-out date.')
  })

  it('rejects an invalid email address', () => {
    const errors = validateBooking({ ...valid, email: 'not-an-email' })

    expect(errors.email).toBe('Please enter a valid email address.')
  })

  it('accepts whitespace-trimmed name, email and phone', () => {
    const errors = validateBooking({ ...valid, name: '  Alex  ', email: ' alex@example.com ' })

    expect(errors).toEqual({})
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateBooking({ ...valid, checkIn: '2026-08-13', checkOut: '2026-08-10' })

    expect(errors.checkOut).toBe('Please choose a check-out date on or after your check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    const errors = validateBooking({ ...valid, checkIn: '2026-08-10', checkOut: '2026-08-10' })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid reservation', () => {
    const errors = validateBooking(valid)

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats the name, short check-in date, year check-out date and counts', () => {
    expect(formatSummary({ ...valid, rooms: '1', guests: '1 Person' })).toBe(
      'Alex · Aug 10 → Aug 13, 2026 · 1 room · 1 Person',
    )

    expect(formatSummary({ ...valid, rooms: '2', guests: '2 People' })).toBe(
      'Alex · Aug 10 → Aug 13, 2026 · 2 rooms · 2 People',
    )

    expect(formatSummary({ ...valid, rooms: '3', guests: '3 People', checkIn: '2026-08-05' })).toBe(
      'Alex · Aug 5 → Aug 13, 2026 · 3 rooms · 3 People',
    )
  })
})
