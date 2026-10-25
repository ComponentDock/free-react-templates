import { describe, expect, it } from 'vitest'
import {
  NEED_ERROR,
  PHONE_ERROR,
  REQUIRED,
  validateEmail,
  validateName,
  validateNeed,
  validatePhone,
} from './forms'

describe('validateName', () => {
  it('rejects an empty or whitespace-only name', () => {
    expect(validateName('')).toBe(REQUIRED)
    expect(validateName('   ')).toBe(REQUIRED)
  })

  it('accepts any real name', () => {
    expect(validateName('Alma R.')).toBeNull()
  })
})

describe('validatePhone', () => {
  it('rejects an empty value', () => {
    expect(validatePhone('')).toBe(REQUIRED)
  })

  it('rejects letters', () => {
    expect(validatePhone('abc')).toBe(PHONE_ERROR)
  })

  it('accepts a formatted number', () => {
    expect(validatePhone('(555) 110-1100')).toBeNull()
    expect(validatePhone('+1 555 110 1100')).toBeNull()
  })
})

describe('validateNeed', () => {
  it('rejects the placeholder option', () => {
    expect(validateNeed('')).toBe(NEED_ERROR)
  })

  it('accepts a chosen option', () => {
    expect(validateNeed('Routine pumping')).toBeNull()
  })
})

describe('validateEmail', () => {
  it('rejects an empty value', () => {
    expect(validateEmail('')).toBe(REQUIRED)
  })

  it('rejects a malformed address', () => {
    expect(validateEmail('not-an-email')).toBe('Enter an address in the form name@example.com.')
  })

  it('accepts a well-formed address', () => {
    expect(validateEmail(' neighbour@example.com ')).toBeNull()
  })
})
