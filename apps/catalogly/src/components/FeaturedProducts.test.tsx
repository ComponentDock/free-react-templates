import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders default title and subtitle', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('Featured Products')).toBeInTheDocument()
    expect(screen.getByText(/Who are in extremely love/)).toBeInTheDocument()
  })

  it('renders custom title', () => {
    render(<FeaturedProducts title="Latest Products" />)
    expect(screen.getByText('Latest Products')).toBeInTheDocument()
  })

  it('renders product cards', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('Georgia Helmet Pro')).toBeInTheDocument()
    expect(screen.getByText('$120.00')).toBeInTheDocument()
  })

  it('renders wishlist and cart buttons', () => {
    render(<FeaturedProducts />)
    expect(screen.getAllByLabelText('Add to wishlist').length).toBe(4)
    expect(screen.getAllByLabelText('Add to cart').length).toBe(4)
  })
})
