import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RESTAURANTS } from '../data/content'
import { PopularRestaurants } from './PopularRestaurants'

describe('PopularRestaurants', () => {
  it('renders the section heading and every restaurant card without a price', () => {
    const { container } = render(<PopularRestaurants />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Popular Restaurants')
    expect(container.querySelectorAll('.listing-card')).toHaveLength(RESTAURANTS.length)
    expect(screen.getAllByText('Luxury Restaurant')).toHaveLength(RESTAURANTS.length)
    expect(screen.getAllByText('4 Rating')).toHaveLength(RESTAURANTS.length)
    expect(screen.getAllByText('San Franciso, CA')).toHaveLength(RESTAURANTS.length)
    expect(container.querySelectorAll('.price')).toHaveLength(0)
    expect(container.querySelectorAll('.days-chip')).toHaveLength(0)
  })

  it('mixes the Discover and Book Now actions', () => {
    render(<PopularRestaurants />)
    expect(screen.getAllByText('Discover')).toHaveLength(1)
    expect(screen.getAllByText('Book Now')).toHaveLength(RESTAURANTS.length - 1)
  })
})
