import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the four countdown units with computed values', () => {
    vi.setSystemTime(new Date('2032-12-20T14:00:00'))
    render(<Countdown />)
    // Target Dec 28 2032 14:00 -> 8 days, 0 hours, 0 minutes, 0 seconds.
    expect(screen.getByText('08')).toBeInTheDocument()
    expect(screen.getAllByText('00')).toHaveLength(3)
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('ticks down every second', () => {
    vi.setSystemTime(new Date('2032-12-20T14:00:00'))
    render(<Countdown />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('07')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getAllByText('59')).toHaveLength(2)
  })

  it('zeroes all units once the target date has passed', () => {
    vi.setSystemTime(new Date('2033-01-01T12:00:00'))
    render(<Countdown />)
    expect(screen.getAllByText('00')).toHaveLength(4)
  })

  it('clears the interval on unmount', () => {
    vi.setSystemTime(new Date('2032-12-20T14:00:00'))
    const { unmount } = render(<Countdown />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.queryByText('08')).not.toBeInTheDocument()
  })
})
