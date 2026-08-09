import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestProducts } from './LatestProducts'

describe('LatestProducts', () => {
  it('renders the heading and four product cards with names, prices and add-to-cart actions', () => {
    render(<LatestProducts />)
    expect(screen.getByRole('heading', { name: /latest products/i })).toBeInTheDocument()

    for (const name of [
      'Flamboyant Pink Top',
      'Black and White Stripes Dress',
      'Ivory Lace Blouse',
      'Vintage Denim Skirt',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('$35.00')).toHaveLength(2)
    expect(screen.getByText('$42.00')).toBeInTheDocument()
    expect(screen.getByText('$38.00')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /add .* to cart/i })).toHaveLength(4)
  })

  it('renders the NEW and SALE badges on the matching products', () => {
    render(<LatestProducts />)
    expect(screen.getByText('NEW')).toBeInTheDocument()
    expect(screen.getByText('SALE')).toBeInTheDocument()
  })
})
