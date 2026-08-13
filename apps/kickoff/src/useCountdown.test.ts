import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCountdown } from './useCountdown'

afterEach(() => {
  vi.useRealTimers()
})

describe('useCountdown', () => {
  it('computes the time left to the target date', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-01-01T00:00:00Z'))

    const { result } = renderHook(() => useCountdown('2027-01-04T00:00:00Z'))
    expect(result.current).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 })

    act(() => vi.advanceTimersByTime(1000))
    expect(result.current.seconds).toBe(59)
    expect(result.current.days).toBe(2)
  })

  it('clamps to zero once the target has passed', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2028-01-01T00:00:00Z'))

    const { result } = renderHook(() => useCountdown('2027-01-01T00:00:00Z'))
    expect(result.current).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })
})
