import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { mockNarrow, removeMatchMedia } from './test/match-media'
import { NARROW_QUERY, useNarrow } from './use-narrow'

describe('useNarrow', () => {
  it('answers the table breakpoint at mount', () => {
    const { result } = renderHook(() => useNarrow())
    expect(result.current).toBe(false)
    expect(NARROW_QUERY).toBe('(max-width: 720px)')
  })

  it('reports a narrow viewport', () => {
    mockNarrow()
    const { result } = renderHook(() => useNarrow())
    expect(result.current).toBe(true)
  })

  it('falls back to the wide layout when the browser has no matchMedia', () => {
    removeMatchMedia()
    const { result } = renderHook(() => useNarrow())
    expect(result.current).toBe(false)
  })
})
