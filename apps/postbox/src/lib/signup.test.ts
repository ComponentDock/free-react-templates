import { describe, expect, it } from 'vitest'
import { MESSAGES, validateEmail } from './signup'

describe('validateEmail', () => {
  it('asks for an address when the field is empty or blank', () => {
    expect(validateEmail('')).toBe(MESSAGES.missing)
    expect(validateEmail('   ')).toBe(MESSAGES.missing)
  })

  it('rejects anything the browser would also reject', () => {
    expect(validateEmail('not-an-email')).toBe(MESSAGES.invalid)
    expect(validateEmail('ada@')).toBe(MESSAGES.invalid)
    expect(validateEmail('ada example.com')).toBe(MESSAGES.invalid)
  })

  it('rejects a domain without a dot, which type=email accepts', () => {
    expect(validateEmail('nope@nope')).toBe(MESSAGES.invalid)
    expect(validateEmail('nope@nope.c')).toBe(MESSAGES.invalid)
  })

  it('accepts a deliverable address, ignoring padding', () => {
    expect(validateEmail('ada@example.com')).toBeNull()
    expect(validateEmail('  ada@example.co.uk  ')).toBeNull()
  })
})
