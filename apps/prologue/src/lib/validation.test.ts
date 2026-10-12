import { describe, expect, it } from 'vitest'
import { EMAIL_MESSAGE, EMAIL_PATTERN, emailError } from './validation'

describe('emailError', () => {
  it('rejects an empty value with the single requirement line', () => {
    expect(emailError('')).toBe(EMAIL_MESSAGE)
  })

  it('rejects a whitespace-only value', () => {
    expect(emailError('   ')).toBe(EMAIL_MESSAGE)
  })

  it('rejects an address with no top-level domain', () => {
    expect(emailError('ada@example')).toBe(EMAIL_MESSAGE)
  })

  it('rejects an address with whitespace inside it', () => {
    expect(emailError('ada@exa mple.com')).toBe(EMAIL_MESSAGE)
  })

  it('rejects an address with no local part', () => {
    expect(emailError('@example.com')).toBe(EMAIL_MESSAGE)
  })

  it('accepts a well-formed address', () => {
    expect(emailError('ada@example.com')).toBeNull()
  })

  it('ignores surrounding whitespace on a good address', () => {
    expect(emailError('  ada@example.com  ')).toBeNull()
  })
})

describe('EMAIL_PATTERN', () => {
  it('requires a local part, a domain and a two-character top-level domain', () => {
    expect(EMAIL_PATTERN.test('ada@example.com')).toBe(true)
    expect(EMAIL_PATTERN.test('ada@example.c')).toBe(false)
  })
})
