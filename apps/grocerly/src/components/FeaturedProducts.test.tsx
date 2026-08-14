import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { featuredProducts, productTabs } from '../data'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders the section title, all tabs and the full 8-card grid by default', () => {
    render(<FeaturedProducts />)

    expect(screen.getByRole('heading', { name: 'Featured Product' })).toBeInTheDocument()
    for (const tab of productTabs) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true')
    for (const product of featuredProducts) {
      expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    }
  })

  it('filters the grid when a category tab is clicked and highlights it', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)

    await user.click(screen.getByRole('button', { name: 'Oranges' }))

    expect(screen.getByRole('button', { name: 'Oranges' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')

    const expected = featuredProducts.filter((product) => product.category === 'Oranges')
    for (const product of expected) {
      expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    }
    for (const product of featuredProducts.filter((product) => product.category !== 'Oranges')) {
      expect(screen.queryByRole('link', { name: product.name })).not.toBeInTheDocument()
    }
  })

  it('returns to the full grid when All is clicked again', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)

    await user.click(screen.getByRole('button', { name: 'Vegetables' }))
    await user.click(screen.getByRole('button', { name: 'All' }))

    for (const product of featuredProducts) {
      expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    }
  })

  it('renders hover action icons (wishlist / compare / cart) on every card', () => {
    render(<FeaturedProducts />)

    for (const product of featuredProducts) {
      expect(
        screen.getByRole('link', { name: `Add ${product.name} to wishlist` }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `Compare ${product.name}` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `Add ${product.name} to cart` })).toBeInTheDocument()
    }
  })

  it('shows each product price', () => {
    render(<FeaturedProducts />)

    for (const product of featuredProducts) {
      expect(screen.getAllByText(product.price).length).toBeGreaterThan(0)
    }
  })

  it('handles clicks on the hover action icons and product title link without navigating', () => {
    render(<FeaturedProducts />)

    const product = featuredProducts[0]!
    fireEvent.click(screen.getByRole('link', { name: `Add ${product.name} to wishlist` }))
    fireEvent.click(screen.getByRole('link', { name: `Compare ${product.name}` }))
    fireEvent.click(screen.getByRole('link', { name: `Add ${product.name} to cart` }))
    fireEvent.click(screen.getByRole('link', { name: product.name }))
  })
})
