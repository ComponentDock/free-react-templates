import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking, type BookingValues } from './booking'

const valid: BookingValues = {
  checkIn: '2026-08-10',
  checkOut: '2026-08-13',
  rooms: '1',
  adults: '2',
  children: '0',
}

describe('validateBooking', () => {
  it('returns an error for every missing required field', () => {
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

  it('rejects a check-out date before the check-in date', () => {
    const errors = validateBooking({ ...valid, checkIn: '2026-08-13', checkOut: '2026-08-10' })

    expect(errors).toEqual({ checkOut: 'Check-out cannot be before check-in.' })
  })

  it('does not flag check-out when only check-in is missing', () => {
    const errors = validateBooking({ ...valid, checkIn: '', checkOut: '2026-08-13' })

    expect(errors.checkOut).toBeUndefined()
    expect(errors.checkIn).toBe('Please choose a check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    expect(validateBooking({ ...valid, checkOut: '2026-08-10' })).toEqual({})
  })

  it('returns no errors for a fully valid booking', () => {
    expect(validateBooking(valid)).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats the summary with plural rooms, adults and children', () => {
    expect(formatSummary({ ...valid, rooms: '2', adults: '2', children: '1' })).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 2 rooms · 2 adults · 1 child',
    )
  })

  it('uses singular labels for one room, one adult and one child', () => {
    expect(formatSummary({ ...valid, adults: '1' })).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 1 room · 1 adult · 0 children',
    )
  })
})
