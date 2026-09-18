import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { IntroBanner } from './IntroBanner'

describe('IntroBanner', () => {
  it('renders the event title and countdown labels', () => {
    render(<IntroBanner />)
    expect(screen.getByText(/annual church gathering/i)).toBeInTheDocument()
    expect(screen.getByText(/upcoming events/i, { selector: 'h2' })).toBeInTheDocument()
    for (const label of ['days', 'hours', 'minutes', 'seconds']) {
      expect(screen.getByText(label, { selector: 'span' })).toBeInTheDocument()
    }
  })

  it('updates countdown each second', () => {
    vi.useFakeTimers()
    render(<IntroBanner />)
    const secondsEl = screen.getByTestId('countdown-seconds')
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(secondsEl.textContent).toMatch(/^\d{2}$/)
    vi.useRealTimers()
  })

  it('shows zeroed countdown for past dates', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2099-01-01'))
    render(<IntroBanner />)
    // Countdown should show zeros since the event date is in the past relative to now
    expect(screen.getByTestId('countdown-days').textContent).toBe('00')
    vi.useRealTimers()
  })
})
