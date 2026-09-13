import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the slider section', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('region', { name: 'Hero slider' })).toBeInTheDocument()
  })

  it('shows the current slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { name: 'Best Summer Collection' })).toBeInTheDocument()
  })

  it('shows a read more CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: 'read more' })).toBeInTheDocument()
  })

  it('shows dot indicators', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('tab')
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('navigates to a slide when a dot is clicked', () => {
    render(<HeroSlider />)

    const secondDot = screen.getAllByRole('tab')[1]!
    act(() => {
      fireEvent.click(secondDot)
    })

    expect(secondDot).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('heading', { name: 'New Arrivals 2024' })).toBeInTheDocument()
  })

  it('auto-advances slides', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { name: 'Best Summer Collection' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { name: 'New Arrivals 2024' })).toBeInTheDocument()
  })

  it('has accessible slide images', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('img', { name: 'Best Summer Collection' })).toBeInTheDocument()
  })
})
