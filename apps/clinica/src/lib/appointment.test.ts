import { describe, expect, it } from 'vitest'
import { hasErrors, validateAppointment } from './appointment'

describe('validateAppointment', () => {
  const valid = {
    name: 'Jane Doe',
    phone: '01654.066.456',
    doctor: 'saiful islam',
    email: 'jane@example.com',
    message: 'I would like to book a checkup.',
  }

  it('returns no errors for a fully valid submission', () => {
    expect(validateAppointment(valid)).toEqual({})
    expect(hasErrors(validateAppointment(valid))).toBe(false)
  })

  it('flags every missing field', () => {
    const errors = validateAppointment({
      name: '   ',
      phone: '',
      doctor: '',
      email: '',
      message: '',
    })
    expect(errors.name).toBe('Name is required')
    expect(errors.phone).toBe('Phone is required')
    expect(errors.doctor).toBe('Please choose a doctor')
    expect(errors.email).toBe('Email address is required')
    expect(errors.message).toBe('Message is required')
    expect(hasErrors(errors)).toBe(true)
  })

  it('rejects a malformed email', () => {
    const errors = validateAppointment({ ...valid, email: 'not-an-email' })
    expect(errors.email).toBe('Please enter a valid email address')
    expect(errors.name).toBeUndefined()
  })

  it('accepts an email with surrounding whitespace', () => {
    const errors = validateAppointment({ ...valid, email: '  jane@example.com  ' })
    expect(errors).toEqual({})
  })
})
