import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

const baseValues = {
  flightType: 'Roundtrip',
  from: 'JFK',
  to: 'LHR',
  departing: '2026-08-10',
  returning: '2026-08-17',
  adults: '1',
  children: '0',
  travelClass: 'Economy class',
}

describe('validateBooking', () => {
  it('flags every missing required field (from, to, departing, returning)', () => {
    const errors = validateBooking({
      ...baseValues,
      from: '',
      to: '',
      departing: '',
      returning: '',
    })

    expect(errors.from).toBe('Please enter a departure city or airport.')
    expect(errors.to).toBe('Please enter an arrival city or airport.')
    expect(errors.departing).toBe('Please choose a departing date.')
    expect(errors.returning).toBe('Please choose a returning date.')
  })

  it('blocks a returning date earlier than the departing date', () => {
    const errors = validateBooking({
      ...baseValues,
      departing: '2026-08-13',
      returning: '2026-08-10',
    })

    expect(errors.returning).toBe('Please choose a returning date on or after your departing date.')
  })

  it('accepts a returning date on the same day as departing', () => {
    const errors = validateBooking({
      ...baseValues,
      departing: '2026-08-10',
      returning: '2026-08-10',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid reservation', () => {
    expect(validateBooking(baseValues)).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats route, formatted dates and singular passenger labels', () => {
    expect(
      formatSummary({
        ...baseValues,
        adults: '1',
        children: '1',
      }),
    ).toBe('JFK → LHR · Aug 10 – Aug 17, 2026 · 1 adult, 1 child · Economy class')
  })

  it('uses plural passenger labels and keeps the travel class', () => {
    expect(
      formatSummary({
        ...baseValues,
        flightType: 'Multi-City',
        from: 'CDG',
        to: 'NRT',
        adults: '2',
        children: '2',
        travelClass: 'First class',
      }),
    ).toBe('CDG → NRT · Aug 10 – Aug 17, 2026 · 2 adults, 2 children · First class')
  })
})
