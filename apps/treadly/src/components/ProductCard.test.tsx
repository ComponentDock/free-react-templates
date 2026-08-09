import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('renders image, name, price, rating, and Add to Cart button', () => {
    render(<ProductCard name="Velocity Runner Pro" price={179} rating={4.9} seed="treadly-vel-1" />)
    const card = screen.getByRole('article')
    expect(within(card).getByRole('img', { name: 'Velocity Runner Pro' })).toBeInTheDocument()
    expect(within(card).getByRole('heading', { name: 'Velocity Runner Pro' })).toBeInTheDocument()
    expect(within(card).getByText('$179')).toBeInTheDocument()
    expect(within(card).getByRole('img', { name: 'Rated 4.9 out of 5' })).toBeInTheDocument()
    expect(
      within(card).getByRole('button', { name: 'Add Velocity Runner Pro to cart' }),
    ).toBeInTheDocument()
    expect(within(card).queryByText('Best Seller')).not.toBeInTheDocument()
  })

  it('renders an optional badge and unfilled stars for a sub-5 rating', () => {
    render(
      <ProductCard
        name="Marathon Elite"
        price={189}
        rating={4.2}
        seed="treadly-marathon-1"
        badge="New"
      />,
    )
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Rated 4.2 out of 5' })).toBeInTheDocument()
    const filled = screen.getByRole('img', { name: 'Rated 4.2 out of 5' })
    expect(filled.querySelectorAll('.fill-amber-400')).toHaveLength(4)
    expect(filled.querySelectorAll('.fill-gray-200')).toHaveLength(1)
  })
})
