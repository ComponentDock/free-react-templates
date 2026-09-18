import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { CountdownBar } from './CountdownBar'

describe('CountdownBar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the countdown labels and Read More link', () => {
    render(<CountdownBar />)

    expect(screen.getByText(/NEXT BIG EVENT IN/)).toBeInTheDocument()
    expect(screen.getByText(/DAYS/)).toBeInTheDocument()
    expect(screen.getByText(/HOURS/)).toBeInTheDocument()
    expect(screen.getByText(/MINUTES/)).toBeInTheDocument()
    expect(screen.getByText(/SECONDS/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Read More/ })).toHaveAttribute('href', '#events')
  })

  it('decrements seconds as time advances', () => {
    render(<CountdownBar />)

    const before = screen.getByText(/SECONDS/).textContent
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    const after = screen.getByText(/SECONDS/).textContent

    expect(before).not.toBe(after)
  })
})
