import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductGrid } from './ProductGrid'
import { products, productsLabel } from '../data'

describe('ProductGrid', () => {
  it('renders all 8 product cards with title and price', () => {
    render(<ProductGrid />)
    expect(screen.getByRole('region', { name: productsLabel })).toBeInTheDocument()
    for (const product of products) {
      expect(screen.getByRole('heading', { level: 3, name: product.name })).toBeInTheDocument()
      expect(screen.getByAltText(product.imageAlt)).toBeInTheDocument()
    }
    expect(screen.getAllByText(products[0]!.price)).toHaveLength(products.length)
  })

  it('applies the source badge layout: 1 NEW, 2 SALE, 6 HOT, 8 SALE with matching colors', () => {
    render(<ProductGrid />)
    expect(screen.getAllByText('NEW')).toHaveLength(1)
    expect(screen.getAllByText('SALE')).toHaveLength(2)
    expect(screen.getAllByText('HOT')).toHaveLength(1)
    expect(screen.getByText('NEW')).toHaveClass('bg-price')
    expect(screen.getAllByText('SALE')[0]).toHaveClass('bg-accent')
    expect(screen.getAllByText('SALE')[1]).toHaveClass('bg-accent')
    expect(screen.getByText('HOT')).toHaveClass('bg-ink')
  })

  it('rotates every badge 90 degrees at the image corner', () => {
    const { container } = render(<ProductGrid />)
    const badges = container.querySelectorAll('span.rotate-90')
    expect(badges).toHaveLength(4)
  })
})
