import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide title and subtitle', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0]!.title)
    expect(screen.getByText(HERO_SLIDES[0]!.subtitle)).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('renders dot navigation buttons', () => {
    render(<HeroSlider />)

    for (let i = 0; i < HERO_SLIDES.length; i++) {
      expect(screen.getByRole('button', { name: `Go to slide ${i + 1}` })).toBeInTheDocument()
    }
  })

  it('advances to the next slide when Next is clicked', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0]!.title)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[1]!.title)
  })

  it('goes to the previous slide when Previous is clicked', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[2]!.title)
  })

  it('jumps to a specific slide when a dot is clicked', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[2]!.title)
  })

  it('auto-cycles to the next slide after 5 seconds', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0]!.title)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[1]!.title)
  })

  it('renders the Get Consultation link', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('link', { name: 'Get Consultation' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
