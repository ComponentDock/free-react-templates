import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide heading and CTA', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { name: /elevate your coaching business/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /start free trial/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('advances to next slide on next button click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { name: /unlock your true potential/i })).toBeInTheDocument()
  })

  it('goes to previous slide on prev button click', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('heading', { name: /build lasting change/i })).toBeInTheDocument()
  })

  it('auto-advances slides after 5 seconds', () => {
    render(<HeroSlider />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('heading', { name: /unlock your true potential/i })).toBeInTheDocument()
  })

  it('navigates to a specific slide via dot indicators', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByRole('heading', { name: /build lasting change/i })).toBeInTheDocument()
  })
})
