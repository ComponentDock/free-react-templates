import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCountdown } from './useCountdown'

const DAY = 24 * 60 * 60 * 1000
const HOUR = 60 * 60 * 1000

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints the remaining time immediately and ticks once a second', () => {
    const target = Date.now() + 35 * DAY + 18 * HOUR
    const { result } = renderHook(() => useCountdown(target))

    expect(result.current).toEqual({ days: 35, hours: 18, minutes: 0, seconds: 0 })

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(result.current).toEqual({ days: 35, hours: 17, minutes: 59, seconds: 59 })
  })

  it('never reads below zero and stops ticking once the target has passed', () => {
    const { result } = renderHook(() => useCountdown(Date.now() - 1000))

    expect(result.current).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    expect(vi.getTimerCount()).toBe(0)
  })

  it('clears the interval on unmount', () => {
    const { unmount } = renderHook(() => useCountdown(Date.now() + DAY))

    expect(vi.getTimerCount()).toBe(1)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
