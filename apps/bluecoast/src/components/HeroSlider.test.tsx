import { render, screen, act, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide by default', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Villa With Sea View')).toBeInTheDocument()
    expect(screen.getByText('Super Offer')).toBeInTheDocument()
  })

  it('shows property features', () => {
    render(<HeroSlider />)
    expect(screen.getByText('250 sqft')).toBeInTheDocument()
    expect(screen.getByText('4 Bedrooms')).toBeInTheDocument()
    expect(screen.getByText('2 Bathrooms')).toBeInTheDocument()
  })

  it('displays the price', () => {
    render(<HeroSlider />)
    expect(screen.getByText('$3,500')).toBeInTheDocument()
  })

  it('has navigation buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
  })

  it('has dot navigation buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 3/i })).toBeInTheDocument()
  })

  it('advances to next slide via button', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByText('Modern City Apartment')).toBeInTheDocument()
  })

  it('goes to previous slide via button', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByText('Cozy Suburban House')).toBeInTheDocument()
  })

  it('navigates via dots', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByText('Cozy Suburban House')).toBeInTheDocument()
  })

  it('auto-advances after 5 seconds', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Modern City Apartment')).toBeInTheDocument()
  })

  it('displays a background image', () => {
    render(<HeroSlider />)
    const bgDiv = document.querySelector('[style*="background-image"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
