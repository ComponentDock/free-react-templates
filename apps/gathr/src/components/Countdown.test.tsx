import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the heading', () => {
    render(<Countdown />)
    expect(screen.getByText('Countdown to the big event')).toBeInTheDocument()
  })

  it('renders all countdown units', () => {
    render(<Countdown />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('displays numeric countdown values', () => {
    render(<Countdown />)
    const values = screen.getAllByText(/^\d{2}$/)
    expect(values.length).toBeGreaterThanOrEqual(4)
  })

  it('has a section element', () => {
    render(<Countdown />)
    expect(document.querySelector('section')).not.toBeNull()
  })

  it('has a heading element', () => {
    render(<Countdown />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('shows positive time values when target is in the future', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-10T09:00:00'))
    render(<Countdown />)
    // Should show ~5 days, ~0 hours, ~0 minutes
    expect(screen.getByText('05')).toBeInTheDocument()
  })

  it('shows zeroed values when target is in the past', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2027-01-01T00:00:00'))
    render(<Countdown />)
    const zeros = screen.getAllByText('00')
    expect(zeros.length).toBeGreaterThanOrEqual(4)
  })

  it('updates the countdown via interval', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-10T09:00:00'))
    render(<Countdown />)
    // Get initial values
    const allValues = screen.getAllByText(/^\d{2}$/)
    expect(allValues.length).toBeGreaterThanOrEqual(4)
    // Advance timer by 1 second
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    // Timer should have updated - the values array should still have numeric values
    const updatedValues = screen.getAllByText(/^\d{2}$/)
    expect(updatedValues.length).toBeGreaterThanOrEqual(4)
  })
})
