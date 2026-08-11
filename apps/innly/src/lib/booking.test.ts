import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking, type BookingValues } from './booking'

const complete: BookingValues = {
  checkIn: '2026-08-10',
  checkOut: '2026-08-13',
  rooms: '1',
  adults: '2',
  children: '0',
}

describe('validateBooking', () => {
  it('flags every missing field when the form is empty', () => {
    const errors = validateBooking({
      checkIn: '',
      checkOut: '',
      rooms: '',
      adults: '',
      children: '',
    })

    expect(errors).toEqual({
      checkIn: 'Please choose a check-in date.',
      checkOut: 'Please choose a check-out date.',
      rooms: 'Please select the number of rooms.',
      adults: 'Please select the number of adults.',
      children: 'Please select the number of children.',
    })
  })

  it('returns no errors for a complete booking', () => {
    expect(validateBooking(complete)).toEqual({})
  })

  it('rejects a check-out date earlier than check-in', () => {
    const errors = validateBooking({ ...complete, checkOut: '2026-08-09' })

    expect(errors).toEqual({
      checkOut: 'Please choose a check-out date on or after your check-in date.',
    })
  })

  it('accepts a check-out date equal to check-in', () => {
    expect(validateBooking({ ...complete, checkOut: '2026-08-10' })).toEqual({})
  })

  it('does not compare dates when check-in is missing', () => {
    const errors = validateBooking({ ...complete, checkIn: '', checkOut: '2026-08-09' })

    expect(errors.checkIn).toBeDefined()
    expect(errors.checkOut).toBeUndefined()
  })
})

describe('formatSummary', () => {
  it('uses singular labels for single rooms/adults and the child forms', () => {
    expect(formatSummary({ ...complete, rooms: '1', adults: '1', children: '1' })).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 1 room · 1 adult · 1 child',
    )
  })

  it('uses plural labels for multiple rooms/adults/children', () => {
    expect(formatSummary({ ...complete, rooms: '2', adults: '3', children: '2' })).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 2 rooms · 3 adults · 2 children',
    )
  })

  it('keeps the zero-children form', () => {
    expect(formatSummary(complete)).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 1 room · 2 adults · 0 children',
    )
  })
})
