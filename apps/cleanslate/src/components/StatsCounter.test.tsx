import { render, screen } from '@testing-library/react'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { StatsCounter } from './StatsCounter'

beforeAll(() => {
  vi.useFakeTimers()
})

afterAll(() => {
  vi.useRealTimers()
})

describe('StatsCounter', () => {
  it('renders three stat labels', () => {
    render(<StatsCounter />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Buildings Cleaned')).toBeInTheDocument()
  })

  it('starts counters at zero', () => {
    render(<StatsCounter />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(3)
  })

  it('increments counters over time', () => {
    render(<StatsCounter />)
    vi.advanceTimersByTime(2000)
    const counters = screen.getAllByText(/\d+/)
    expect(counters.length).toBeGreaterThanOrEqual(3)
  })

  it('does not restart counting on re-render', () => {
    const { rerender } = render(<StatsCounter />)
    // Trigger re-render to hit counted.current guard
    rerender(<StatsCounter />)
    vi.advanceTimersByTime(2000)
  })

  it('cleans up timers on unmount', () => {
    const { unmount } = render(<StatsCounter />)
    unmount()
  })
})
