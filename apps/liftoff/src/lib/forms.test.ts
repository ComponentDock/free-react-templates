import { describe, expect, it } from 'vitest'
import { contactSchema, fieldErrors } from './forms'

describe('contactSchema', () => {
  it('accepts a fully valid submission', () => {
    const result = contactSchema.safeParse({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      subject: 'Partnership',
      message: 'Hello there',
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty fields and an invalid email', () => {
    const result = contactSchema.safeParse({
      firstName: '',
      lastName: '',
      email: 'nope',
      subject: '',
      message: '',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = fieldErrors(result)
      expect(errors.firstName).toBe('Please enter your first name')
      expect(errors.lastName).toBe('Please enter your last name')
      expect(errors.email).toBe('Please enter a valid email')
      expect(errors.subject).toBe('Please enter a subject')
      expect(errors.message).toBe('Please enter a message')
    }
  })

  it('keeps the first error message per field', () => {
    const result = contactSchema.safeParse({
      firstName: '',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      subject: 'Topic',
      message: 'Body',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result)).toEqual({
        firstName: 'Please enter your first name',
      })
    }
  })
})
