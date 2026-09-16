import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders countdown units and a donation button', () => {
    const { unmount } = render(<TopBar />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Send Donations/i })).toHaveAttribute('href', '#donate')
    unmount()
  })

  it('shows countdown values with aria-labels', () => {
    render(<TopBar />)
    expect(screen.getByLabelText(/Days$/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Hours$/)).toBeInTheDocument()
  })

  it('ticks the countdown every second', () => {
    render(<TopBar />)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByText('Days')).toBeInTheDocument()
  })
})
