import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and stat labels', () => {
    render(<Counter />)

    expect(screen.getByText('Interesting Facts')).toBeInTheDocument()
    expect(screen.getByText('Some')).toBeInTheDocument()
    expect(screen.getByText('Done Works')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Work Hours')).toBeInTheDocument()
  })

  it('animates counters from zero to final values', () => {
    render(<Counter />)

    // Initially starts at 0
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(1)

    // Advance past the animation duration
    act(() => {
      vi.advanceTimersByTime(2500)
    })

    // After animation, should show the final values
    expect(screen.getByText('2,000')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('1,000')).toBeInTheDocument()
  })
})
