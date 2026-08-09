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
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })

  it('advances and wraps with the next and previous buttons', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { name: /summer dresses/i })).toBeInTheDocument()
    expect(screen.getByText('2 / 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Offer: from $45')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { name: /denim jackets/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { name: /summer dresses/i })).toBeInTheDocument()
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
