import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PropertyListings } from './PropertyListings'

describe('PropertyListings', () => {
  it('renders the section heading', () => {
    render(<PropertyListings />)
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<PropertyListings />)
    expect(screen.getByText(/find the perfect property/i)).toBeInTheDocument()
  })

  it('renders all six property cards', () => {
    render(<PropertyListings />)
    expect(screen.getByText('$350,000')).toBeInTheDocument()
    expect(screen.getByText('$425,000')).toBeInTheDocument()
    expect(screen.getByText('$280,000')).toBeInTheDocument()
    expect(screen.getByText('$550,000')).toBeInTheDocument()
    expect(screen.getByText('$310,000')).toBeInTheDocument()
    expect(screen.getByText('$475,000')).toBeInTheDocument()
  })

  it('renders property locations', () => {
    render(<PropertyListings />)
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('Chicago, IL')).toBeInTheDocument()
  })

  it('renders property beds and baths', () => {
    render(<PropertyListings />)
    // Multiple properties have the same beds/baths counts
    const threeBeds = screen.getAllByText('3 Beds')
    expect(threeBeds.length).toBeGreaterThanOrEqual(1)
    const twoBaths = screen.getAllByText('2 Baths')
    expect(twoBaths.length).toBeGreaterThanOrEqual(1)
  })

  it('renders property sqft', () => {
    render(<PropertyListings />)
    expect(screen.getByText('1,800 sqft')).toBeInTheDocument()
    expect(screen.getByText('2,200 sqft')).toBeInTheDocument()
    expect(screen.getByText('1,200 sqft')).toBeInTheDocument()
  })

  it('renders property type badges', () => {
    render(<PropertyListings />)
    expect(screen.getByText('Apartment')).toBeInTheDocument()
    expect(screen.getByText('Condo')).toBeInTheDocument()
    expect(screen.getByText('Villa')).toBeInTheDocument()
    expect(screen.getByText('Townhouse')).toBeInTheDocument()
    // "House" appears in two properties
    const houseBadges = screen.getAllByText('House')
    expect(houseBadges.length).toBe(2)
  })
})
