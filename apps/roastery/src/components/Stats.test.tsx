import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Years of Roasting')).toBeInTheDocument()
    expect(screen.getByText('Cups Served Monthly')).toBeInTheDocument()
    expect(screen.getByText('Origin Countries')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders the animated counter starting at zero', () => {
    render(<Stats />)
    const counters = screen.getAllByText('0')
    expect(counters.length).toBeGreaterThanOrEqual(1)
  })

  it('animates counters to their final values', () => {
    render(<Stats />)

    act(() => {
      vi.advanceTimersByTime(2500)
    })

    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('50k+')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
  })
})
