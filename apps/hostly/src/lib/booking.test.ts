import { describe, expect, it } from 'vitest'
import { formatSummary, validateBooking } from './booking'

describe('validateBooking', () => {
  it('flags every missing required field (check-in, check-out, room type)', () => {
    const errors = validateBooking({
      checkIn: '',
      checkOut: '',
      adults: '1',
      children: '0',
      roomType: '',
    })

    expect(errors.checkIn).toBe('Please choose a check-in date.')
    expect(errors.checkOut).toBe('Please choose a check-out date.')
    expect(errors.roomType).toBe('Please select a room type.')
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const errors = validateBooking({
      checkIn: '2026-08-13',
      checkOut: '2026-08-10',
      adults: '1',
      children: '0',
      roomType: 'Private Room (1 to 2 People)',
    })

    expect(errors.checkOut).toBe('Please choose a check-out date on or after your check-in date.')
  })

  it('accepts a check-out date on the same day as check-in', () => {
    const errors = validateBooking({
      checkIn: '2026-08-10',
      checkOut: '2026-08-10',
      adults: '1',
      children: '0',
      roomType: 'Private Room (1 to 2 People)',
    })

    expect(errors).toEqual({})
  })

  it('returns no errors for a fully valid reservation', () => {
    const errors = validateBooking({
      checkIn: '2026-08-10',
      checkOut: '2026-08-13',
      adults: '2',
      children: '1',
      roomType: 'Family Room (1 to 4 People)',
    })

    expect(errors).toEqual({})
  })
})

describe('formatSummary', () => {
  it('formats adults and children counts with singular/plural labels', () => {
    expect(
      formatSummary({
        checkIn: '2026-08-10',
        checkOut: '2026-08-13',
        adults: '1',
        children: '0',
        roomType: 'Private Room (1 to 2 People)',
      }),
    ).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 1 adult · 0 children · Private Room (1 to 2 People)',
    )

    expect(
      formatSummary({
        checkIn: '2026-08-10',
        checkOut: '2026-08-13',
        adults: '2',
        children: '1',
        roomType: 'Family Room (1 to 4 People)',
      }),
    ).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 2 adults · 1 child · Family Room (1 to 4 People)',
    )

    expect(
      formatSummary({
        checkIn: '2026-08-10',
        checkOut: '2026-08-13',
        adults: '3',
        children: '2',
        roomType: 'Private Room (1 to 2 People)',
      }),
    ).toBe(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 3 adults · 2 children · Private Room (1 to 2 People)',
    )
  })
})
