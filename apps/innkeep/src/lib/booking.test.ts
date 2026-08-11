import { describe, expect, it } from 'vitest'
import { formatSummary, toDayLabel, validateBooking } from './booking'

describe('validateBooking', () => {
  it('reports every missing required field', () => {
    const errors = validateBooking({
      name: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      adults: 1,
      children: 1,
    })

    expect(errors).toEqual({
      name: 'Please enter your name.',
      phone: 'Please enter your phone number.',
      checkIn: 'Please choose a check-in date.',
      checkOut: 'Please choose a check-out date.',
    })
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateBooking({
      name: 'Ada',
      phone: '123',
      checkIn: '2026-08-14',
      checkOut: '2026-08-10',
      adults: 1,
      children: 1,
    })

    expect(errors.checkOut).toBe('The check-out date must be on or after the check-in date.')
    expect(errors.name).toBeUndefined()
    expect(errors.checkIn).toBeUndefined()
  })

  it('accepts a check-out date equal to the check-in date', () => {
    const errors = validateBooking({
      name: 'Ada',
      phone: '123',
      checkIn: '2026-08-14',
      checkOut: '2026-08-14',
      adults: 2,
      children: 0,
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a complete booking', () => {
    const errors = validateBooking({
      name: 'Ada Lovelace',
      phone: '+1 555 0100',
      checkIn: '2026-08-10',
      checkOut: '2026-08-14',
      adults: 2,
      children: 1,
    })

    expect(errors).toEqual({})
  })
})

describe('toDayLabel', () => {
  it('formats an ISO date as "10 Aug 2026" (source dd M yyyy format)', () => {
    expect(toDayLabel('2026-08-10')).toBe('10 Aug 2026')
  })

  it('pads single-digit days without a leading zero', () => {
    expect(toDayLabel('2026-12-01')).toBe('1 Dec 2026')
  })
})

describe('formatSummary', () => {
  it('builds the summary with pluralized guest counts', () => {
    const summary = formatSummary({
      name: 'Ada Lovelace',
      phone: '+1 555 0100',
      checkIn: '2026-08-10',
      checkOut: '2026-08-14',
      adults: 2,
      children: 1,
    })

    expect(summary).toBe(
      'Room booked for Ada Lovelace: 10 Aug 2026 to 14 Aug 2026, 2 adults, 1 child',
    )
  })

  it('uses singular forms for one adult and one child', () => {
    const summary = formatSummary({
      name: 'Grace',
      phone: '42',
      checkIn: '2026-09-01',
      checkOut: '2026-09-03',
      adults: 1,
      children: 1,
    })

    expect(summary).toBe('Room booked for Grace: 1 Sep 2026 to 3 Sep 2026, 1 adult, 1 child')
  })
})
