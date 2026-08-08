import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('shows the heading, sub and View All Properties link', () => {
    render(<FeaturedProperties />)
    expect(screen.getByRole('heading', { name: 'Featured Properties' })).toBeInTheDocument()
    expect(
      screen.getByText(/Handpicked luxury properties in the most sought-after locations/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View All Properties/i })).toBeInTheDocument()
  })

  it('shows four property cards with name, price, location and features', () => {
    render(<FeaturedProperties />)
    const cards = [
      { name: 'Luxury Manhattan Penthouse', price: '$8.5M' },
      { name: 'Modern Brooklyn Townhouse', price: '$3.2M' },
      { name: 'Waterfront Hamptons Estate', price: '$24.5M' },
      { name: 'Tribeca Industrial Loft', price: '$4.8M' },
    ]
    for (const card of cards) {
      const link = screen.getByRole('link', { name: new RegExp(card.name, 'i') })
      expect(within(link).getByText(card.price)).toBeInTheDocument()
      expect(within(link).getByText('For Sale')).toBeInTheDocument()
    }
    expect(screen.getAllByText('New York, NY')).toHaveLength(2)
    expect(screen.getByText('Brooklyn, NY')).toBeInTheDocument()
    expect(screen.getByText('Southampton, NY')).toBeInTheDocument()
    expect(screen.getByText('4 Beds')).toBeInTheDocument()
    expect(screen.getByText('4.5 Baths')).toBeInTheDocument()
    expect(screen.getByText('4,200 sqft')).toBeInTheDocument()
  })

  it('adds a New badge and a horizontal layout to the first card only', () => {
    render(<FeaturedProperties />)
    const first = screen.getByRole('link', { name: /Luxury Manhattan Penthouse/i })
    expect(within(first).getByText('New')).toBeInTheDocument()
    expect(first).toHaveClass('lg:flex')

    const second = screen.getByRole('link', { name: /Modern Brooklyn Townhouse/i })
    expect(within(second).queryByText('New')).not.toBeInTheDocument()
    expect(second).not.toHaveClass('lg:flex')
  })
})
