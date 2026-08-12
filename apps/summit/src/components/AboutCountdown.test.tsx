import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AboutCountdown, getCountdown } from './AboutCountdown'

afterEach(() => {
  vi.useRealTimers()
})

describe('getCountdown', () => {
  it('breaks the remaining time into months, days, hours, minutes and seconds', () => {
    const target = new Date(2032, 0, 14, 9, 0, 0)
    const now = new Date(2031, 10, 1, 9, 0, 0)
    const parts = getCountdown(target, now)
    expect(parts).toEqual({ months: 2, days: 14, hours: 0, minutes: 0, seconds: 0 })
  })

  it('clamps to zero when the target date has passed', () => {
    const target = new Date(2020, 0, 1)
    const parts = getCountdown(target, new Date(2030, 0, 1))
    expect(parts).toEqual({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
  })
})

describe('AboutCountdown', () => {
  it('renders the about block with subtitle, heading and Interested pill', () => {
    render(<AboutCountdown />)
    expect(screen.getByText('About Conference')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Welcome to the Project Management' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Interested/i })).toHaveAttribute('href', '#contact')
  })

  it('renders five labelled countdown boxes that tick each second', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2031, 11, 1, 12, 0, 0))
    render(<AboutCountdown />)
    for (const label of ['Months', 'Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    const secondsBox = screen.getByText('Seconds').previousElementSibling!
    expect(secondsBox.textContent).toBe('00')
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(secondsBox.textContent).toBe('59')
  })

  it('cleans up the interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<AboutCountdown />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(vi.getTimerCount()).toBe(0)
  })
})
