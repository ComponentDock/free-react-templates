import { act, renderHook } from '@testing-library/react'
import { COUNTDOWN_TARGET } from './site'
import {
  DAY_MS,
  HOUR_MS,
  MINUTE_MS,
  SECOND_MS,
  formatUnit,
  partsUntil,
  unitValues,
  useCountdown,
} from './use-countdown'

describe('partsUntil — the wait, split into four', () => {
  it('splits a wait into days, hours, minutes and seconds', () => {
    const now = 0
    const target = 2 * DAY_MS + 3 * HOUR_MS + 4 * MINUTE_MS + 5 * SECOND_MS

    expect(partsUntil(target, now)).toEqual({ days: 2, hours: 3, minutes: 4, seconds: 5 })
  })

  it('counts nothing once the moment has gone by', () => {
    expect(partsUntil(SECOND_MS, 5 * SECOND_MS)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('formatUnit — the digits under a counter', () => {
  it('pads a single digit so the row never jitters', () => {
    expect(formatUnit(7)).toBe('07')
  })

  it('leaves two-digit and longer numbers alone', () => {
    expect(formatUnit(42)).toBe('42')
    expect(formatUnit(365)).toBe('365')
  })
})

describe('unitValues — the parts in the design’s own order', () => {
  it('hands each part to the label the design prints under it', () => {
    expect(unitValues({ days: 1, hours: 2, minutes: 3, seconds: 4 })).toEqual({
      Days: 1,
      Hours: 2,
      Minutes: 3,
      Seconds: 4,
    })
  })
})

describe('useCountdown — the wait, run on the page’s own clock', () => {
  it('ticks once a second and knows when the day has arrived', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-06-12T10:59:58'))

    const { result } = renderHook(() => useCountdown(COUNTDOWN_TARGET))

    expect(result.current.hasPassed).toBe(false)
    expect(result.current.seconds).toBe(2)

    act(() => {
      vi.advanceTimersByTime(SECOND_MS)
    })

    expect(result.current.seconds).toBe(1)

    act(() => {
      vi.advanceTimersByTime(SECOND_MS)
    })

    expect(result.current.seconds).toBe(0)
    expect(result.current.hasPassed).toBe(true)

    vi.useRealTimers()
  })

  it('stops ticking when it is taken off the page', () => {
    vi.useFakeTimers()

    const { unmount } = renderHook(() => useCountdown(COUNTDOWN_TARGET))

    expect(vi.getTimerCount()).toBe(1)

    unmount()

    expect(vi.getTimerCount()).toBe(0)

    vi.useRealTimers()
  })
})
