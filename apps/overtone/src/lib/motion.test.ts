import { afterEach, describe, expect, it, vi } from 'vitest'
import { prefersReducedMotion } from './motion'
import { installMatchMedia } from '../test/match-media'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('prefersReducedMotion', () => {
  it('is true when the user asked for reduced motion', () => {
    const media = installMatchMedia({ reduce: true })
    expect(prefersReducedMotion()).toBe(true)
    media.restore()
  })

  it('is false when the query does not match', () => {
    const media = installMatchMedia({ reduce: false })
    expect(prefersReducedMotion()).toBe(false)
    media.restore()
  })

  it('is false when the engine has no matchMedia at all', () => {
    vi.stubGlobal('matchMedia', undefined)
    expect(prefersReducedMotion()).toBe(false)
  })
})
