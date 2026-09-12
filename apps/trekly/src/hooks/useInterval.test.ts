import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useInterval, useSlideCarousel } from './useInterval'

describe('useInterval', () => {
  it('calls the callback at the specified interval', () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    renderHook(() => useInterval(callback, 1000))
    expect(callback).not.toHaveBeenCalled()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(callback).toHaveBeenCalledTimes(1)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(callback).toHaveBeenCalledTimes(2)
    vi.useRealTimers()
  })

  it('cleans up the interval on unmount', () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    const { unmount } = renderHook(() => useInterval(callback, 1000))
    unmount()
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(callback).not.toHaveBeenCalled()
    vi.useRealTimers()
  })
})

describe('useSlideCarousel', () => {
  it('starts at slide 0', () => {
    const { result } = renderHook(() => useSlideCarousel(3))
    expect(result.current.current).toBe(0)
  })

  it('advances to next slide', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useSlideCarousel(3, 1000))
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.current).toBe(1)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.current).toBe(2)
    vi.useRealTimers()
  })

  it('wraps around to first slide', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useSlideCarousel(2, 1000))
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.current).toBe(1)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.current).toBe(0)
    vi.useRealTimers()
  })

  it('allows manual slide setting', () => {
    const { result } = renderHook(() => useSlideCarousel(3))
    act(() => {
      result.current.setCurrent(2)
    })
    expect(result.current.current).toBe(2)
  })
})
