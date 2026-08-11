import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide headline, buy-now link and product image', () => {
    const { container } = render(<HeroSlider />)

    const section = container.querySelector('#home')!
    expect(section.className).toContain('bg-hero')

    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[0]!.headline }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Now' })).toHaveAttribute('href', '#shop')
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      `https://picsum.photos/seed/${HERO_SLIDES[0]!.seed}/640/640`,
    )
  })

  it('cycles slides with the prev/next controls', () => {
    render(<HeroSlider />)

    const next = screen.getByRole('button', { name: 'Next slide' })
    const previous = screen.getByRole('button', { name: 'Previous slide' })

    fireEvent.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[1]!.headline }),
    ).toBeInTheDocument()

    // Slide 2 ("Wood & Cloth Sofa"), then slide 3 ("Cloth & Wood Sofa").
    fireEvent.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[2]!.headline }),
    ).toBeInTheDocument()
    fireEvent.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[3]!.headline }),
    ).toBeInTheDocument()

    // Next on the last slide wraps around to slide 0.
    fireEvent.click(next)
    expect(
      screen.getByRole('heading', { level: 1, name: HERO_SLIDES[0]!.headline }),
    ).toBeInTheDocument()

    // Previous on the first slide wraps back to the last slide.
    fireEvent.click(previous)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: HERO_SLIDES[HERO_SLIDES.length - 1]!.headline,
      }),
    ).toBeInTheDocument()
  })
})
