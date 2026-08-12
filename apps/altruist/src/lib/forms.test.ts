import { describe, expect, it } from 'vitest'
import { donationSchema, fieldErrors, isValidAmount, newsletterSchema } from './forms'

describe('donationSchema', () => {
  it('accepts a non-empty amount', () => {
    const result = donationSchema.safeParse({ amount: '125.00' })
    expect(result.success).toBe(true)
  })

  it('rejects an empty amount with a message', () => {
    const result = donationSchema.safeParse({ amount: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).amount).toBe('Please enter a donation amount')
    }
  })
})

describe('isValidAmount', () => {
  it('accepts positive numbers', () => {
    expect(isValidAmount('125')).toBe(true)
    expect(isValidAmount('0.5')).toBe(true)
  })

  it('rejects zero, negatives, and non-numeric input', () => {
    expect(isValidAmount('0')).toBe(false)
    expect(isValidAmount('-5')).toBe(false)
    expect(isValidAmount('abc')).toBe(false)
    expect(isValidAmount('')).toBe(false)
  })
})

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    const result = newsletterSchema.safeParse({ email: 'ada@example.com' })
    expect(result.success).toBe(true)
  })

  it('rejects an empty email with a message', () => {
    const result = newsletterSchema.safeParse({ email: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter your email')
    }
  })

  it('rejects a malformed email with a message', () => {
    const result = newsletterSchema.safeParse({ email: 'not-an-email' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter a valid email')
    }
  })
})
