import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<Stats />)
    expect(screen.getByText(/We Always Try To Understand Users Expectation/)).toBeInTheDocument()
  })

  it('renders all four counter labels', () => {
    render(<Stats />)
    expect(screen.getByText('Download')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('Contributors')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Customers')).toBeInTheDocument()
  })

  it('initially shows zero counts', () => {
    render(<Stats />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(4)
  })

  it('counts up to target values', () => {
    render(<Stats />)
    // Advance timers enough for the interval to complete
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    // After counting, at least one target should be reached
    expect(screen.getByText('12,000')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('4,050')).toBeInTheDocument()
    expect(screen.getByText('9,000')).toBeInTheDocument()
  })
})
