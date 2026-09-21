import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { HeroCarousel } from './HeroCarousel'
import { HERO_SLIDES } from '../data'

describe('HeroCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide by default', () => {
    render(<HeroCarousel />)
    expect(screen.getByText(HERO_SLIDES[0]!.category)).toBeInTheDocument()
    expect(screen.getByText(HERO_SLIDES[0]!.title)).toBeInTheDocument()
    expect(screen.getByText(HERO_SLIDES[0]!.description)).toBeInTheDocument()
  })

  it('renders a Watch Now button', () => {
    render(<HeroCarousel />)
    expect(screen.getByRole('button', { name: /watch now/i })).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<HeroCarousel />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(HERO_SLIDES.length)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('auto-rotates to next slide after 5 seconds', () => {
    render(<HeroCarousel />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(HERO_SLIDES[1]!.category)).toBeInTheDocument()
    expect(screen.getByText(HERO_SLIDES[1]!.title)).toBeInTheDocument()
  })

  it('auto-rotates through all slides', () => {
    render(<HeroCarousel />)
    for (let i = 1; i < HERO_SLIDES.length; i++) {
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByText(HERO_SLIDES[i]!.category)).toBeInTheDocument()
    }
    // Wrap around
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(HERO_SLIDES[0]!.category)).toBeInTheDocument()
  })

  it('allows clicking a slide indicator to switch slides', () => {
    render(<HeroCarousel />)
    const tabs = screen.getAllByRole('tab')
    act(() => {
      fireEvent.click(tabs[2]!)
    })
    expect(screen.getByText(HERO_SLIDES[2]!.category)).toBeInTheDocument()
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
  })
})
