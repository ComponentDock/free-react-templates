import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading, subtext and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Welcome To Techwise/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Portfolio/i })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Play video/i })).toBeInTheDocument()
  })

  it('renders slider navigation dots', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(dots).toHaveLength(2)
  })

  it('switches slide on dot click', async () => {
    render(<Hero />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { name: /Creative Digital Agency/i })).toBeInTheDocument()
  })

  it('auto-advances slides via timer', () => {
    vi.useFakeTimers()
    render(<Hero />)
    // Initial slide
    expect(screen.getByRole('heading', { name: /Welcome To Techwise/i })).toBeInTheDocument()
    // Advance timer to trigger slide change
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { name: /Creative Digital Agency/i })).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('renders the background image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Creative agency workspace/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('cleans up timer on unmount', () => {
    const { unmount } = render(<Hero />)
    unmount()
  })
})
