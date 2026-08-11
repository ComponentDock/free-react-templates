import { describe, expect, it } from 'vitest'
import { formatSummary, isValidPhone, validateBooking, type BookingValues } from './booking'

const valid: BookingValues = {
  name: 'Jane Doe',
  phone: '555-010-9988',
  pickup: 'Downtown',
  destination: 'Airport',
  passengers: '2',
  date: '2026-08-10',
  time: '09:30',
}

describe('isValidPhone', () => {
  it('accepts formatted phone numbers', () => {
    expect(isValidPhone('555-010-9988')).toBe(true)
    expect(isValidPhone('+1 (555) 010 9988')).toBe(true)
    expect(isValidPhone('555.010.9988')).toBe(true)
  })

  it('rejects numbers with fewer than 7 digits', () => {
    expect(isValidPhone('12345')).toBe(false)
    expect(isValidPhone('... ...')).toBe(false)
  })

  it('rejects non-phone characters', () => {
    expect(isValidPhone('1234567a')).toBe(false)
  })
})

describe('validateBooking', () => {
  it('returns an error for every missing required field', () => {
    const errors = validateBooking({
      ...valid,
      name: '',
      phone: '',
      pickup: '',
      destination: '',
      passengers: '',
      date: '',
      time: '',
    })

    expect(errors).toEqual({
      name: 'Please enter your name.',
      phone: 'Please enter your phone number.',
      pickup: 'Please enter your pickup location.',
      destination: 'Please enter your destination location.',
      passengers: 'Please select the number of passengers.',
      date: 'Please choose a pickup date.',
      time: 'Please choose a pickup time.',
    })
  })

  it('rejects an invalid phone format', () => {
    const errors = validateBooking({ ...valid, phone: 'abc' })

    expect(errors).toEqual({ phone: 'Please enter a valid phone number.' })
  })

  it('returns no errors for a fully valid booking', () => {
    expect(validateBooking(valid)).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats the summary with plural passengers, date, time and arrow', () => {
    expect(formatSummary(valid)).toBe(
      '2 passengers · 2026-08-10 09:30 · Downtown → Airport · Jane Doe',
    )
  })

  it('uses the singular passenger label for one passenger', () => {
    expect(formatSummary({ ...valid, passengers: '1' })).toBe(
      '1 passenger · 2026-08-10 09:30 · Downtown → Airport · Jane Doe',
    )
  })
})
