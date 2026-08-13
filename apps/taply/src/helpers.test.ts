import { describe, expect, it } from 'vitest'
import { clampIndex, slideIndex } from './carousel'
import { phoneHref } from './data'

describe('carousel helpers', () => {
  it('wraps forward and backward within the total', () => {
    expect(slideIndex(0, 4, 1)).toBe(1)
    expect(slideIndex(3, 4, 1)).toBe(0)
    expect(slideIndex(0, 4, -1)).toBe(3)
    expect(slideIndex(2, 4, 2)).toBe(0)
  })

  it('handles degenerate totals', () => {
    expect(slideIndex(0, 0, 1)).toBe(0)
    expect(clampIndex(0, 0)).toBe(0)
    expect(clampIndex(-1, 3)).toBe(2)
    expect(clampIndex(5, 3)).toBe(2)
  })
})

describe('phoneHref', () => {
  it('builds a tel: href from a spaced display string', () => {
    expect(phoneHref('518-3636-2800')).toBe('tel:51836362800')
    expect(phoneHref('+1 829 2293 382')).toBe('tel:+18292293382')
  })
})
