import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useCountdown } from './useCountdown'

const T0 = new Date('2026-03-01T00:00:00.000Z')

function Probe() {
  const time = useCountdown()

  return (
    <span data-testid="probe">{`${time.days}|${time.hours}|${time.minutes}|${time.seconds}`}</span>
  )
}

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(T0)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('opens at 35 days 19 hours and ticks down once a second', () => {
    render(<Probe />)

    expect(screen.getByTestId('probe')).toHaveTextContent('35|19|0|0')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('35|18|59|59')
  })

  it('reads the remaining span against the moment the page mounted', () => {
    render(<Probe />)

    vi.setSystemTime(new Date(T0.getTime() + 2 * 3_600_000))

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('35|16|59|59')
  })

  it('retires the interval once the span runs out', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')

    render(<Probe />)

    vi.setSystemTime(new Date(T0.getTime() + 40 * 86_400_000))

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('0|0|0|0')
    expect(clearIntervalSpy).toHaveBeenCalledWith(expect.anything())
  })

  it('clears the interval when it unmounts', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Probe />)

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalledWith(expect.anything())
  })
})
