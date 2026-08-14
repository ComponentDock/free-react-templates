import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCarousel } from './useCarousel'

describe('useCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts at the first slide', () => {
    const { result } = renderHook(() => useCarousel(6, 3, 4000))
    expect(result.current.start).toBe(0)
    expect(result.current.maxIndex).toBe(3)
  })

  it('advances automatically and wraps at the end', () => {
    const { result } = renderHook(() => useCarousel(3, 1, 4000))
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(result.current.start).toBe(1)
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(result.current.start).toBe(2)
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(result.current.start).toBe(0)
  })

  it('goTo clamps to the valid range', () => {
    const { result } = renderHook(() => useCarousel(6, 3, 4000))
    act(() => {
      result.current.goTo(99)
    })
    expect(result.current.start).toBe(3)
    act(() => {
      result.current.goTo(-5)
    })
    expect(result.current.start).toBe(0)
  })

  it('clears the interval on unmount', () => {
    const { unmount } = renderHook(() => useCarousel(6, 3, 4000))
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
