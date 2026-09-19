import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders section heading and all 6 product cards', () => {
    render(<Products />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Products')

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)

    for (const name of [
      'Classic Watch',
      'Leather Bag',
      'Running Shoes',
      'Sunglasses',
      'Backpack',
      'Headphones',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders Cart and View buttons for each product', () => {
    render(<Products />)

    const cartButtons = screen.getAllByText('Cart')
    const viewButtons = screen.getAllByText('View')
    expect(cartButtons.length).toBe(6)
    expect(viewButtons.length).toBe(6)
  })

  it('renders wishlist buttons for each product', () => {
    render(<Products />)

    const wishlistButtons = screen.getAllByRole('button', { name: /Add .* to wishlist/ })
    expect(wishlistButtons.length).toBe(6)
  })
})
