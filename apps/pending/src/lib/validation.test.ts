import { describe, expect, it } from 'vitest'
import { EMAIL_MESSAGE, EMAIL_PATTERN, emailError } from './validation'

describe('emailError', () => {
  it('accepts an address with a local part, a domain and a two-letter-plus TLD', () => {
    expect(emailError('ada@example.com')).toBeNull()
    expect(emailError('ada.lovelace+notes@sub.example.co.uk')).toBeNull()
  })

  it('trims the value first, so surrounding spaces never fail a good address', () => {
    expect(emailError('  ada@example.com  ')).toBeNull()
  })

  it('rejects an empty or whitespace-only value', () => {
    expect(emailError('')).toBe(EMAIL_MESSAGE)
    expect(emailError('   ')).toBe(EMAIL_MESSAGE)
  })

  it('rejects a malformed address with the same single line', () => {
    expect(emailError('ada@example')).toBe(EMAIL_MESSAGE)
    expect(emailError('ada@.com')).toBe(EMAIL_MESSAGE)
    expect(emailError('ada example@site.com')).toBe(EMAIL_MESSAGE)
    expect(emailError('ada@example.c')).toBe(EMAIL_MESSAGE)
  })

  it('exposes the pattern the design itself uses', () => {
    expect(EMAIL_PATTERN.source).toBe('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')
  })
})
