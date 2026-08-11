import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking, type BookingValues } from './booking'

const validValues: BookingValues = {
  destination: 'EG. HAWAII',
  from: '2026-08-10',
  to: '2026-08-14',
  quantity: 2,
}

describe('validateBooking', () => {
  it('returns no errors for a complete booking', () => {
    expect(validateBooking(validValues)).toEqual({})
  })

  it('requires a destination', () => {
    const errors = validateBooking({ ...validValues, destination: '' })
    expect(errors.destination).toBe('Please enter a destination.')
  })

  it('requires a departure date', () => {
    const errors = validateBooking({ ...validValues, from: '' })
    expect(errors.from).toBe('Please choose a departure date.')
  })

  it('requires a return date', () => {
    const errors = validateBooking({ ...validValues, to: '' })
    expect(errors.to).toBe('Please choose a return date.')
  })

  it('blocks a return date earlier than the departure date', () => {
    const errors = validateBooking({ ...validValues, from: '2026-08-14', to: '2026-08-10' })
    expect(errors.to).toBe('The return date must be on or after the departure date.')
  })

  it('collects every missing required field at once', () => {
    const errors = validateBooking({ destination: '', from: '', to: '', quantity: 0 })
    expect(Object.keys(errors)).toEqual(['destination', 'from', 'to'])
  })
})

describe('formatSummary', () => {
  it('formats the full summary line with a plural guest count', () => {
    expect(formatSummary(validValues)).toBe(
      'Voyage to EG. HAWAII from Aug 10 to Aug 14, 2026 for 2 guests',
    )
  })

  it('singularizes one guest', () => {
    expect(formatSummary({ ...validValues, quantity: 1 })).toBe(
      'Voyage to EG. HAWAII from Aug 10 to Aug 14, 2026 for 1 guest',
    )
  })

  it('supports a zero guest count', () => {
    expect(formatSummary({ ...validValues, quantity: 0 })).toBe(
      'Voyage to EG. HAWAII from Aug 10 to Aug 14, 2026 for 0 guests',
    )
  })
})
