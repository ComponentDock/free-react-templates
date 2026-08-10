import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trending, trendingProducts } from './Trending'

describe('Trending', () => {
  it('renders the heading and at least four product tiles', () => {
    render(<Trending />)
    expect(screen.getByRole('heading', { name: /Trending/ })).toBeInTheDocument()
    const tiles = screen.getAllByRole('img', { name: 'Young Woman Wearing Dress' })
    expect(tiles.length).toBeGreaterThanOrEqual(4)
    expect(tiles.length).toBe(trendingProducts.length)
  })

  it('shows prices on every tile', () => {
    render(<Trending />)
    const prices = screen.getAllByText(/\$120\.00/)
    expect(prices.length).toBe(trendingProducts.length)
  })

  it('shows a sale badge and discounted price on sale tiles', () => {
    render(<Trending />)
    expect(screen.getAllByText('30%').length).toBe(2)
    expect(screen.getAllByText('$80.00').length).toBe(2)
    expect(screen.getAllByText('$120.00').length).toBe(trendingProducts.length)
  })
})
