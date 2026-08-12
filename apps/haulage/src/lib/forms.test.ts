import { describe, expect, it } from 'vitest'
import { contactSchema, fieldErrors, newsletterSchema, trackingSchema } from './forms'

describe('trackingSchema', () => {
  it('accepts a tracking number', () => {
    const result = trackingSchema.safeParse({ trackingNumber: 'ABC-12345' })
    expect(result.success).toBe(true)
  })

  it('rejects an empty tracking number with a message', () => {
    const result = trackingSchema.safeParse({ trackingNumber: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.trackingNumber?.[0]).toBe(
        'Please enter your tracking number',
      )
    }
  })
})

describe('contactSchema', () => {
  it('accepts a complete contact payload', () => {
    const result = contactSchema.safeParse({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      message: 'Hello',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing fields and an invalid email', () => {
    const result = contactSchema.safeParse({
      firstName: '',
      lastName: '',
      email: 'not-an-email',
      message: '',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      expect(errors.firstName?.[0]).toBe('Please enter your first name')
      expect(errors.lastName?.[0]).toBe('Please enter your last name')
      expect(errors.email?.[0]).toBe('Please enter a valid email')
      expect(errors.message?.[0]).toBe('Please write a message')
    }
  })
})

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    expect(newsletterSchema.safeParse({ email: 'reader@example.com' }).success).toBe(true)
  })

  it('rejects an empty and an invalid email', () => {
    const empty = newsletterSchema.safeParse({ email: '' })
    expect(empty.success).toBe(false)
    const invalid = newsletterSchema.safeParse({ email: 'nope' })
    expect(invalid.success).toBe(false)
  })
})

describe('fieldErrors', () => {
  it('maps each field to its first error message', () => {
    const result = contactSchema.safeParse({
      firstName: '',
      lastName: '',
      email: 'bad',
      message: '',
    })
    if (result.success) {
      throw new Error('expected failure')
    }
    expect(fieldErrors(result)).toEqual({
      firstName: 'Please enter your first name',
      lastName: 'Please enter your last name',
      email: 'Please enter a valid email',
      message: 'Please write a message',
    })
  })

  it('drops fields without errors', () => {
    const result = contactSchema.safeParse({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      message: '',
    })
    if (result.success) {
      throw new Error('expected failure')
    }
    expect(fieldErrors(result)).toEqual({ message: 'Please write a message' })
  })
})
