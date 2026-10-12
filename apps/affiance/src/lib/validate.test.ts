import { describe, expect, it } from 'vitest'
import { isValidRsvp } from './validate'

describe('isValidRsvp', () => {
  it('accepts a name and a well-formed address', () => {
    expect(isValidRsvp('Rosalind', 'rosalind@example.com')).toBe(true)
  })

  it('ignores surrounding whitespace', () => {
    expect(isValidRsvp('  Elias  ', '  elias@example.com  ')).toBe(true)
  })

  it('rejects an empty name', () => {
    expect(isValidRsvp('   ', 'elias@example.com')).toBe(false)
  })

  it('rejects an address without an @', () => {
    expect(isValidRsvp('Elias', 'elias.example.com')).toBe(false)
  })

  it('rejects an address without a domain', () => {
    expect(isValidRsvp('Elias', 'elias@')).toBe(false)
  })

  it('rejects an address without a dot', () => {
    expect(isValidRsvp('Elias', 'elias@example')).toBe(false)
  })
})
