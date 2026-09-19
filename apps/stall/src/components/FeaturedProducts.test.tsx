import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders section heading and 2 featured items', () => {
    render(<FeaturedProducts />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Products')

    expect(screen.getByText('Designer Handbag')).toBeInTheDocument()
    expect(screen.getByText('Premium Sneakers')).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('displays original and sale prices', () => {
    render(<FeaturedProducts />)

    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$249')).toBeInTheDocument()
    expect(screen.getByText('$179')).toBeInTheDocument()
  })

  it('renders View Details and Add To Cart buttons', () => {
    render(<FeaturedProducts />)

    const viewBtns = screen.getAllByText('View Details')
    const cartBtns = screen.getAllByText('Add To Cart')
    expect(viewBtns.length).toBe(2)
    expect(cartBtns.length).toBe(2)
  })
})
