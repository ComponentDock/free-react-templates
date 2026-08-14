import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders the first slide with subheading, headline, CTA and background image', () => {
    render(<HeroSlider />)
    const region = screen.getByRole('region', { name: 'Hero' })
    expect(region).toHaveStyle({
      backgroundImage: expect.stringContaining('parley-hero-1'),
    })
    expect(screen.getByText(heroSlides[0]!.subheading)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.heading }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toHaveAttribute('href', '#services')
  })

  it('renders one dot per slide and marks the active one', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(heroSlides.length)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
    expect(dots[1]).toHaveAttribute('aria-current', 'false')
  })

  it('auto-advances to the second slide after six seconds', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.heading }),
    ).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[1]!.heading }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide when its dot is clicked and wraps on the next tick', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    fireEvent.click(dots[1]!)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[1]!.heading }),
    ).toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.heading }),
    ).toBeInTheDocument()
  })
})
