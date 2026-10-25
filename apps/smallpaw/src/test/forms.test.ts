import { describe, expect, it } from 'vitest'
import { emailError, isEmail } from '../forms'

describe('forms', () => {
  it('accepts an address that looks like one', () => {
    expect(isEmail(' reception@smallpaw.example ')).toBe(true)
    expect(isEmail('a@b.co')).toBe(true)
  })

  it('rejects the shapes a browser would also reject', () => {
    expect(isEmail('reception')).toBe(false)
    expect(isEmail('reception@')).toBe(false)
    expect(isEmail('reception@smallpaw')).toBe(false)
    expect(isEmail('re ception@smallpaw.example')).toBe(false)
  })

  it('names the two failure modes differently', () => {
    expect(emailError('  ')).toBe('This field is required')
    expect(emailError('reception@')).toBe('Please enter a valid email address')
    expect(emailError('reception@smallpaw.example')).toBeUndefined()
  })
})
