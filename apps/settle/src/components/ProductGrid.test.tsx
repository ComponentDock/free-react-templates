import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductGrid } from './ProductGrid'
import { PRODUCTS, SHOP_LINK, SHOP_TITLE } from '../data'

describe('ProductGrid', () => {
  it('renders the heading, shop link and one card per product', () => {
    const { container } = render(<ProductGrid title={SHOP_TITLE} products={PRODUCTS} />)

    expect(screen.getByRole('heading', { level: 2, name: SHOP_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: SHOP_LINK })).toHaveAttribute('href', '#shop')
    expect(container.querySelectorAll('article')).toHaveLength(PRODUCTS.length)
    expect(screen.getAllByRole('button', { name: '+ Add to cart' })).toHaveLength(PRODUCTS.length)

    // First product card shows its name + price.
    expect(screen.getByRole('heading', { level: 3, name: PRODUCTS[0]!.name })).toBeInTheDocument()
    expect(screen.getAllByText(PRODUCTS[0]!.price).length).toBeGreaterThanOrEqual(1)
  })
})
