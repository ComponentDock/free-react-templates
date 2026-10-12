import { describe, expect, it } from 'vitest'
import { isEmail } from './forms'

describe('isEmail', () => {
  it('accepts an address with a single @ and a dotted domain', () => {
    expect(isEmail('celebrant@example.com')).toBe(true)
    expect(isEmail('bookings.desk@example.co.uk')).toBe(true)
  })

  it('turns away an empty field, a missing domain and a stray space', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail('celebrant@')).toBe(false)
    expect(isEmail('celebrant@example')).toBe(false)
    expect(isEmail('two @example.com')).toBe(false)
  })
})
