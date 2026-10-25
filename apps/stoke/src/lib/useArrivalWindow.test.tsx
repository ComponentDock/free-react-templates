import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { resolveWindow, useArrivalWindow, windowKeyFor } from './useArrivalWindow'

function Clock() {
  const window = useArrivalWindow()
  return (
    <p data-testid="clock">
      {window.promise}|{window.label}
    </p>
  )
}

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('windowKeyFor', () => {
  it('maps each hour of the day to exactly one shift', () => {
    expect(windowKeyFor(7)).toBe('7-17')
    expect(windowKeyFor(9)).toBe('7-17')
    expect(windowKeyFor(16)).toBe('7-17')
    expect(windowKeyFor(17)).toBe('17-22')
    expect(windowKeyFor(21)).toBe('17-22')
    expect(windowKeyFor(22)).toBe('22-7')
    expect(windowKeyFor(23)).toBe('22-7')
    expect(windowKeyFor(0)).toBe('22-7')
    expect(windowKeyFor(6)).toBe('22-7')
  })
})

describe('resolveWindow', () => {
  it('resolves the daytime, evening and overnight windows', () => {
    expect(resolveWindow(10)).toMatchObject({ key: '7-17', promise: 'within 2 hours' })
    expect(resolveWindow(19)).toMatchObject({ key: '17-22', promise: 'within 3 hours' })
    expect(resolveWindow(3)).toMatchObject({
      key: '22-7',
      promise: 'first call at 7am',
      overnight: true,
    })
  })
})

describe('useArrivalWindow', () => {
  it('reads the clock at mount and re-reads it every minute', () => {
    vi.setSystemTime(new Date(2026, 9, 25, 9, 30, 0))
    render(<Clock />)
    expect(screen.getByTestId('clock')).toHaveTextContent('within 2 hours|Weekday daytime')

    act(() => {
      vi.setSystemTime(new Date(2026, 9, 25, 18, 1, 0))
      vi.advanceTimersByTime(60_000)
    })
    expect(screen.getByTestId('clock')).toHaveTextContent('within 3 hours|Evenings to 10pm')
  })

  it('stops the interval when the card unmounts', () => {
    const clear = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Clock />)
    unmount()
    expect(clear).toHaveBeenCalled()
  })
})
