import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders section heading', () => {
    render(<FeaturedProperties />)
    expect(screen.getByRole('heading', { name: 'featured properties' })).toBeInTheDocument()
    expect(screen.getByText('See our best offers')).toBeInTheDocument()
  })

  it('renders 3 property cards', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('House in West California')).toBeInTheDocument()
    expect(screen.getByText('Villa in Miami Beach')).toBeInTheDocument()
    expect(screen.getByText('Penthouse in Dublin')).toBeInTheDocument()
  })

  it('shows price for each property', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('$540,000')).toBeInTheDocument()
    expect(screen.getByText('$380,000')).toBeInTheDocument()
    expect(screen.getByText('$290,000')).toBeInTheDocument()
  })

  it('shows featured badges', () => {
    render(<FeaturedProperties />)
    const badges = screen.getAllByText('featured')
    expect(badges).toHaveLength(3)
  })

  it('renders room details for each card', () => {
    render(<FeaturedProperties />)
    const bedrooms = screen.getAllByText('Bedrooms')
    expect(bedrooms.length).toBeGreaterThanOrEqual(3)
  })

  it('renders amenity tags', () => {
    render(<FeaturedProperties />)
    expect(screen.getByText('Hottub')).toBeInTheDocument()
    expect(screen.getAllByText('Swimming Pool').length).toBeGreaterThanOrEqual(1)
  })

  it('shows For Sale label', () => {
    render(<FeaturedProperties />)
    const forSale = screen.getAllByText('For Sale')
    expect(forSale).toHaveLength(3)
  })
})
