import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ListingCard } from './ListingCard'

const defaultProps = {
  image: 'https://example.com/house.jpg',
  tags: ['House', 'For Sale'],
  price: '$1,200',
  location: '123 Street, New York',
  sqft: 1200,
  beds: 3,
  baths: 2,
  garage: 1,
}

describe('ListingCard', () => {
  it('renders the image', () => {
    render(<ListingCard {...defaultProps} />)
    const img = screen.getByAltText('123 Street, New York')
    expect(img).toHaveAttribute('src', 'https://example.com/house.jpg')
  })

  it('renders tags', () => {
    render(<ListingCard {...defaultProps} />)
    expect(screen.getByText('House')).toBeInTheDocument()
    expect(screen.getByText('For Sale')).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<ListingCard {...defaultProps} />)
    expect(screen.getByText('$1,200')).toBeInTheDocument()
  })

  it('renders location', () => {
    render(<ListingCard {...defaultProps} />)
    expect(screen.getByText('123 Street, New York')).toBeInTheDocument()
  })

  it('renders sq ft, beds, baths, garage stats', () => {
    render(<ListingCard {...defaultProps} />)
    expect(screen.getByText('1200 sq ft')).toBeInTheDocument()
    expect(screen.getByText('3 Beds')).toBeInTheDocument()
    expect(screen.getByText('2 Baths')).toBeInTheDocument()
    expect(screen.getByText('1 Garage')).toBeInTheDocument()
  })

  it('renders with unknown tag color (fallback)', () => {
    render(<ListingCard {...defaultProps} tags={['CustomTag']} />)
    expect(screen.getByText('CustomTag')).toBeInTheDocument()
  })

  it('renders with For Rent tag', () => {
    render(<ListingCard {...defaultProps} tags={['For Rent']} />)
    expect(screen.getByText('For Rent')).toBeInTheDocument()
  })

  it('renders with Villa tag', () => {
    render(<ListingCard {...defaultProps} tags={['Villa']} />)
    expect(screen.getByText('Villa')).toBeInTheDocument()
  })

  it('renders with Apartment tag', () => {
    render(<ListingCard {...defaultProps} tags={['Apartment']} />)
    expect(screen.getByText('Apartment')).toBeInTheDocument()
  })
})
