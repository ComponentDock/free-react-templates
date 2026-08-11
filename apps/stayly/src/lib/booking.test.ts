import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking, type BookingValues } from './booking'

const valid: BookingValues = {
  checkIn: '2026-08-10',
  checkOut: '2026-08-14',
  adults: '2',
  children: '1',
  email: 'guest@example.com',
  phone: '555-010-9988',
}

describe('validateBooking', () => {
  it('returns errors for every missing required field', () => {
    const errors = validateBooking({ ...valid, checkIn: '', checkOut: '', email: '', phone: '' })

    expect(errors).toEqual({
      checkIn: 'Please choose a check-in date.',
      checkOut: 'Please choose a check-out date.',
      email: 'Please enter your email.',
      phone: 'Please enter your phone number.',
    })
  })

  it('flags a check-out date earlier than check-in', () => {
    const errors = validateBooking({ ...valid, checkOut: '2026-08-09' })

    expect(errors).toEqual({ checkOut: 'Check-out must be on or after check-in.' })
  })

  it('accepts a check-out date equal to check-in', () => {
    const errors = validateBooking({ ...valid, checkOut: '2026-08-10' })

    expect(errors).toEqual({})
  })

  it('rejects an invalid email', () => {
    const errors = validateBooking({ ...valid, email: 'not-an-email' })

    expect(errors).toEqual({ email: 'Please enter a valid email address.' })
  })

  it('returns no errors for a fully valid booking', () => {
    expect(validateBooking(valid)).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats plural adult and child counts', () => {
    expect(formatSummary(valid)).toBe(
      '2 adults · 1 child · 2026-08-10 → 2026-08-14 · guest@example.com',
    )
  })

  it('uses singular labels for one adult and one child', () => {
    expect(
      formatSummary({ ...valid, adults: '1', children: '1' }).startsWith('1 adult · 1 child · '),
    ).toBe(true)
  })

  it('uses plural labels for zero and multiple children', () => {
    expect(formatSummary({ ...valid, children: '0' }).includes('0 children · ')).toBe(true)
    expect(formatSummary({ ...valid, children: '2' }).includes('2 children · ')).toBe(true)
  })
})
