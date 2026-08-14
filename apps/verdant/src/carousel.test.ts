import { describe, expect, it } from 'vitest'
import { clampIndex, pagesFor, slideIndex } from './carousel'

describe('slideIndex', () => {
  it('advances forward and wraps', () => {
    expect(slideIndex(0, 4, 1)).toBe(1)
    expect(slideIndex(3, 4, 1)).toBe(0)
  })

  it('moves backward and wraps', () => {
    expect(slideIndex(0, 4, -1)).toBe(3)
    expect(slideIndex(3, 4, -1)).toBe(2)
  })

  it('handles empty collections and multi-step deltas', () => {
    expect(slideIndex(0, 0, 1)).toBe(0)
    expect(slideIndex(0, 2, 3)).toBe(1)
  })
})

describe('clampIndex', () => {
  it('normalizes indexes into range', () => {
    expect(clampIndex(5, 4)).toBe(1)
    expect(clampIndex(-1, 4)).toBe(3)
    expect(clampIndex(0, 0)).toBe(0)
  })
})

describe('pagesFor', () => {
  it('computes owl-style page positions', () => {
    expect(pagesFor(6, 3)).toBe(4)
    expect(pagesFor(4, 1)).toBe(4)
    expect(pagesFor(2, 2)).toBe(1)
    expect(pagesFor(0, 3)).toBe(0)
    expect(pagesFor(6, 0)).toBe(0)
  })
})
