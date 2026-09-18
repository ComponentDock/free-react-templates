import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the countdown heading', () => {
    render(<Countdown targetDate={new Date(Date.now() + 86400000)} />)
    expect(screen.getByText('Next Event Starts In')).toBeInTheDocument()
  })

  it('displays time unit labels', () => {
    render(<Countdown targetDate={new Date(Date.now() + 86400000)} />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('updates every second', async () => {
    vi.useFakeTimers()
    const target = new Date(Date.now() + 5000)
    render(<Countdown targetDate={target} />)
    const before = screen.getByText('Seconds').previousElementSibling?.textContent
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const after = screen.getByText('Seconds').previousElementSibling?.textContent
    expect(after).not.toBe(before)
    vi.useRealTimers()
  })

  it('shows zeros when target date is in the past', () => {
    render(<Countdown targetDate={new Date(Date.now() - 1000)} />)
    const zeros = screen.getAllByText('00')
    expect(zeros.length).toBe(4)
  })

  it('renders a large number of days for a far-future date', () => {
    render(<Countdown targetDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)} />)
    const daysLabel = screen.getByText('Days')
    const daysValue = daysLabel.previousElementSibling?.textContent
    expect(parseInt(daysValue || '0')).toBeGreaterThanOrEqual(364)
  })
})
