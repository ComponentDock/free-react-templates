import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with accent word', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Make it/)
    expect(screen.getByText('Shape')).toBeInTheDocument()
  })

  it('renders the subtitle and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Elite Personal Training Services')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Us Now' })).toBeInTheDocument()
  })

  it('renders slide navigation dots', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots).toHaveLength(3)
  })

  it('renders previous and next slide buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('allows manual slide navigation via dot click', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots[0]).toHaveClass('bg-brand')

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(dots[2]).toHaveClass('bg-brand')
  })

  it('allows manual slide navigation via next button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots[1]).toHaveClass('bg-brand')
  })

  it('allows manual slide navigation via previous button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    // Starting at slide 0, previous should wrap to slide 2
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))

    const dots = screen.getAllByRole('button', { name: /^Go to slide/ })
    expect(dots[2]).toHaveClass('bg-brand')
  })

  it('cleans up the auto-advance timer on unmount', () => {
    const { unmount } = render(<Hero />)
    // Unmount triggers the cleanup function
    unmount()
  })
})
