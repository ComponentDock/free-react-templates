import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

const baseValues = {
  flightType: 'Roundtrip',
  flyingFrom: 'JFK',
  flyingTo: 'LAX',
  checkIn: '2026-08-10',
  checkOut: '2026-08-14',
  travelClass: 'Economy class',
  adults: '1',
  children: '0',
}

describe('validateBooking', () => {
  it('flags every missing required field (flyingFrom, flyingTo, checkIn, checkOut)', () => {
    const errors = validateBooking({
      ...baseValues,
      flyingFrom: '',
      flyingTo: '',
      checkIn: '',
      checkOut: '',
    })

    expect(errors.flyingFrom).toBe('Please enter your departure city or airport.')
    expect(errors.flyingTo).toBe('Please enter your arrival city or airport.')
    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBe('Please choose a check-out date.')
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateBooking({
      ...baseValues,
      checkIn: '2026-08-14',
      checkOut: '2026-08-10',
    })

    expect(errors.checkOut).toBe('Please choose a check-out date on or after your check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    const errors = validateBooking({
      ...baseValues,
      checkIn: '2026-08-10',
      checkOut: '2026-08-10',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid booking', () => {
    expect(validateBooking(baseValues)).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats flight type, route, dates, travel class and singular counts', () => {
    expect(formatSummary(baseValues)).toBe(
      'Roundtrip · JFK → LAX · Aug 10 – Aug 14, 2026 · Economy class · 1 adult · 0 children',
    )
  })

  it('uses plural adult and child labels', () => {
    expect(
      formatSummary({
        ...baseValues,
        adults: '2',
        children: '2',
      }),
    ).toBe('Roundtrip · JFK → LAX · Aug 10 – Aug 14, 2026 · Economy class · 2 adults · 2 children')
  })

  it('formats a single child as "1 child"', () => {
    expect(
      formatSummary({
        ...baseValues,
        children: '1',
      }),
    ).toBe('Roundtrip · JFK → LAX · Aug 10 – Aug 14, 2026 · Economy class · 1 adult · 1 child')
  })

  it('defaults an unselected flight type to Roundtrip', () => {
    expect(
      formatSummary({
        ...baseValues,
        flightType: '',
      }),
    ).toBe('Roundtrip · JFK → LAX · Aug 10 – Aug 14, 2026 · Economy class · 1 adult · 0 children')
  })
})
