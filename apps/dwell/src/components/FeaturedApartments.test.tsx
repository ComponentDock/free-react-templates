import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedApartments } from './FeaturedApartments'
import { FEATURED_APARTMENTS, FEATURED_BLURB, FEATURED_HEADING } from '../data'

describe('FeaturedApartments', () => {
  it('renders the collage heading with the tan underline and intro copy', () => {
    const { container } = render(<FeaturedApartments />)

    expect(screen.getByRole('heading', { name: FEATURED_HEADING })).toBeInTheDocument()
    expect(screen.getByText(FEATURED_BLURB)).toBeInTheDocument()
    expect(container.querySelectorAll('[aria-hidden="true"]').length).toBeGreaterThan(0)
  })

  it('renders one tall card on the left and two stacked cards on the right', () => {
    const { container } = render(<FeaturedApartments />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)

    for (const card of FEATURED_APARTMENTS) {
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getByText(card.price)).toBeInTheDocument()
    }
  })
})
