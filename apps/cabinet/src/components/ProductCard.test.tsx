import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  const defaultProps = {
    name: 'Test Sofa',
    price: 999,
    imageSeed: 'test-sofa',
    swatchColor: '#2f5d50',
  }

  it('renders the product name', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByText('Test Sofa')).toBeInTheDocument()
  })

  it('renders the price', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.getByText('$999')).toBeInTheDocument()
  })

  it('renders the product image', () => {
    render(<ProductCard {...defaultProps} />)
    const img = screen.getByRole('img', { name: 'Test Sofa' })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/test-sofa/900/900')
  })

  it('renders the swatch color', () => {
    render(<ProductCard {...defaultProps} />)
    const swatch = screen.getByLabelText('Color: #2f5d50')
    expect(swatch).toHaveStyle({ backgroundColor: '#2f5d50' })
  })

  it('renders sale badge when onSale', () => {
    render(<ProductCard {...defaultProps} onSale originalPrice={1200} />)
    expect(screen.getByText('Sale')).toBeInTheDocument()
  })

  it('renders original price when onSale', () => {
    render(<ProductCard {...defaultProps} onSale originalPrice={1200} />)
    expect(screen.getByText('$1,200')).toBeInTheDocument()
  })

  it('renders without swatch when not provided', () => {
    render(<ProductCard name="No Swatch" price={50} imageSeed="no-swatch" />)
    expect(screen.queryByLabelText(/Color/)).not.toBeInTheDocument()
  })

  it('renders without sale badge when not onSale', () => {
    render(<ProductCard {...defaultProps} />)
    expect(screen.queryByText('Sale')).not.toBeInTheDocument()
  })
})
