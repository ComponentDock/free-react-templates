import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders the heading and six product cards with names, prices and hover actions', () => {
    render(<LatestProducts />)
    expect(screen.getByRole('heading', { name: /latest products/i })).toBeInTheDocument()

    for (const name of [
      'Flamboyant Pink Top',
      'Black and White Stripes Dress',
      'Ivory Lace Blouse',
      'Vintage Denim Skirt',
      'Cotton Poplin Top',
      'Floral Maxi Dress',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('$35.00')).toHaveLength(2)
    expect(screen.getByText('$42.00')).toBeInTheDocument()
    expect(screen.getByText('$38.00')).toBeInTheDocument()
    expect(screen.getByText('$25.00')).toBeInTheDocument()
    expect(screen.getByText('$60.00')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /add .* to cart/i })).toHaveLength(6)
    expect(screen.getAllByRole('button', { name: /add .* to wishlist/i })).toHaveLength(6)
  })

  it('renders the green New and pink ON SALE tags on the matching products', () => {
    render(<LatestProducts />)
    expect(screen.getAllByText('New')).toHaveLength(2)
    expect(screen.getAllByText('ON SALE')).toHaveLength(1)
  })
})
