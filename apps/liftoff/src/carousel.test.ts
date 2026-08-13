import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCarousel } from './carousel'

describe('useCarousel', () => {
  it('starts at the first index', () => {
    const { result } = renderHook(() => useCarousel(4))
    expect(result.current.index).toBe(0)
  })

  it('advances and wraps around', () => {
    const { result } = renderHook(() => useCarousel(3))

    act(() => result.current.next())
    expect(result.current.index).toBe(1)
    act(() => result.current.next())
    expect(result.current.index).toBe(2)
    act(() => result.current.next())
    expect(result.current.index).toBe(0)
  })

  it('goes back and wraps from the first index', () => {
    const { result } = renderHook(() => useCarousel(3))

    act(() => result.current.prev())
    expect(result.current.index).toBe(2)
  })

  it('jumps to a requested index with wrapping', () => {
    const { result } = renderHook(() => useCarousel(4))

    act(() => result.current.goTo(2))
    expect(result.current.index).toBe(2)
    // Wraps a negative target.
    act(() => result.current.goTo(-1))
    expect(result.current.index).toBe(3)
    // Wraps an oversized target.
    act(() => result.current.goTo(4))
    expect(result.current.index).toBe(0)
  })
})
