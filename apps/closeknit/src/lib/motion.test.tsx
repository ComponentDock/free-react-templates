import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia, resetMatchMedia } from '../test/media'
import { prefersReducedMotion, useReducedMotion } from './motion'

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  resetMatchMedia()
})

describe('prefersReducedMotion', () => {
  it('reads the reduce query when the browser answers it', () => {
    mockMatchMedia(true)
    expect(prefersReducedMotion()).toBe(true)
  })

  it('is false when the visitor has no preference', () => {
    mockMatchMedia(false)
    expect(prefersReducedMotion()).toBe(false)
  })

  it('is false when the environment has no matchMedia at all', () => {
    vi.stubGlobal('matchMedia', undefined)
    expect(prefersReducedMotion()).toBe(false)
  })
})

describe('useReducedMotion', () => {
  it('exposes the preference read at mount', () => {
    mockMatchMedia(true)
    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(true)
  })

  it('exposes false when motion is allowed', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useReducedMotion())
    expect(result.current).toBe(false)
  })
})
