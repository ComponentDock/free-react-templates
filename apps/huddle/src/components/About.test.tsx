import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { About, getTimeLeft } from './About'

describe('getTimeLeft', () => {
  it('returns positive values for a future date', () => {
    const future = new Date(Date.now() + 86400000 * 5 + 3600000 * 3 + 60000 * 2 + 1000)
    const result = getTimeLeft(future)
    expect(result.days).toBe(5)
    expect(result.hours).toBe(3)
    expect(result.minutes).toBe(2)
  })

  it('returns zeros for a past date', () => {
    const past = new Date('2020-01-01')
    const result = getTimeLeft(past)
    expect(result.days).toBe(0)
    expect(result.hours).toBe(0)
    expect(result.minutes).toBe(0)
    expect(result.seconds).toBe(0)
  })
})

describe('About', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders heading and countdown labels', () => {
    render(<About />)
    expect(screen.getByText('About The Conference')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders description and register button', () => {
    render(<About />)
    expect(screen.getByText(/Join industry leaders/)).toBeInTheDocument()
    expect(screen.getByText('Register Now')).toBeInTheDocument()
  })

  it('shows countdown values for each time unit', () => {
    render(<About />)
    // Should have 4 countdown value elements (days, hours, minutes, seconds)
    const blocks = screen.getAllByText(/^\d+$/)
    expect(blocks.length).toBeGreaterThanOrEqual(4)
  })

  it('updates countdown on interval tick', () => {
    const target = new Date(Date.now() + 86400000 * 10 + 5)
    render(<About targetDate={target.toISOString()} />)
    const before = screen.getAllByText(/^\d+$/).map((el) => el.textContent)
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    const after = screen.getAllByText(/^\d+$/).map((el) => el.textContent)
    expect(after).not.toEqual(before)
  })
})
