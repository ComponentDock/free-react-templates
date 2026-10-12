import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useCountdown } from './useCountdown'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function Probe({ target }: { target: number }) {
  const values = useCountdown(target)

  return (
    <output data-testid="probe">
      {`${values.days}|${values.hours}|${values.minutes}|${values.seconds}`}
    </output>
  )
}

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('paints the remaining time immediately, days raw and the rest padded', () => {
    render(<Probe target={Date.now() + 35 * DAY + 19 * HOUR + 5 * MINUTE + 9 * SECOND} />)

    expect(screen.getByTestId('probe')).toHaveTextContent('35|19|05|09')
  })

  it('repaints once a second as the target approaches', () => {
    render(<Probe target={Date.now() + 35 * DAY + 19 * HOUR} />)

    expect(screen.getByTestId('probe')).toHaveTextContent('35|19|00|00')

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('35|18|59|59')

    act(() => {
      vi.advanceTimersByTime(2 * SECOND)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('35|18|59|57')
  })

  it('stops ticking once the target has passed', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')

    render(<Probe target={Date.now() + 2 * SECOND} />)

    act(() => {
      vi.advanceTimersByTime(3 * SECOND)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('0|00|00|00')
    expect(clearIntervalSpy).toHaveBeenCalled()

    const callsAfterStop = clearIntervalSpy.mock.calls.length

    act(() => {
      vi.advanceTimersByTime(5 * SECOND)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('0|00|00|00')
    expect(clearIntervalSpy).toHaveBeenCalledTimes(callsAfterStop)
  })

  it('clears its interval when it unmounts', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Probe target={Date.now() + HOUR} />)

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
  })

  it('re-arms the clock when the target changes', () => {
    const { rerender } = render(<Probe target={Date.now() + HOUR} />)

    expect(screen.getByTestId('probe')).toHaveTextContent('0|01|00|00')

    rerender(<Probe target={Date.now() + DAY} />)

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(screen.getByTestId('probe')).toHaveTextContent('0|23|59|59')
  })
})
