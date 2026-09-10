import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders first slide heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
    expect(screen.getByText(/Make your car last longer/)).toBeDefined()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Book an appointment')).toBeDefined()
  })

  it('renders slide navigation dots', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(2)
  })

  it('advances to next slide after interval', async () => {
    render(<Hero />)
    expect(screen.getByText(/Make your car last longer/)).toBeDefined()
    vi.advanceTimersByTime(6000)
    expect(screen.getByText(/It's time to come to repair your car/)).toBeDefined()
  })

  it('allows clicking slide dots to navigate', async () => {
    const user = (await import('@testing-library/user-event')).default.setup({
      advanceTimers: vi.advanceTimersByTime,
    })
    render(<Hero />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText(/It's time to come to repair your car/)).toBeDefined()
  })
})
