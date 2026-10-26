import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TestimonialBand } from './TestimonialBand'
import { TESTIMONIALS } from '../content'

describe('TestimonialBand', () => {
  it('is one main landmark holding the head and the three-card grid', () => {
    render(<TestimonialBand />)

    const main = screen.getByRole('main')
    expect(main).toHaveClass('band')
    expect(main.querySelectorAll('header')).toHaveLength(1)
    expect(main.querySelectorAll('figure')).toHaveLength(3)
  })

  it('carries the head copy verbatim, comma in "1,900+" and all', () => {
    render(<TestimonialBand />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Teams who switched to Ledgerly',
    )
    expect(
      screen.getByText('4.8 average from 1,900+ reviews by finance and operations teams.'),
    ).toHaveClass('band-sub')
  })

  it('exposes exactly one heading level and no other heading', () => {
    render(<TestimonialBand />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0)
    expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0)
  })

  it('puts the three testimonials in one grid, in order', () => {
    const { container } = render(<TestimonialBand />)

    const grid = container.querySelector('.testimonial-grid')!
    expect(grid.children).toHaveLength(3)
    expect(Array.from(grid.querySelectorAll('.brand')).map((b) => b.textContent)).toEqual([
      'Lumen Freight',
      'Paperkite',
      'Oakridge Clinics',
    ])
  })

  it('marks exactly one card as dark, and it is the middle one', () => {
    const { container } = render(<TestimonialBand />)

    const cards = Array.from(container.querySelectorAll('figure'))
    expect(cards.map((card) => card.classList.contains('testimonial-dark'))).toEqual([
      false,
      true,
      false,
    ])
    expect(cards.map((card) => card.querySelector('.who-name')?.textContent)).toEqual(
      TESTIMONIALS.map((testimonial) => testimonial.name),
    )
  })

  it('invents no nav, hero, stats row, logo strip, CTA or form', () => {
    const { container } = render(<TestimonialBand />)

    const main = container.querySelector('main')!
    expect(main.querySelector('nav')).toBeNull()
    expect(main.querySelector('footer')).toBeNull()
    expect(main.querySelector('img')).toBeNull()
    expect(main.querySelectorAll('section')).toHaveLength(0)
    expect(main.querySelectorAll('a')).toHaveLength(0)
    expect(within(main).queryByRole('button')).toBeNull()
    expect(within(main).queryByRole('textbox')).toBeNull()
  })

  it('renders 15 star glyphs and 3 brand glyphs, all hidden from AT', () => {
    const { container } = render(<TestimonialBand />)

    expect(container.querySelectorAll('.stars svg')).toHaveLength(15)
    expect(container.querySelectorAll('.brand svg')).toHaveLength(3)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(18)
  })

  it('announces each rating through the star row, not through the glyphs', () => {
    render(<TestimonialBand />)

    const labels = screen.getAllByRole('img').map((row) => row.getAttribute('aria-label'))
    expect(labels).toEqual(['5 out of 5 stars', '5 out of 5 stars', '4 out of 5 stars'])
  })
})
