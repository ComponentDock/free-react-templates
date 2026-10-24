import { afterEach, describe, expect, it, vi } from 'vitest'
import { prefersReducedMotion } from './motion'

const original = window.matchMedia

afterEach(() => {
  vi.unstubAllGlobals()
  window.matchMedia = original
})

describe('prefersReducedMotion', () => {
  it('returns false when the environment has no media query support', () => {
    // @ts-expect-error - exercise the no-matchMedia path of older browsers/jsdom.
    window.matchMedia = undefined
    expect(prefersReducedMotion()).toBe(false)
  })

  it('returns false when the visitor has no motion preference', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false }) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(false)
  })

  it('returns true when the visitor asks for reduced motion', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia
    expect(prefersReducedMotion()).toBe(true)
  })
})
