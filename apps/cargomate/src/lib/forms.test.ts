import { describe, expect, it } from 'vitest'
import {
  fieldErrors,
  initialNewsletter,
  initialQuote,
  newsletterSchema,
  quoteSchema,
} from './forms'

describe('quoteSchema', () => {
  it('accepts a fully filled quote form', () => {
    const result = quoteSchema.safeParse({
      'First name': 'Jane',
      'Last name': 'Doe',
      'Email Address': 'jane@example.com',
      'Cargo Type': 'Container',
      'Country of Origin': 'USA',
      Destination: 'Rotterdam',
      Quantity: '2',
      Weight: '1200',
      Width: '40',
      Height: '40',
    })
    expect(result.success).toBe(true)
  })

  it('rejects an empty form with per-field messages', () => {
    const result = quoteSchema.safeParse(initialQuote)
    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = fieldErrors(result)
      expect(errors['First name']).toBe('Please enter your first name')
      expect(errors['Last name']).toBe('Please enter your last name')
      expect(errors['Email Address']).toBe('Please enter your email')
      expect(errors.Destination).toBe('Please enter the destination')
    }
  })

  it('rejects an invalid email address', () => {
    const result = quoteSchema.safeParse({
      ...initialQuote,
      'First name': 'Jane',
      'Last name': 'Doe',
      'Email Address': 'not-an-email',
      'Cargo Type': 'Container',
      'Country of Origin': 'USA',
      Destination: 'Rotterdam',
      Quantity: '2',
      Weight: '1200',
      Width: '40',
      Height: '40',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result)['Email Address']).toBe('Please enter a valid email')
    }
  })
})

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    expect(newsletterSchema.safeParse({ email: 'jane@example.com' }).success).toBe(true)
  })

  it('rejects an empty email', () => {
    const result = newsletterSchema.safeParse(initialNewsletter)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter your email')
    }
  })

  it('rejects a malformed email', () => {
    const result = newsletterSchema.safeParse({ email: 'nope' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter a valid email')
    }
  })
})
