import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ListingCard } from './ListingCard'

const props = {
  image: 'https://picsum.photos/seed/test/460/300',
  category: 'Electronics',
  title: 'Test Item',
  address: '123 Main St',
  rating: 4,
  reviews: 3,
}

describe('ListingCard', () => {
  it('renders the title', () => {
    render(<ListingCard {...props} />)
    expect(screen.getByText('Test Item')).toBeInTheDocument()
  })

  it('renders the category', () => {
    render(<ListingCard {...props} />)
    expect(screen.getByText('Electronics')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<ListingCard {...props} />)
    expect(screen.getByText('123 Main St')).toBeInTheDocument()
  })

  it('renders the review count', () => {
    render(<ListingCard {...props} />)
    expect(screen.getByText('(3 Reviews)')).toBeInTheDocument()
  })

  it('renders the bookmark button', () => {
    render(<ListingCard {...props} />)
    expect(screen.getByLabelText('Bookmark Test Item')).toBeInTheDocument()
  })

  it('renders 5 star icons', () => {
    const { container } = render(<ListingCard {...props} />)
    // Stars are SVG elements — check by counting star-related classes
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })
})
