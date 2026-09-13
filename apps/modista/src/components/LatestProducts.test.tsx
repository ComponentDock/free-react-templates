import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders the section heading', () => {
    render(<LatestProducts />)
    expect(screen.getByRole('heading', { name: 'Our Latest Product' })).toBeInTheDocument()
  })

  it('displays product cards with names', () => {
    render(<LatestProducts />)
    expect(screen.getByText('Winter Jacket')).toBeInTheDocument()
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Casual Blazer')).toBeInTheDocument()
    expect(screen.getByText('Slim Jeans')).toBeInTheDocument()
  })

  it('shows prices for products', () => {
    render(<LatestProducts />)
    const prices = screen.getAllByText('$120')
    expect(prices.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$89')).toBeInTheDocument()
  })

  it('shows strikethrough prices for sale items', () => {
    render(<LatestProducts />)
    const strikethroughs = document.querySelectorAll('.line-through')
    expect(strikethroughs.length).toBeGreaterThan(0)
  })

  it('shows Add To Cart buttons', () => {
    render(<LatestProducts />)
    const buttons = screen.getAllByText('Add To Cart')
    expect(buttons.length).toBe(8)
  })

  it('shows compare and wishlist icon buttons', () => {
    render(<LatestProducts />)

    const compareBtns = screen.getAllByRole('button', { name: /Compare/ })
    expect(compareBtns.length).toBeGreaterThan(0)

    const wishlistBtns = screen.getAllByRole('button', { name: /wishlist/ })
    expect(wishlistBtns.length).toBeGreaterThan(0)
  })

  it('has a scrollable product list', () => {
    render(<LatestProducts />)
    const list = screen.getByRole('list')
    expect(list).toHaveClass('flex')
    expect(list).toHaveClass('overflow-x-auto')
  })
})
