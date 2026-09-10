import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section title', () => {
    render(<Products />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Products' })).toBeInTheDocument()
  })

  it('renders all four product cards with names and prices', () => {
    render(<Products />)

    expect(screen.getByText('High Flow Fuel')).toBeInTheDocument()
    expect(screen.getByText('Revolution Wheels')).toBeInTheDocument()
    expect(screen.getByText('Tone Interior Kit')).toBeInTheDocument()
    expect(screen.getByText('Matte Gunmetal')).toBeInTheDocument()

    const prices = screen.getAllByText('$800.00')
    expect(prices).toHaveLength(4)
  })

  it('renders Add To Cart buttons', () => {
    render(<Products />)

    const cartButtons = screen.getAllByText('+Add To Cart')
    expect(cartButtons).toHaveLength(4)
  })

  it('renders hover action buttons for each product', () => {
    render(<Products />)

    const wishlistButtons = screen.getAllByRole('button', { name: /Wishlist/ })
    expect(wishlistButtons).toHaveLength(4)

    const viewButtons = screen.getAllByRole('button', { name: /View/ })
    expect(viewButtons).toHaveLength(4)

    const compareButtons = screen.getAllByRole('button', { name: /Compare/ })
    expect(compareButtons).toHaveLength(4)
  })
})
