import { describe, expect, it, afterEach, beforeEach, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-12T12:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the event title, date line, heading and four timer columns', () => {
    render(<Countdown />)

    expect(screen.getByRole('heading', { name: 'Spreading the faith to all' })).toBeInTheDocument()
    expect(screen.getByText('5th may, 2018, Saturday, 09.00 am to 05.00 pm')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Next Event Starts in' })).toBeInTheDocument()
    expect(screen.getByText('days')).toBeInTheDocument()
    expect(screen.getByText('hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('seconds')).toBeInTheDocument()
  })

  it('counts down from the fixed offset (9d 23h 59m 51s) and ticks each second', () => {
    render(<Countdown />)

    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getByText('59')).toBeInTheDocument()
    expect(screen.getByText('51')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.queryByText('51')).not.toBeInTheDocument()
  })

  it('never shows negative values once the target passes', () => {
    render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(countdownOffsetForTest())
    })
    // All four columns clamp to zero.
    expect(screen.getAllByText('0')).toHaveLength(4)
  })

  it('clears its interval on unmount', () => {
    const { unmount } = render(<Countdown />)

    unmount()
    expect(() => vi.advanceTimersByTime(2000)).not.toThrow()
  })
})

function countdownOffsetForTest() {
  // 9d 23h 59m 51s + a little extra to cross zero
  return 9 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 52 * 1000
}
