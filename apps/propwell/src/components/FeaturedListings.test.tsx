import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedListings } from './FeaturedListings'

describe('FeaturedListings', () => {
  it('renders the section heading', () => {
    render(<FeaturedListings />)

    expect(screen.getByText('Featured Listings')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<FeaturedListings />)

    expect(screen.getByText(/Explore our top featured/)).toBeInTheDocument()
  })

  it('renders all 3 listings', () => {
    render(<FeaturedListings />)

    expect(screen.getByText('24 Fifth Avenue, New York')).toBeInTheDocument()
    expect(screen.getByText('101 St. John Street, New York')).toBeInTheDocument()
    expect(screen.getByText('856 Main Street, Chicago')).toBeInTheDocument()
  })

  it('displays badges', () => {
    render(<FeaturedListings />)

    expect(screen.getAllByText('For Sale').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('For Rent')).toBeInTheDocument()
  })

  it('displays room info', () => {
    render(<FeaturedListings />)

    expect(screen.getAllByText(/Beds/).length).toBe(3)
    expect(screen.getAllByText(/Baths/).length).toBe(3)
    expect(screen.getAllByText(/sqft/).length).toBe(3)
  })

  it('displays agent names', () => {
    render(<FeaturedListings />)

    expect(screen.getByText(/John Smith/)).toBeInTheDocument()
    expect(screen.getByText(/Sarah Johnson/)).toBeInTheDocument()
    expect(screen.getByText(/Mike Williams/)).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<FeaturedListings />)

    expect(screen.getByText('$450,000')).toBeInTheDocument()
    expect(screen.getByText('$2,500/mo')).toBeInTheDocument()
    expect(screen.getByText('$680,000')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<FeaturedListings />)

    expect(screen.getByLabelText('Featured listings')).toBeInTheDocument()
  })
})
