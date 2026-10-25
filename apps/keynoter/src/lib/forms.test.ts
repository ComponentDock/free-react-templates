import { describe, expect, it } from 'vitest'
import { isEmail } from './forms'

describe('isEmail', () => {
  it('accepts a normal address, trimmed', () => {
    expect(isEmail('you@example.com')).toBe(true)
    expect(isEmail('  you@example.com  ')).toBe(true)
  })

  it('rejects an empty, space-bearing or dotless address', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail('you @example.com')).toBe(false)
    expect(isEmail('you@example')).toBe(false)
  })
})
