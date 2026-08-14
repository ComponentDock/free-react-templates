import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Apartments } from './Apartments'
import { APARTMENTS } from '../data'

describe('Apartments', () => {
  it('shows the section title and the View More link', () => {
    render(<Apartments />)

    expect(
      screen.getByRole('heading', { level: 2, name: APARTMENTS.heading }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: APARTMENTS.viewMoreLabel })).toBeInTheDocument()
  })

  it('shows three listing cards with photo, location, price, title, and meta', () => {
    const { container } = render(<Apartments />)

    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(3)

    for (const card of APARTMENTS.cards) {
      expect(screen.getByText(card.location)).toBeInTheDocument()
      expect(screen.getByText(card.price)).toBeInTheDocument()
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getAllByText(card.meta).length).toBeGreaterThanOrEqual(1)
    }

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('src', APARTMENTS.cards[0]!.image)
  })
})
