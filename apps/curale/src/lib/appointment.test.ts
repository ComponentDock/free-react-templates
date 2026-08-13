import { describe, expect, it } from 'vitest'
import { isValidAppointment, validateAppointment } from './appointment'

describe('validateAppointment', () => {
  const valid = { name: 'Jane Doe', email: 'jane@example.com', date: '2026-09-01', message: '' }

  it('returns no errors for a fully valid appointment', () => {
    expect(validateAppointment(valid)).toEqual({})
  })

  it('flags a missing name', () => {
    expect(validateAppointment({ ...valid, name: '   ' })).toEqual({ name: 'Name is required' })
  })

  it('flags a missing email', () => {
    expect(validateAppointment({ ...valid, email: '' })).toEqual({ email: 'Email is required' })
  })

  it('flags a malformed email', () => {
    expect(validateAppointment({ ...valid, email: 'nope' })).toEqual({
      email: 'Enter a valid email address',
    })
  })

  it('flags a missing date', () => {
    expect(validateAppointment({ ...valid, date: '' })).toEqual({ date: 'Date is required' })
  })

  it('returns all errors at once when every field is empty', () => {
    const errors = validateAppointment({ name: '', email: '', date: '', message: '' })
    expect(errors).toEqual({
      name: 'Name is required',
      email: 'Email is required',
      date: 'Date is required',
    })
  })
})

describe('isValidAppointment', () => {
  it('is true for valid values and false otherwise', () => {
    expect(
      isValidAppointment({ name: 'A', email: 'a@b.co', date: '2026-01-01', message: '' }),
    ).toBe(true)
    expect(isValidAppointment({ name: '', email: 'a@b.co', date: '2026-01-01', message: '' })).toBe(
      false,
    )
  })
})
