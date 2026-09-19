import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading text', () => {
    render(<Hero />)
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Summer Wear')).toBeInTheDocument()
  })

  it('shows the product carousel with description', () => {
    render(<Hero />)
    expect(screen.getByText('Cool Clothing with Brown Stripes')).toBeInTheDocument()
  })

  it('shows the price badge', () => {
    render(<Hero />)
    const prices = screen.getAllByText(/\$3\.99/)
    expect(prices.length).toBeGreaterThanOrEqual(1)
  })

  it('shows In Stock text', () => {
    render(<Hero />)
    expect(screen.getByText('In Stock')).toBeInTheDocument()
  })

  it('has previous and next slide buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('navigates to next slide on right arrow click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Winter Collection')).toBeInTheDocument()
  })

  it('navigates to previous slide on left arrow click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Spring Trends')).toBeInTheDocument()
  })

  it('auto-advances slides', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Winter Collection')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
