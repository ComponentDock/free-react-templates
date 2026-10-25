import { describe, expect, it } from 'vitest'
import { emailError, isEmail, requiredError } from '../forms'

describe('forms', () => {
  it('accepts a sane address and rejects the common shapes', () => {
    expect(isEmail('sam@company.com')).toBe(true)
    expect(isEmail('  sam@company.com  ')).toBe(true)
    expect(isEmail('sam@company')).toBe(false)
    expect(isEmail('sam company.com')).toBe(false)
    expect(isEmail('@company.com')).toBe(false)
  })

  it('reports an empty required value and passes a filled one', () => {
    expect(requiredError('')).toBe('This field is required')
    expect(requiredError('   ')).toBe('This field is required')
    expect(requiredError('Sam')).toBeUndefined()
  })

  it('separates the empty case from the malformed case for email', () => {
    expect(emailError('')).toBe('This field is required')
    expect(emailError('sam@company')).toBe('Please enter a valid email address')
    expect(emailError('sam@company.com')).toBeUndefined()
  })
})
