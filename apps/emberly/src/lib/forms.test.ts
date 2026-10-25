import { describe, expect, it } from 'vitest'
import { EMAIL_ERROR, REQUIRED, validateEmail } from './forms'

describe('validateEmail', () => {
  it('rejects an empty or whitespace-only value', () => {
    expect(validateEmail('')).toBe(REQUIRED)
    expect(validateEmail('   ')).toBe(REQUIRED)
  })

  it('rejects a malformed address', () => {
    expect(validateEmail('not-an-email')).toBe(EMAIL_ERROR)
    expect(validateEmail('you@example')).toBe(EMAIL_ERROR)
  })

  it('accepts a well-formed address, trimmed', () => {
    expect(validateEmail(' neighbour@example.com ')).toBeNull()
  })
})
