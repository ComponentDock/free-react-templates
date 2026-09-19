import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HotDeal } from './HotDeal'

describe('HotDeal', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders heading and countdown units', () => {
    render(<HotDeal />)
    expect(screen.getByRole('heading', { name: /Exclusive Hot Deal Ends in/i })).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<HotDeal />)
    expect(screen.getByRole('link', { name: /Shop Now/i })).toBeInTheDocument()
  })

  it('counts down seconds', () => {
    vi.useFakeTimers()
    render(<HotDeal />)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const secondsEl = screen.getAllByText(/^\d{2}$/)
    expect(secondsEl.length).toBeGreaterThanOrEqual(1)
  })

  it('reaches zero after enough time', () => {
    vi.useFakeTimers()
    render(<HotDeal />)
    act(() => {
      vi.advanceTimersByTime(7 * 24 * 60 * 60 * 1000)
    })
    expect(screen.getAllByText('00').length).toBe(4)
  })
})
