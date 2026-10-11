import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCountdown } from './useCountdown'

const SECOND = 1000
const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

const OPENING = { days: 35, hours: 18, minutes: 0, seconds: 0 }
const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 }

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints the opening values immediately', () => {
    const target = Date.now() + 35 * DAY + 18 * HOUR
    const { result } = renderHook(() => useCountdown(target))

    expect(result.current).toEqual(OPENING)
  })

  it('repaints the values once a second elapses', () => {
    const target = Date.now() + 35 * DAY + 18 * HOUR
    const { result } = renderHook(() => useCountdown(target))

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(result.current).toEqual({ days: 35, hours: 17, minutes: 59, seconds: 59 })
  })

  it('stops ticking once the target has passed', () => {
    const target = Date.now() - SECOND
    const { result } = renderHook(() => useCountdown(target))

    expect(result.current).toEqual(ZERO)
    expect(vi.getTimerCount()).toBe(0)

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(result.current).toEqual(ZERO)
  })

  it('clears the interval on unmount', () => {
    const target = Date.now() + DAY
    const { unmount } = renderHook(() => useCountdown(target))

    expect(vi.getTimerCount()).toBe(1)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
