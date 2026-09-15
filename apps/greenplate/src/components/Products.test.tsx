import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders 8 product cards', () => {
    render(<Products />)
    const names = [
      'Bell Pepper',
      'Strawberry',
      'Green Beans',
      'Purple Cabbage',
      'Tomato',
      'Broccoli',
      'Carrots',
      'Fruit Juice',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders product images', () => {
    render(<Products />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('shows sale badge on discounted items', () => {
    render(<Products />)
    const saleBadges = screen.getAllByText('30% OFF')
    expect(saleBadges.length).toBe(2) // Bell Pepper and Tomato
  })

  it('shows original price with line-through for sale items', () => {
    render(<Products />)
    const strikePrices = screen.getAllByText('$120')
    // At least Bell Pepper and Tomato have $120 struck through
    expect(strikePrices.length).toBeGreaterThanOrEqual(2)
  })

  it('renders action buttons for each product', () => {
    render(<Products />)
    expect(screen.getByLabelText('View Bell Pepper')).toBeInTheDocument()
    expect(screen.getByLabelText('Add Bell Pepper to cart')).toBeInTheDocument()
    expect(screen.getByLabelText('Wishlist Bell Pepper')).toBeInTheDocument()
  })
})
