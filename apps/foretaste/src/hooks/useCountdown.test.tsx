import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCountdown } from './useCountdown'
import { COUNTDOWN_OFFSET_MS, INITIAL_PARTS } from '../lib/countdown'

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-10-12T10:00:00.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints the shipped non-zero values before the first tick', () => {
    const { result } = renderHook(() => useCountdown())

    expect(COUNTDOWN_OFFSET_MS).toBeGreaterThan(0)
    expect(result.current).toEqual(INITIAL_PARTS)
  })

  it('recomputes the remaining time once a second toward load time plus 35d 18h', () => {
    const { result } = renderHook(() => useCountdown())

    act(() => {
      vi.advanceTimersByTime(1_000)
    })

    expect(result.current).toEqual({ days: '35', hours: '17', minutes: '59', seconds: '59' })
  })

  it('clamps at zero when the target is already in the past', () => {
    const { result } = renderHook(() => useCountdown(-1_000))

    act(() => {
      vi.advanceTimersByTime(1_000)
    })

    expect(result.current).toEqual({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  })

  it('clears its interval on unmount', () => {
    const clear = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = renderHook(() => useCountdown())

    unmount()

    expect(clear).toHaveBeenCalledTimes(1)
  })
})
