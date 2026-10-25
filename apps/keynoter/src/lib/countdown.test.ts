import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NEXT_EVENT } from '../content'
import { pad, remainingParts, useCountdown } from './countdown'

const TARGET = Date.parse('2027-02-09T09:00:00+01:00')

describe('remainingParts', () => {
  it('splits the gap into whole days, hours, minutes and seconds', () => {
    const now = TARGET - (2 * 86_400_000 + 3 * 3_600_000 + 4 * 60_000 + 5_000)
    expect(remainingParts(TARGET, now)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    })
  })

  it('floors at zero once the target has passed', () => {
    expect(remainingParts(TARGET, TARGET + 60_000)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('pad', () => {
  it('pads a single digit and leaves two alone', () => {
    expect(pad(7)).toBe('07')
    expect(pad(0)).toBe('00')
    expect(pad(56)).toBe('56')
  })
})

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the live gap and steps down every second', () => {
    vi.setSystemTime(TARGET - 10_000)
    const { result } = renderHook(() => useCountdown(NEXT_EVENT.iso))
    expect(result.current.seconds).toBe(10)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.seconds).toBe(9)
  })

  it('clears its interval on unmount', () => {
    vi.setSystemTime(TARGET - 10_000)
    const clear = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = renderHook(() => useCountdown(NEXT_EVENT.iso))
    unmount()
    expect(clear).toHaveBeenCalled()
  })
})
