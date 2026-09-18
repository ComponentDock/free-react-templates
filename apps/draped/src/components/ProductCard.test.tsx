import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  const defaultProps = {
    image: 'https://picsum.photos/seed/test/400/400',
    title: 'Test Product',
    collection: 'Test Collection',
    price: '$9.50',
  }

  it('renders product title', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('renders collection name', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByText('Test Collection')).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByText('$9.50')).toBeInTheDocument()
  })

  it('renders product image', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByRole('img', { name: 'Test Product' })).toBeInTheDocument()
  })

  it('does not render sale badge when sale is false', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.queryByText('Sale')).not.toBeInTheDocument()
  })

  it('renders sale badge when sale is true', () => {
    render(<ProductCard {...defaultProps} sale={true} />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('renders original price with strikethrough when provided', () => {
    render(<ProductCard {...defaultProps} originalPrice="$30.00" sale={true} />)
    expect(screen.getByText('$30.00')).toBeInTheDocument()
  })

  it('does not render original price when not provided', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.queryByText('$30.00')).not.toBeInTheDocument()
  })
})
