import { describe, expect, it } from 'vitest'
import { validateNewsletter } from './newsletter'

describe('validateNewsletter', () => {
  it('returns null for a valid email', () => {
    expect(validateNewsletter('hello@example.com')).toBeNull()
  })

  it('accepts an email with surrounding whitespace', () => {
    expect(validateNewsletter('  hello@example.com  ')).toBeNull()
  })

  it('flags an empty email', () => {
    expect(validateNewsletter('')).toBe('Email address is required')
    expect(validateNewsletter('   ')).toBe('Email address is required')
  })

  it('flags a malformed email', () => {
    expect(validateNewsletter('nope')).toBe('Please enter a valid email address')
  })
})
