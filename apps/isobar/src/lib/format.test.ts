import { describe, expect, it } from 'vitest'
import { formatTemp } from './format'

describe('formatTemp', () => {
  it('prints a positive value as-is', () => {
    expect(formatTemp(23)).toBe('23')
    expect(formatTemp(0)).toBe('0')
  })

  it('prints negatives with the true minus sign (U+2212), not a hyphen', () => {
    expect(formatTemp(-2)).toBe('−2')
    expect(formatTemp(-2)).not.toContain('-')
    expect(formatTemp(-4)).toBe('−4')
  })
})
