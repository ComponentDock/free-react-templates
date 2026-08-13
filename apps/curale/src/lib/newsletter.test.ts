import { describe, expect, it } from 'vitest'
import { isValidEmail } from './newsletter'

describe('isValidEmail', () => {
  it('accepts a well-formed email', () => {
    expect(isValidEmail('jane@example.com')).toBe(true)
  })

  it('trims surrounding whitespace before validating', () => {
    expect(isValidEmail('  jane@example.com  ')).toBe(true)
  })

  it('rejects missing @ and missing domain', () => {
    expect(isValidEmail('jane')).toBe(false)
    expect(isValidEmail('jane@example')).toBe(false)
  })

  it('rejects an empty string', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('   ')).toBe(false)
  })
})
