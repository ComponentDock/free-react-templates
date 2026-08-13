import { describe, expect, it } from 'vitest'
import { hasErrors, validateContact } from './contact'

const valid = {
  firstName: 'Ben',
  lastName: 'Carson',
  email: 'ben@vitae.dev',
  subject: 'Hiring',
  message: 'Hello from the other side.',
}

describe('validateContact', () => {
  it('returns no errors for valid values', () => {
    expect(validateContact(valid)).toEqual({})
  })

  it('flags every missing field', () => {
    const errors = validateContact({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    })
    expect(errors.firstName).toBe('First name is required')
    expect(errors.lastName).toBe('Last name is required')
    expect(errors.email).toBe('Email address is required')
    expect(errors.subject).toBe('Subject is required')
    expect(errors.message).toBe('Message is required')
  })

  it('flags whitespace-only fields as missing', () => {
    const errors = validateContact({
      firstName: '   ',
      lastName: '   ',
      email: '   ',
      subject: '   ',
      message: '   ',
    })
    expect(errors.firstName).toBe('First name is required')
    expect(errors.email).toBe('Email address is required')
  })

  it('rejects a malformed email but trims valid ones', () => {
    expect(validateContact({ ...valid, email: 'not-an-email' }).email).toBe(
      'Please enter a valid email address',
    )
    expect(validateContact({ ...valid, email: ' ben@vitae.dev ' })).toEqual({})
  })
})

describe('hasErrors', () => {
  it('returns false for an empty error map', () => {
    expect(hasErrors({})).toBe(false)
  })

  it('returns true when any field has an error', () => {
    expect(hasErrors({ email: 'Please enter a valid email address' })).toBe(true)
  })
})
