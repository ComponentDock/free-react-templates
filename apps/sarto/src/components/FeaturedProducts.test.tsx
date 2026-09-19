import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the section heading', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { name: 'Featured Products' })).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText(/eco friendly system/)).toBeInTheDocument()
  })

  it('renders 10 product cards with name and price', () => {
    render(<FeaturedProducts />)
    const names = screen.getAllByText('Long Sleeve T-Shirt')
    expect(names).toHaveLength(10)
    const prices = screen.getAllByText('$150.00')
    expect(prices).toHaveLength(10)
  })

  it('renders wishlist and cart buttons for each product', () => {
    render(<FeaturedProducts />)
    const wishlistBtns = screen.getAllByRole('button', { name: 'Add to wishlist' })
    expect(wishlistBtns).toHaveLength(10)
    const cartBtns = screen.getAllByRole('button', { name: 'Add to cart' })
    expect(cartBtns).toHaveLength(10)
  })

  it('renders pagination controls', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument()
  })
})
