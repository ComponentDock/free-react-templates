import { afterEach, describe, expect, it, vi } from 'vitest'
import { prefersReducedMotion } from './prefers-reduced-motion'

describe('prefersReducedMotion', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('reports true when the visitor asked for reduced motion', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)

    expect(prefersReducedMotion()).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion: reduce)')
  })

  it('reports false when motion is allowed', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList)

    expect(prefersReducedMotion()).toBe(false)
  })
})
