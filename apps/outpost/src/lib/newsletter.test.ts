import { describe, expect, it } from 'vitest'
import { validateEmail } from './newsletter'

describe('validateEmail', () => {
  it('accepts a trimmed well-formed address', () => {
    expect(validateEmail('  ada@example.com ')).toBeNull()
  })

  it('rejects an address without a domain or with whitespace inside', () => {
    expect(validateEmail('nope')).toBe('Please enter a valid email address')
    expect(validateEmail('ada lovelace@example.com')).toBe('Please enter a valid email address')
    expect(validateEmail('')).toBe('Please enter a valid email address')
  })
})
