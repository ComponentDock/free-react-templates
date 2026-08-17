import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ListingSection } from './ListingSection'
import { popularListings } from '../data'

describe('ListingSection', () => {
  it('renders the heading pair and one card per listing', () => {
    render(
      <ListingSection
        subheading="Our Listing"
        title="Popular Listing"
        listings={popularListings}
      />,
    )

    expect(screen.getByText('Our Listing')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Popular Listing' })).toBeInTheDocument()

    const section = screen.getByRole('region', { name: 'Popular Listing' })
    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(popularListings.length)
    for (const item of popularListings) {
      expect(
        within(section).getByRole('heading', { level: 3, name: item.title }),
      ).toBeInTheDocument()
    }
  })
})
