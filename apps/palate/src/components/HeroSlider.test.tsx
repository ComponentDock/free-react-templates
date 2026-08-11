import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders the first slide with headline, buttons and three dots', () => {
    const { container } = render(<HeroSlider />)

    expect(screen.getByText('Our Delicious Specialties')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Order Now' })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: 'View Menu' })).toHaveAttribute('href', '#menu')

    const slides = container.querySelectorAll('[role="group"]')
    expect(slides).toHaveLength(3)
    // Only the first slide is visible; the rest are aria-hidden.
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'true')

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances to the next slide on the interval and wraps', () => {
    vi.useFakeTimers()
    const { container } = render(<HeroSlider />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    let slides = container.querySelectorAll('[role="group"]')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByText('The Best Place to Kick Off Your Day')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    slides = container.querySelectorAll('[role="group"]')
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByText('Our Delicious Specialties')).toBeInTheDocument()
  })

  it('jumps to a slide when its dot is clicked', () => {
    const { container } = render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))

    const slides = container.querySelectorAll('[role="group"]')
    expect(slides[2]).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByText('Creamy Hot and Ready to Serve')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('renders every slide headline exactly once across the slider data', () => {
    render(<HeroSlider />)
    for (const slide of HERO_SLIDES) {
      // Hidden slides remain in the DOM, so each headline exists once.
      expect(screen.getAllByText(slide.headline)).toHaveLength(1)
    }
  })
})
