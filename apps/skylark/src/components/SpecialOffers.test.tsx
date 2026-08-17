import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialOffers } from './SpecialOffers'
import { OFFERS } from '../data'

describe('SpecialOffers', () => {
  it('renders the section title and intro paragraph', () => {
    render(<SpecialOffers />)

    expect(screen.getByRole('heading', { level: 2, name: 'Special Offers' })).toBeInTheDocument()
    expect(screen.getByText(/more-or-less normal distribution of letters/)).toBeInTheDocument()
  })

  it('renders one card per offer with title, location, price and image', () => {
    const { container } = render(<SpecialOffers />)

    OFFERS.forEach((offer) => {
      expect(screen.getByRole('heading', { level: 3, name: offer.title })).toBeInTheDocument()
      expect(screen.getByText(offer.location)).toBeInTheDocument()
      expect(screen.getByText(offer.price)).toBeInTheDocument()
      expect(container.querySelectorAll(`img[src="${offer.image}"]`).length).toBe(1)
    })
  })

  it('keeps the section anchor reachable from the hero CTA', () => {
    render(<SpecialOffers />)
    expect(screen.getByRole('region', { name: 'Special Offers' })).toHaveAttribute(
      'id',
      'special-offers',
    )
  })
})
