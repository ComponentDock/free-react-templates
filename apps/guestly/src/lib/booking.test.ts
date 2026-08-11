import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

describe('validateBooking', () => {
  it('flags every missing required field (arrival, departure)', () => {
    const errors = validateBooking({
      arrival: '',
      departure: '',
      rooms: '1',
      adults: '1',
      kids: '0',
    })

    expect(errors.arrival).toBe('Please choose an arrival date.')
    expect(errors.departure).toBe('Please choose a departure date.')
  })

  it('blocks a departure date earlier than the arrival date', () => {
    const errors = validateBooking({
      arrival: '2026-08-13',
      departure: '2026-08-10',
      rooms: '1',
      adults: '1',
      kids: '0',
    })

    expect(errors.departure).toBe('Please choose a departure date on or after your arrival date.')
  })

  it('accepts a departure date on the same day as arrival', () => {
    const errors = validateBooking({
      arrival: '2026-08-10',
      departure: '2026-08-10',
      rooms: '2',
      adults: '2',
      kids: '1',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid reservation', () => {
    const errors = validateBooking({
      arrival: '2026-08-10',
      departure: '2026-08-13',
      rooms: '1',
      adults: '1',
      kids: '0',
    })

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats room, adult and kid counts with singular/plural labels', () => {
    expect(
      formatSummary({
        arrival: '2026-08-10',
        departure: '2026-08-13',
        rooms: '1',
        adults: '1',
        kids: '0',
      }),
    ).toBe('Arrival 2026-08-10 → Departure 2026-08-13 · 1 room · 1 adult · 0 kids')

    expect(
      formatSummary({
        arrival: '2026-08-10',
        departure: '2026-08-13',
        rooms: '2',
        adults: '2',
        kids: '1',
      }),
    ).toBe('Arrival 2026-08-10 → Departure 2026-08-13 · 2 rooms · 2 adults · 1 kid')

    expect(
      formatSummary({
        arrival: '2026-08-10',
        departure: '2026-08-13',
        rooms: '3',
        adults: '3',
        kids: '2',
      }),
    ).toBe('Arrival 2026-08-10 → Departure 2026-08-13 · 3 rooms · 3 adults · 2 kids')
  })
})
