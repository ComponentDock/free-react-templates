import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BestSellers } from './BestSellers'

describe('BestSellers', () => {
  it('renders the heading', () => {
    render(<BestSellers />)
    expect(screen.getByRole('heading', { name: 'Best Sellers' })).toBeInTheDocument()
  })

  it('renders 16 product cards', () => {
    render(<BestSellers />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(16)
  })

  it('renders each product with name and price', () => {
    render(<BestSellers />)
    for (let i = 1; i <= 16; i++) {
      expect(screen.getByText(`Running Shoes ${i}`)).toBeInTheDocument()
    }
    const prices = screen.getAllByText('$139.00')
    expect(prices).toHaveLength(16)
  })

  it('renders Shop All Products button', () => {
    render(<BestSellers />)
    const link = screen.getByRole('link', { name: 'Shop All Products' })
    expect(link).toHaveAttribute('href', '#shop')
  })
})
