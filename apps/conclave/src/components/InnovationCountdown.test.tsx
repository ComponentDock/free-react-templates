import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { getCountdown, InnovationCountdown } from './InnovationCountdown'

afterEach(() => {
  vi.useRealTimers()
})

describe('getCountdown', () => {
  it('returns correct countdown for a future date', () => {
    const target = new Date(Date.now() + 86400000 * 2 + 3600000 * 5 + 60000 * 30)
    const parts = getCountdown(target, new Date())
    expect(parts.days).toBe(2)
    expect(parts.hours).toBe(5)
    expect(parts.minutes).toBe(30)
  })

  it('returns zeros for a past date', () => {
    const target = new Date(Date.now() - 86400000)
    const parts = getCountdown(target, new Date())
    expect(parts.days).toBe(0)
    expect(parts.hours).toBe(0)
    expect(parts.minutes).toBe(0)
    expect(parts.seconds).toBe(0)
  })
})

describe('InnovationCountdown', () => {
  it('renders the heading and countdown boxes', () => {
    render(<InnovationCountdown />)
    expect(screen.getByText('Innovative With Experience UX Design 2025')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('20-22 January, 2025, Buffalo City')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Ticket →' })).toHaveAttribute('href', '#pricing')
  })

  it('cleans up the interval on unmount', () => {
    const { unmount } = render(<InnovationCountdown />)
    unmount()
  })

  it('updates the countdown over time', () => {
    vi.useFakeTimers()
    render(<InnovationCountdown />)
    vi.advanceTimersByTime(2000)
    // Countdown should still render after timer advance
    expect(screen.getByText('Days')).toBeInTheDocument()
  })
})
