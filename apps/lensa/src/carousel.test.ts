import { describe, expect, it } from 'vitest'
import { slideIndex } from './carousel'

describe('slideIndex', () => {
  it('returns 0 for an empty track', () => {
    expect(slideIndex(0, 0, 1)).toBe(0)
    expect(slideIndex(2, -3, 1)).toBe(0)
  })

  it('advances forward and wraps past the last slide', () => {
    expect(slideIndex(0, 3, 1)).toBe(1)
    expect(slideIndex(2, 3, 1)).toBe(0)
  })

  it('goes backward and wraps before the first slide', () => {
    expect(slideIndex(1, 3, -1)).toBe(0)
    expect(slideIndex(0, 3, -1)).toBe(2)
  })

  it('handles deltas larger than the total', () => {
    expect(slideIndex(0, 3, 4)).toBe(1)
    expect(slideIndex(2, 3, -5)).toBe(0)
  })
})
