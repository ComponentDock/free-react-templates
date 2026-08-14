import { describe, expect, it } from 'vitest'
import { bookingSchema, fieldErrors, newsletterSchema } from './forms'

describe('forms', () => {
  it('bookingSchema rejects empty fields with per-field messages', () => {
    const result = bookingSchema.safeParse({
      arrival: '',
      departure: '',
      adults: '',
      child: '',
      rooms: '',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = fieldErrors(result)
      expect(errors.arrival).toBe('Please choose an arrival date')
      expect(errors.departure).toBe('Please choose a departure date')
    }
  })

  it('bookingSchema rejects a departure before the arrival', () => {
    const result = bookingSchema.safeParse({
      arrival: '2026-08-20',
      departure: '2026-08-15',
      adults: 'Adult',
      child: 'Child',
      rooms: 'Room 01',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).departure).toBe(
        'Departure date must be on or after the arrival date',
      )
    }
  })

  it('bookingSchema accepts a valid booking', () => {
    const result = bookingSchema.safeParse({
      arrival: '2026-08-15',
      departure: '2026-08-20',
      adults: 'Adult',
      child: 'Child',
      rooms: 'Room 01',
    })
    expect(result.success).toBe(true)
  })

  it('newsletterSchema rejects an invalid email and accepts a valid one', () => {
    expect(newsletterSchema.safeParse({ email: 'nope' }).success).toBe(false)
    expect(newsletterSchema.safeParse({ email: 'guest@example.com' }).success).toBe(true)
  })
})
