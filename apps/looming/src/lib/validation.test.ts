import { describe, expect, it } from 'vitest'
import { EMAIL_MESSAGE, EMAIL_PATTERN, emailError } from './validation'

describe('EMAIL_PATTERN', () => {
  it('accepts a well-formed address', () => {
    expect(EMAIL_PATTERN.test('ada@example.com')).toBe(true)
  })

  it('rejects an address without a dot, a domain or a tld', () => {
    expect(EMAIL_PATTERN.test('ada@example')).toBe(false)
    expect(EMAIL_PATTERN.test('ada@')).toBe(false)
    expect(EMAIL_PATTERN.test('ada@example.c')).toBe(false)
  })

  it('rejects whitespace inside the address', () => {
    expect(EMAIL_PATTERN.test('ada lovelace@example.com')).toBe(false)
    expect(EMAIL_PATTERN.test('ada@exa mple.com')).toBe(false)
  })
})

describe('emailError', () => {
  it('flags an empty field with the design’s single message', () => {
    expect(emailError('')).toBe(EMAIL_MESSAGE)
    expect(emailError('   ')).toBe(EMAIL_MESSAGE)
  })

  it('flags a malformed address with the same message', () => {
    expect(emailError('ada@example')).toBe(EMAIL_MESSAGE)
  })

  it('accepts a good address, ignoring the spaces around it', () => {
    expect(emailError('ada@example.com')).toBeNull()
    expect(emailError('  ada@example.com  ')).toBeNull()
  })
})

describe('message', () => {
  it('is the single line the field bubble carries', () => {
    expect(EMAIL_MESSAGE).toBe('Please enter a valid email address')
  })
})
