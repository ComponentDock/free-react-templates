import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCountdown } from './useCountdown'

const SECOND = 1000
const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

const OPENING_DIGITS = ['3', '5', '1', '8', '0', '0', '0', '0']
const ZERO_DIGITS = ['0', '0', '0', '0', '0', '0', '0', '0']
const NO_FLAGS = [false, false, false, false, false, false, false, false]

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints the eight digits immediately with nothing flipping', () => {
    const { result } = renderHook(() => useCountdown(Date.now() + 35 * DAY + 18 * HOUR))

    expect(result.current.digits).toEqual(OPENING_DIGITS)
    expect(result.current.previous).toEqual(OPENING_DIGITS)
    expect(result.current.changed).toEqual(NO_FLAGS)
    expect(result.current.tick).toBe(0)
  })

  it('moves only the cards whose digit changed and bumps the tick', () => {
    const { result } = renderHook(() => useCountdown(Date.now() + 35 * DAY + 18 * HOUR))

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(result.current.digits).toEqual(['3', '5', '1', '7', '5', '9', '5', '9'])
    expect(result.current.previous).toEqual(OPENING_DIGITS)
    // hours roll back to 17 and both the minute and second pairs roll to 59
    expect(result.current.changed).toEqual([false, false, false, true, true, true, true, true])
    expect(result.current.tick).toBe(1)
  })

  it('stops ticking once the target has passed and leaves the frame alone', () => {
    const { result } = renderHook(() => useCountdown(Date.now() - SECOND))
    const first = result.current

    expect(first.digits).toEqual(ZERO_DIGITS)

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(result.current).toBe(first)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('clears the interval on unmount', () => {
    const { unmount } = renderHook(() => useCountdown(Date.now() + DAY))

    expect(vi.getTimerCount()).toBe(1)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
