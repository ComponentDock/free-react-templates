import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'
import { products } from '../data'

describe('ProductCard', () => {
  it('renders the photo, name, sale price, strikethrough price and hover actions', () => {
    const product = products[0]!
    render(<ProductCard product={product} />)
    expect(screen.getByRole('heading', { level: 3, name: product.name })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: product.alt })).toBeInTheDocument()
    expect(screen.getByText(product.price)).toBeInTheDocument()
    expect(screen.getByText(product.original)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `Add ${product.name} to cart` })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: `Add ${product.name} to wishlist` }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `View ${product.name}` })).toBeInTheDocument()
  })
})
