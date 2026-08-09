import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the heading, seven product cards, and the View All Featured link', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { name: 'Featured Collection' })).toBeInTheDocument()

    const names = [
      'Velocity Runner Pro',
      'Streetwise Classic',
      'Court Dominator X',
      'Trail Blazer GTX',
      'Marathon Elite',
      'Cloud 9 Recovery',
      'Court Legacy Low',
    ]
    for (const name of names) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('$179')).toBeInTheDocument()
    expect(screen.getByText('$249')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /to cart/i })).toHaveLength(7)
    expect(screen.getByText('Best Seller')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All Featured' })).toBeInTheDocument()
  })
})
