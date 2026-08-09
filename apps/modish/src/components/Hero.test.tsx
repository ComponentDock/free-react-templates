import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders the first slide with headline, copy, CTAs and the price badge', () => {
    render(<Hero />)
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /denim jackets/i })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discover' })).toHaveAttribute('href', '#latest')
    expect(screen.getByRole('link', { name: 'Add to Cart' })).toHaveAttribute(
      'href',
      '#top-selling',
    )
    expect(screen.getByLabelText('Offer: from $29')).toBeInTheDocument()
    expect(screen.getByLabelText('Slide 1 of 2')).toBeInTheDocument()
  })

  it('moves between slides with the dots and keeps the content in place', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { name: /summer dresses/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Offer: from $45')).toBeInTheDocument()
    expect(screen.getByLabelText('Slide 2 of 2')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(screen.getByRole('heading', { name: /denim jackets/i })).toBeInTheDocument()
  })

  it('auto-advances the slider and cleans up its timer', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    expect(screen.getByRole('heading', { name: /denim jackets/i })).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { name: /summer dresses/i })).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { name: /denim jackets/i })).toBeInTheDocument()
    unmount()
  })
})
