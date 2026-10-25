import { describe, expect, it } from 'vitest'
import { emailError, isEmail, phoneError, requiredError } from '../forms'

describe('forms', () => {
  it('accepts a sane address and rejects the common shapes', () => {
    expect(isEmail('sam@example.com')).toBe(true)
    expect(isEmail('  sam@example.com  ')).toBe(true)
    expect(isEmail('sam@example')).toBe(false)
    expect(isEmail('sam example.com')).toBe(false)
    expect(isEmail('@example.com')).toBe(false)
  })

  it('reports an empty required value and passes a filled one', () => {
    expect(requiredError('')).toBe('This field is required')
    expect(requiredError('   ')).toBe('This field is required')
    expect(requiredError('Marta')).toBeUndefined()
  })

  it('counts a phone number by its digits, however it is spaced', () => {
    expect(phoneError('')).toBe('This field is required')
    expect(phoneError('   ')).toBe('This field is required')
    expect(phoneError('555-1301')).toBe('Please enter a phone number we can call')
    expect(phoneError('(555) 130-1300')).toBeUndefined()
    expect(phoneError('5551301300')).toBeUndefined()
  })

  it('separates the empty case from the malformed case for email', () => {
    expect(emailError('')).toBe('This field is required')
    expect(emailError('sam@example')).toBe('Please enter a valid email address')
    expect(emailError('sam@example.com')).toBeUndefined()
  })
})
