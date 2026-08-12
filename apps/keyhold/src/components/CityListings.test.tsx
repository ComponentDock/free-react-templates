import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CityListings } from './CityListings'

describe('CityListings', () => {
  it('renders the subheading and section heading', () => {
    render(<CityListings />)

    expect(screen.getByText('Find Properties')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Find Properties In Your City' }),
    ).toBeInTheDocument()
  })

  it('renders six city cards with gold badges, titles, and links', () => {
    render(<CityListings />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)

    expect(screen.getAllByText('100 Property Listing')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: /see all listing/i })).toHaveLength(6)

    for (const city of ['New York, USA', 'Los Angeles, USA', 'San Francisco, USA']) {
      expect(screen.getByText(city)).toBeInTheDocument()
    }
  })
})
