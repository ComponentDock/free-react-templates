import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StarRating } from './StarRating'

describe('StarRating', () => {
  it('renders five 18-unit glyphs in one labelled image row', () => {
    const { container } = render(<StarRating rating={5} />)

    const row = screen.getByRole('img', { name: '5 out of 5 stars' })
    expect(row).toHaveClass('stars')
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
    stars.forEach((star) => {
      expect(star).toHaveAttribute('viewBox', '0 0 20 20')
      expect(star).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('fills every star of a five-star rating and hollows none', () => {
    const { container } = render(<StarRating rating={5} />)

    const stars = Array.from(container.querySelectorAll('svg'))
    expect(stars.filter((star) => star.classList.contains('star-off'))).toHaveLength(0)
  })

  it('hollows the trailing star of a four-star rating', () => {
    const { container } = render(<StarRating rating={4} />)

    const stars = Array.from(container.querySelectorAll('svg'))
    expect(stars[3]?.classList.contains('star-off')).toBe(false)
    expect(stars[4]?.classList.contains('star-off')).toBe(true)
    expect(screen.getByRole('img')).toHaveAccessibleName('4 out of 5 stars')
  })

  it('uses the same star path in every glyph', () => {
    const { container } = render(<StarRating rating={5} />)

    const paths = Array.from(container.querySelectorAll('path')).map((p) => p.getAttribute('d'))
    expect(new Set(paths).size).toBe(1)
    expect(paths[0]).toBe(
      'M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9z',
    )
  })
})
