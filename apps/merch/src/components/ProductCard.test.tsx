import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

const baseProps = {
  name: 'Kiko Linen Slip Dress',
  price: 89.99,
  image: 'https://picsum.photos/seed/merch-1/400/400',
}

describe('ProductCard', () => {
  it('renders product name and price', () => {
    render(<ProductCard {...baseProps} />)
    expect(screen.getByText('Kiko Linen Slip Dress')).toBeInTheDocument()
    expect(screen.getByText('$89.99')).toBeInTheDocument()
  })

  it('renders the product image with alt text', () => {
    render(<ProductCard {...baseProps} />)
    const img = screen.getByRole('img', { name: 'Kiko Linen Slip Dress' })
    expect(img).toHaveAttribute('src', baseProps.image)
  })

  it('shows original price with strikethrough when discounted', () => {
    render(<ProductCard {...baseProps} originalPrice={129.99} />)
    expect(screen.getByText('$89.99')).toBeInTheDocument()
    expect(screen.getByText('$129.99')).toBeInTheDocument()
    expect(screen.getByText('$129.99').className).toContain('line-through')
  })

  it('shows new badge', () => {
    render(<ProductCard {...baseProps} badge="new" />)
    expect(screen.getByText('new')).toBeInTheDocument()
  })

  it('shows sale badge', () => {
    render(<ProductCard {...baseProps} badge="sale" />)
    expect(screen.getByText('sale')).toBeInTheDocument()
  })

  it('renders add to cart button', () => {
    render(<ProductCard {...baseProps} />)
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('renders favorite button', async () => {
    render(<ProductCard {...baseProps} />)
    const favBtn = screen.getByRole('button', { name: /add.*to favorites/i })
    expect(favBtn).toBeInTheDocument()
  })
})
