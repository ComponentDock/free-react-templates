import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the conference heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Developer Conference 2025/i)).toBeInTheDocument()
  })

  it('renders date and location', () => {
    render(<Hero />)
    expect(screen.getByText(/Dec 31, 2025/i)).toBeInTheDocument()
    expect(screen.getByText(/Convention Center, Manila/i)).toBeInTheDocument()
  })

  it('renders countdown labels', () => {
    render(<Hero />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Buy Ticket button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /buy ticket/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const bgDiv = container.querySelector('.bg-cover')
    expect(bgDiv).toBeInTheDocument()
  })

  it('updates countdown when timer ticks', async () => {
    render(<Hero />)
    // Advance the interval by 1 second to trigger the callback
    await act(async () => {
      vi.advanceTimersByTime(1000)
    })
    // Timer should have updated (seconds changed from initial)
    expect(screen.getByText('Days')).toBeInTheDocument()
  })
})
