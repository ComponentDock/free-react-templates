import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the section heading', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { level: 2, name: /Featured Product/i })).toBeInTheDocument()
  })

  it('renders three product cards with names and prices', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText(/Latest Men's Sneaker/i)).toBeInTheDocument()
    expect(screen.getByText(/Red Women Purses/i)).toBeInTheDocument()
    expect(screen.getByText(/Men Stylist Smart Watch/i)).toBeInTheDocument()
    const prices = screen.getAllByText('$25.00')
    expect(prices).toHaveLength(3)
  })

  it('renders product images', () => {
    render(<FeaturedProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
