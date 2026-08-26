import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the series label', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Carousel #10')
  })

  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Studio')
  })

  it('renders the intro paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the Start a project button', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /start a project/i })
    expect(link).toHaveAttribute('href', '#start')
  })

  it('renders prev and next slide buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('shows the first slide initially', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: 'Studio workspace' })
    expect(img).toBeInTheDocument()
  })

  it('advances to next slide on next button click', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: /next slide/i }))

    // Second slide image should now be visible (not aria-hidden)
    const img = screen.getByRole('img', { name: 'Creative process' })
    expect(img).toBeInTheDocument()
  })

  it('goes to previous slide on prev button click', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    // First go forward so we can go back
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    await user.click(screen.getByRole('button', { name: /previous slide/i }))

    // Back to first slide
    const img = screen.getByRole('img', { name: 'Studio workspace' })
    expect(img).toBeInTheDocument()
  })

  it('auto-advances slides every 5 seconds', async () => {
    vi.useFakeTimers()
    render(<Hero />)

    await act(async () => {
      vi.advanceTimersByTime(5000)
    })

    const img = screen.getByRole('img', { name: 'Creative process' })
    expect(img).toBeInTheDocument()
  })

  it('has the section labelled for accessibility', () => {
    render(<Hero />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })
})
