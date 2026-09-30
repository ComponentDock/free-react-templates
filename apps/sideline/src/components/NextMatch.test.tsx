import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NextMatch } from './NextMatch'

describe('NextMatch', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-09-08T07:30:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the fixture details and a live countdown', () => {
    render(<NextMatch />)
    expect(screen.getByText('Harbor Hawks')).toBeInTheDocument()
    expect(screen.getByText('Founders FC')).toBeInTheDocument()
    expect(screen.getByText('Premier League — Round 10')).toBeInTheDocument()
    expect(screen.getByText('3:2')).toBeInTheDocument()
    expect(screen.getByText('10 September / 7:30 AM')).toBeInTheDocument()
    // Exactly two days before the 2027-09-10T07:30:00 kickoff.
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('ticks the countdown every second', () => {
    render(<NextMatch />)
    const seconds = () => screen.getByText('Seconds').previousElementSibling!.textContent

    // Kickoff is exactly 2 days away: 02d 00:00:00.
    expect(seconds()).toBe('00')
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    // One second elapsed: 1d 23:59:59.
    expect(seconds()).toBe('59')
    expect(screen.getByText('Days').previousElementSibling!.textContent).toBe('01')
    act(() => {
      vi.advanceTimersByTime(59_000)
    })
    // One minute elapsed: 1d 23:59:00.
    expect(seconds()).toBe('00')
    expect(screen.getByText('Minutes').previousElementSibling!.textContent).toBe('59')
  })

  it('clamps the countdown at zero after the kickoff passes', () => {
    vi.setSystemTime(new Date('2027-09-11T00:00:00'))
    render(<NextMatch />)
    // All four units (days/hours/minutes/seconds) clamp to 00.
    expect(screen.getAllByText('00')).toHaveLength(4)
  })

  it('clears the interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<NextMatch />)
    expect(vi.getTimerCount()).toBe(1)
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})
