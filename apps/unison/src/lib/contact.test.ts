import { describe, expect, it } from 'vitest'
import { hasErrors, validateContact, type ContactValues } from './contact'

const valid: ContactValues = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  subject: 'Partnership',
  message: 'Hello!',
}

describe('validateContact', () => {
  it('returns no errors for a valid submission', () => {
    expect(validateContact(valid)).toEqual({})
    expect(hasErrors(validateContact(valid))).toBe(false)
  })

  it('flags every missing field', () => {
    const errors = validateContact({
      firstName: '   ',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    })
    expect(errors.firstName).toBe('First name is required')
    expect(errors.lastName).toBe('Last name is required')
    expect(errors.email).toBe('Email is required')
    expect(errors.subject).toBe('Subject is required')
    expect(errors.message).toBe('Message is required')
    expect(hasErrors(errors)).toBe(true)
  })

  it('rejects malformed emails', () => {
    expect(validateContact({ ...valid, email: 'nope' }).email).toBe(
      'Please enter a valid email address',
    )
    expect(validateContact({ ...valid, email: 'a@b' }).email).toBe(
      'Please enter a valid email address',
    )
    expect(validateContact({ ...valid, email: 'ok@example.com' }).email).toBeUndefined()
  })
})
