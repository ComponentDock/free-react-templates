import { describe, expect, it, vi, afterEach } from 'vitest'
import { prefersReducedMotion } from './motion'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('prefersReducedMotion', () => {
  it('is false where matchMedia does not exist (jsdom)', () => {
    expect(prefersReducedMotion()).toBe(false)
  })

  it('is true when the visitor asked for reduced motion', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: query.includes('reduce') }))
    expect(prefersReducedMotion()).toBe(true)
  })

  it('is false when the media query does not match', () => {
    vi.stubGlobal('matchMedia', () => ({ matches: false }))
    expect(prefersReducedMotion()).toBe(false)
  })
})
