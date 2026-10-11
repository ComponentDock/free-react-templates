import { describe, expect, it } from 'vitest'
import {
  EMPTY_BOOKING,
  hasErrors,
  validateBooking,
  validateEmail,
  type BookingValues,
} from './booking'

const VALID: BookingValues = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  arrival: '2026-11-02',
  departure: '2026-11-09',
  roomType: 'Room type 2',
  rooms: '2',
  adults: '2',
  childs: '1',
  message: 'A quiet room with a sea view, please.',
}

describe('validateBooking', () => {
  it('reports a message for every required field when the form is empty', () => {
    const errors = validateBooking(EMPTY_BOOKING)
    expect(errors.firstName).toBe('Please enter your first name')
    expect(errors.lastName).toBe('Please enter your last name')
    expect(errors.arrival).toBe('Please choose an arrival date')
    expect(errors.departure).toBe('Please choose a departure date')
    expect(errors.roomType).toBe('Please choose a room type')
    expect(errors.rooms).toBe('Please choose the number of rooms')
    expect(errors.adults).toBe('Please choose the number of adults')
    expect(errors.childs).toBe('Please choose the number of childs')
    expect(errors.message).toBe('Please enter your message')
    expect(hasErrors(errors)).toBe(true)
  })

  it('treats whitespace-only input as missing', () => {
    const errors = validateBooking({ ...VALID, firstName: '   ' })
    expect(errors.firstName).toBe('Please enter your first name')
  })

  it('returns no errors for fully valid values', () => {
    const errors = validateBooking(VALID)
    expect(errors).toEqual({})
    expect(hasErrors(errors)).toBe(false)
  })
})

describe('validateEmail', () => {
  it('rejects empty, malformed, and untrimmed-malformed addresses', () => {
    expect(validateEmail('')).toBe('Please enter a valid email address')
    expect(validateEmail('nope')).toBe('Please enter a valid email address')
    expect(validateEmail('nope@example')).toBe('Please enter a valid email address')
  })

  it('accepts a well-formed address, ignoring surrounding whitespace', () => {
    expect(validateEmail('  ada@example.com  ')).toBeNull()
  })
})
