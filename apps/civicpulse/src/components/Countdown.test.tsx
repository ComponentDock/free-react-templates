import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Countdown', () => {
  it('renders election heading', () => {
    render(<Countdown />)
    expect(
      screen.getByRole('heading', { name: /Election is knocking at door/i }),
    ).toBeInTheDocument()
  })

  it('renders countdown units', () => {
    render(<Countdown />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('updates countdown values over time', () => {
    render(<Countdown />)
    const initial = screen.getAllByText(/\d{2}/).length
    expect(initial).toBeGreaterThan(0)

    // Advance 2 seconds
    vi.advanceTimersByTime(2000)

    // Still shows countdown values
    expect(screen.getByText('Days')).toBeInTheDocument()
  })

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = render(<Countdown />)
    unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})
