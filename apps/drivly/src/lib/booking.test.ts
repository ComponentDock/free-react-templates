import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

const valid = {
  name: 'Alex',
  email: 'alex@example.com',
  phone: '555-0100',
  pickup: 'Downtown',
  destination: 'Airport',
  pickupDate: '2026-08-10',
  hour: '10',
  min: '05',
  ampm: 'AM',
}

describe('validateBooking', () => {
  it('flags every missing required field (name, email, phone, pickup, destination, date)', () => {
    const errors = validateBooking({
      name: '',
      email: '',
      phone: '',
      pickup: '',
      destination: '',
      pickupDate: '',
      hour: '1',
      min: '05',
      ampm: 'AM',
    })

    expect(errors.name).toBe('Please enter your name.')
    expect(errors.email).toBe('Please enter your email address.')
    expect(errors.phone).toBe('Please enter your phone number.')
    expect(errors.pickup).toBe('Please enter your pickup location.')
    expect(errors.destination).toBe('Please enter your destination.')
    expect(errors.pickupDate).toBe('Please choose a pickup date.')
  })

  it('rejects an invalid email address', () => {
    const errors = validateBooking({ ...valid, email: 'not-an-email' })

    expect(errors.email).toBe('Please enter a valid email address.')
  })

  it('accepts whitespace-trimmed name, email, phone, pickup and destination', () => {
    const errors = validateBooking({
      ...valid,
      name: '  Alex  ',
      email: ' alex@example.com ',
      pickup: ' Downtown ',
      destination: ' Airport ',
    })

    expect(errors).toEqual({})
  })

  it('never validates the defaulted hour/min/AM-PM selects', () => {
    const errors = validateBooking(valid)

    expect(errors.hour).toBeUndefined()
    expect(errors.min).toBeUndefined()
    expect(errors.ampm).toBeUndefined()
  })

  it('returns no errors for a fully valid booking', () => {
    const errors = validateBooking(valid)

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats pickup → destination · date with year · time', () => {
    expect(formatSummary({ ...valid, hour: '10', min: '05', ampm: 'AM' })).toBe(
      'Downtown → Airport · Aug 10, 2026 · 10:05 AM',
    )

    expect(
      formatSummary({
        ...valid,
        pickup: 'Uptown',
        destination: 'Grand Central',
        pickupDate: '2026-08-05',
        hour: '11',
        min: '55',
        ampm: 'PM',
      }),
    ).toBe('Uptown → Grand Central · Aug 5, 2026 · 11:55 PM')
  })
})
