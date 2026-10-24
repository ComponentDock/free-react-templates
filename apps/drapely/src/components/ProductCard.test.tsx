import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductCard } from './ProductCard'
import { StarRating } from './StarRating'

describe('ProductCard', () => {
  it('renders a full-price product without a rating', () => {
    render(<ProductCard product={{ name: 'Fog Runner', price: 20, seed: 'drapely-fog-runner' }} />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Fog Runner')
    expect(screen.getByText('$20.00')).toBeInTheDocument()
    expect(screen.queryByText('$46.00')).not.toBeInTheDocument()
    expect(screen.queryByRole('img', { name: /Rated/ })).not.toBeInTheDocument()
  })

  it('renders a discounted, rated product with the struck-through price', () => {
    render(
      <ProductCard
        product={{
          name: 'Washed Denim Jacket',
          price: 28,
          wasPrice: 46,
          rating: 5,
          seed: 'drapely-denim-jacket',
        }}
      />,
    )

    const original = screen.getByText('$46.00')
    expect(original.tagName).toBe('DEL')
    expect(screen.getByText('$28.00')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Rated 5 out of 5' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Washed Denim Jacket product photo' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/drapely-denim-jacket/600/600',
    )
  })
})

describe('StarRating', () => {
  it('fills the stars up to the rating and dims the rest', () => {
    const { container } = render(<StarRating value={3} />)

    expect(screen.getByRole('img', { name: 'Rated 3 out of 5' })).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(5)
    expect(container.querySelectorAll('.fill-current')).toHaveLength(3)
    expect(container.querySelectorAll('.opacity-30')).toHaveLength(2)
  })
})
