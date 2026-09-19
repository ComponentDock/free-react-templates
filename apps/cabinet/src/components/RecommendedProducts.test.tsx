import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecommendedProducts } from './RecommendedProducts'

describe('RecommendedProducts', () => {
  it('renders the section heading', () => {
    render(<RecommendedProducts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Products you may like')
  })

  it('renders 4 recommended products', () => {
    render(<RecommendedProducts />)
    expect(screen.getByText('Thornby Oak Dining Table')).toBeInTheDocument()
    expect(screen.getByText('Halland Velvet 3-Seat Sofa')).toBeInTheDocument()
    expect(screen.getByText('Brenton Upholstered Bed')).toBeInTheDocument()
    expect(screen.getByText('Norbury Tripod Floor Lamp')).toBeInTheDocument()
  })

  it('renders view all button', () => {
    render(<RecommendedProducts />)
    expect(screen.getByText('View all')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<RecommendedProducts />)
    expect(screen.getByText(/Hand-picked pieces/)).toBeInTheDocument()
  })
})
