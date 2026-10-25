import { describe, expect, it, vi, afterEach } from 'vitest'
import { prefersReducedMotion } from './motion'

const original = window.matchMedia

function stubMatchMedia(value: unknown) {
  Object.defineProperty(window, 'matchMedia', { configurable: true, value })
}

afterEach(() => {
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: original })
})

describe('prefersReducedMotion', () => {
  it('is false when matchMedia is unavailable', () => {
    stubMatchMedia(undefined)
    expect(prefersReducedMotion()).toBe(false)
  })

  it('is true when the visitor asks for reduced motion', () => {
    stubMatchMedia(vi.fn().mockReturnValue({ matches: true }))
    expect(prefersReducedMotion()).toBe(true)
  })

  it('is false when the visitor allows motion', () => {
    stubMatchMedia(vi.fn().mockReturnValue({ matches: false }))
    expect(prefersReducedMotion()).toBe(false)
  })
})
