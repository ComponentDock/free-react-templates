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

  it('renders the hero section with initial slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Fashion Trends')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shop Now/i })).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 3')).toBeInTheDocument()
  })

  it('auto-advances to next slide', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Fashion Trends')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
  })

  it('navigates to a specific slide on indicator click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByText('Women Fashion')).toBeInTheDocument()
  })

  it('wraps around from last to first slide', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(screen.getByText('Fashion Trends')).toBeInTheDocument()
  })
})
