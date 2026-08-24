import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with heading and CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('auto-advances to the next slide after 5 seconds', () => {
    render(<HeroSlider />)

    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByText('Premium Properties For You')).toBeInTheDocument()
  })

  it('renders a third slide after two intervals', () => {
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(10000)
    })

    expect(screen.getByText('Your Trusted Real Estate Partner')).toBeInTheDocument()
  })

  it('wraps around to the first slide after the last', () => {
    render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(15000)
    })

    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()
  })
})
