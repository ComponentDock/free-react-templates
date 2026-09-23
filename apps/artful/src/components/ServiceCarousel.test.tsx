import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServiceCarousel } from './ServiceCarousel'

describe('ServiceCarousel', () => {
  it('renders the first slide', () => {
    render(<ServiceCarousel />)
    expect(screen.getByRole('heading', { name: /Artistic Vision/i })).toBeInTheDocument()
    expect(screen.getByText(/creative ideas/i)).toBeInTheDocument()
  })

  it('navigates to the next slide', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    expect(screen.getByRole('heading', { name: /Quality Craftsmanship/i })).toBeInTheDocument()
  })

  it('navigates to the previous slide', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    await user.click(screen.getByRole('button', { name: /Previous slide/i }))
    expect(screen.getByRole('heading', { name: /Artistic Vision/i })).toBeInTheDocument()
  })

  it('wraps around from last to first slide', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    // Go to last slide
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    expect(screen.getByRole('heading', { name: /Creative Solutions/i })).toBeInTheDocument()
    // Wrap to first
    await user.click(screen.getByRole('button', { name: /Next slide/i }))
    expect(screen.getByRole('heading', { name: /Artistic Vision/i })).toBeInTheDocument()
  })

  it('wraps around from first to last slide via previous', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    // Start at slide 0, click prev → should wrap to last slide
    await user.click(screen.getByRole('button', { name: /Previous slide/i }))
    expect(screen.getByRole('heading', { name: /Creative Solutions/i })).toBeInTheDocument()
  })
})
