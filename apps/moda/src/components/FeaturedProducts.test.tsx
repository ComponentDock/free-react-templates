import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the section heading, subtext, and View All Products link', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { level: 2, name: 'Featured Products' })).toBeInTheDocument()
    expect(
      screen.getByText('Discover our handpicked selection of trending items'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All Products' })).toBeInTheDocument()
  })

  it('renders eight product cards with images, titles, ratings, and Add to Cart buttons', () => {
    render(<FeaturedProducts />)
    const cards = screen.getAllByRole('button', { name: 'Add to Cart' })
    expect(cards).toHaveLength(8)
    for (const title of [
      'Minimal Leather Jacket',
      'Cashmere Crewneck Sweater',
      'Aviator Sunglasses',
      'Minimalist Leather Sneakers',
      'Automatic Dress Watch',
      'Diamond Pendant Necklace',
      'Italian Wool Overcoat',
      'Performance Running Sneakers',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getAllByLabelText(/rating: \d\.\d stars/i).length).toBeGreaterThanOrEqual(8)
  })

  it('shows badges for new, bestseller, and discounted products', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('Bestseller')).toBeInTheDocument()
    expect(screen.getAllByText('New').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('-25%')).toBeInTheDocument()
    expect(screen.getByText('-19%')).toBeInTheDocument()
  })

  it('shows discounted prices with a strikethrough old price and color swatches', () => {
    const { container } = render(<FeaturedProducts />)
    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(8)
    const firstCard = within(cards[0]!)
    expect(firstCard.getByText('$299')).toBeInTheDocument()
    expect(firstCard.getByText('$399')).toHaveClass('line-through')
    // every card carries three color swatches
    expect(container.querySelectorAll('[data-swatch]')).toHaveLength(24)
  })
})
