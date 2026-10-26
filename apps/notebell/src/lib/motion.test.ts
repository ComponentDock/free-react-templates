import { afterEach, describe, expect, it, vi } from 'vitest'
import { prefersReducedMotion } from './motion'

const stub = (matches: boolean) =>
  vi.stubGlobal('matchMedia', () => ({ matches }) as unknown as typeof window.matchMedia)

describe('prefersReducedMotion', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('is true when the user asked for less motion', () => {
    stub(true)

    expect(prefersReducedMotion()).toBe(true)
  })

  it('is false when the user allows motion', () => {
    stub(false)

    expect(prefersReducedMotion()).toBe(false)
  })

  it('is false where the API does not exist', () => {
    vi.stubGlobal('matchMedia', undefined)

    expect(prefersReducedMotion()).toBe(false)
  })
})
