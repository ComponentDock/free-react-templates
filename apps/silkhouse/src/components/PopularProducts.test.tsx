import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularProducts } from './PopularProducts'

describe('PopularProducts', () => {
  it('renders the popular products section', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('region', { name: /popular products/i })).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<PopularProducts />)
    expect(screen.getByText('Popular Items')).toBeInTheDocument()
  })

  it('renders 3 product cards', () => {
    render(<PopularProducts />)
    expect(screen.getByText('Designer Handbag')).toBeInTheDocument()
    expect(screen.getByText('Cashmere Scarf')).toBeInTheDocument()
    expect(screen.getByText('Vintage Watch')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<PopularProducts />)
    expect(screen.getByText('$120.00')).toBeInTheDocument()
    expect(screen.getByText('$55.00')).toBeInTheDocument()
    expect(screen.getByText('$200.00')).toBeInTheDocument()
  })

  it('renders Shop Now buttons for each product', () => {
    render(<PopularProducts />)
    const buttons = screen.getAllByRole('link', { name: /shop now/i })
    expect(buttons).toHaveLength(3)
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('href', '#shop')
    })
  })
})
