import { afterEach, describe, expect, it, vi } from 'vitest'
import { prefersReducedMotion } from './prefers-reduced-motion'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('prefersReducedMotion', () => {
  it('reports true when the visitor asked for reduced motion', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: true, media: query }))

    expect(prefersReducedMotion()).toBe(true)
  })

  it('reports false when motion is allowed', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({ matches: false, media: query }))

    expect(prefersReducedMotion()).toBe(false)
  })
})
