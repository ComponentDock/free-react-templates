import { describe, expect, it } from 'vitest'
import { isEmail } from './forms'

describe('isEmail', () => {
  it('accepts a plain address', () => {
    expect(isEmail('coach@brawn.example')).toBe(true)
  })

  it('ignores the surrounding whitespace', () => {
    expect(isEmail('  coach@brawn.example  ')).toBe(true)
  })

  it('rejects an empty value, a missing @, a missing dot and an inner space', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail('coach.brawn.example')).toBe(false)
    expect(isEmail('coach@brawn')).toBe(false)
    expect(isEmail('coach smith@brawn.example')).toBe(false)
  })
})
