import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the initial slide heading and CTAs', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('We Are Digital Agency')

    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Portfolio' })).toBeInTheDocument()
  })

  it('shows slide navigation dots', () => {
    render(<Hero />)

    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('advances to the next slide after 5 seconds', () => {
    vi.useFakeTimers()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Creative Solutions')

    vi.useRealTimers()
  })

  it('navigates to previous slide via button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Think Big, Build Bold')
  })

  it('navigates to next slide via button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Creative Solutions')
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Think Big, Build Bold')
  })
})
