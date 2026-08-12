import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NEW_PRODUCTS } from '../data'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('renders photo, name, rating, price, strikethrough old price and a NEW badge', () => {
    render(<ProductCard product={NEW_PRODUCTS[0]!} />)

    expect(screen.getByRole('img', { name: 'Buttons tweed blazer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Buttons tweed blazer' })).toBeInTheDocument()
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByText('$59.00')).toBeInTheDocument()
    expect(screen.getByText('$75.00')).toBeInTheDocument()
    expect(screen.getByText('NEW')).toBeInTheDocument()
  })

  it('shows SALE and OUT OF STOCK badges and no badge for plain products', () => {
    const { container } = render(
      <>
        <ProductCard product={NEW_PRODUCTS[4]!} />
        <ProductCard product={NEW_PRODUCTS[1]!} />
        <ProductCard product={NEW_PRODUCTS[2]!} />
      </>,
    )

    expect(screen.getByText('SALE')).toBeInTheDocument()
    expect(screen.getByText('OUT OF STOCK')).toBeInTheDocument()
    expect(screen.getAllByText('$19.00')).toHaveLength(1)
    expect(container.querySelectorAll('.line-through')).toHaveLength(1)
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
  })
})
