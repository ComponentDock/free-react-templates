import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

describe('validateBooking', () => {
  it('flags every missing required field (departing, returning)', () => {
    const errors = validateBooking({
      flightType: 'Roundtrip',
      from: '',
      to: '',
      departing: '',
      returning: '',
      adults: '1',
      children: '0',
      travelClass: 'Economy class',
    })

    expect(errors.departing).toBe('Please choose a departing date.')
    expect(errors.returning).toBe('Please choose a returning date.')
  })

  it('blocks a returning date earlier than the departing date', () => {
    const errors = validateBooking({
      flightType: 'One way',
      from: 'JFK',
      to: 'LHR',
      departing: '2026-08-13',
      returning: '2026-08-10',
      adults: '1',
      children: '0',
      travelClass: 'Business class',
    })

    expect(errors.returning).toBe('Please choose a returning date on or after your departing date.')
  })

  it('accepts a returning date on the same day as departing', () => {
    const errors = validateBooking({
      flightType: 'Multi-City',
      from: 'CDG',
      to: 'NRT',
      departing: '2026-08-10',
      returning: '2026-08-10',
      adults: '2',
      children: '1',
      travelClass: 'First class',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid reservation', () => {
    const errors = validateBooking({
      flightType: 'Roundtrip',
      from: 'JFK',
      to: 'LHR',
      departing: '2026-08-10',
      returning: '2026-08-13',
      adults: '1',
      children: '0',
      travelClass: 'Economy class',
    })

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats flight type, route, dates and counts with singular/plural labels', () => {
    expect(
      formatSummary({
        flightType: 'Roundtrip',
        from: 'JFK',
        to: 'LHR',
        departing: '2026-08-10',
        returning: '2026-08-13',
        adults: '1',
        children: '0',
        travelClass: 'Economy class',
      }),
    ).toBe('Roundtrip · JFK → LHR · 2026-08-10 → 2026-08-13 · 1 adult · 0 children · Economy class')

    expect(
      formatSummary({
        flightType: 'One way',
        from: 'JFK',
        to: 'LHR',
        departing: '2026-08-10',
        returning: '2026-08-13',
        adults: '2',
        children: '1',
        travelClass: 'Business class',
      }),
    ).toBe('One way · JFK → LHR · 2026-08-10 → 2026-08-13 · 2 adults · 1 child · Business class')

    expect(
      formatSummary({
        flightType: 'Multi-City',
        from: 'CDG',
        to: 'NRT',
        departing: '2026-08-10',
        returning: '2026-08-13',
        adults: '3',
        children: '2',
        travelClass: 'First class',
      }),
    ).toBe('Multi-City · CDG → NRT · 2026-08-10 → 2026-08-13 · 3 adults · 2 children · First class')
  })
})
