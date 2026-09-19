import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  const defaultProps = {
    name: 'Test Product',
    price: 29.99,
    image: 'https://picsum.photos/seed/test/300/300',
  }

  it('renders product name and price', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('renders old price when provided', () => {
    render(<ProductCard {...defaultProps} oldPrice={49.99} />)
    expect(screen.getByText('$49.99')).toBeInTheDocument()
  })

  it('does not render old price when not provided', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.queryByText('$49.99')).not.toBeInTheDocument()
  })

  it('renders hot badge when hot is true', () => {
    render(<ProductCard {...defaultProps} hot />)
    expect(screen.getByText('HOT')).toBeInTheDocument()
  })

  it('does not render hot badge when hot is false', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.queryByText('HOT')).not.toBeInTheDocument()
  })

  it('renders star rating', () => {
    render(<ProductCard {...defaultProps} rating={3} />)
    const stars = screen.getAllByText('★')
    expect(stars).toHaveLength(5)
  })

  it('renders action buttons on hover', async () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByLabelText('Quick view Test Product')).toBeInTheDocument()
    expect(screen.getByLabelText('Add Test Product to wishlist')).toBeInTheDocument()
    expect(screen.getByLabelText('Add Test Product to cart')).toBeInTheDocument()
  })
})
