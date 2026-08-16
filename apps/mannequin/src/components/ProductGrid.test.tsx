import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductGrid } from './ProductGrid'
import { products } from '../data'

describe('ProductGrid', () => {
  it('renders the heading, filter buttons and a product grid', () => {
    render(<ProductGrid onAddToCart={vi.fn()} onQuickView={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 2, name: 'New arrivals' })).toBeInTheDocument()
    for (const filter of ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches']) {
      expect(screen.getByRole('button', { name: filter })).toBeInTheDocument()
    }
    for (const product of products.slice(0, 4)) {
      expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Load More' })).toBeInTheDocument()
  })

  it('filters the grid by category', async () => {
    const user = userEvent.setup()
    render(<ProductGrid onAddToCart={vi.fn()} onQuickView={vi.fn()} />)

    const womenProducts = products.filter((product) => product.category === 'women')
    const menProducts = products.filter((product) => product.category === 'men')

    await user.click(screen.getByRole('button', { name: 'Women' }))
    expect(screen.getByRole('button', { name: 'Women' })).toHaveAttribute('aria-pressed', 'true')
    for (const product of womenProducts) {
      expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    }
    for (const product of menProducts) {
      expect(screen.queryByRole('link', { name: product.name })).not.toBeInTheDocument()
    }

    await user.click(screen.getByRole('button', { name: 'Men' }))
    expect(screen.getByRole('button', { name: 'Men' })).toHaveAttribute('aria-pressed', 'true')
    for (const product of menProducts) {
      expect(screen.getByRole('link', { name: product.name })).toBeInTheDocument()
    }
  })

  it('loads more products when Load More is clicked', async () => {
    const user = userEvent.setup()
    render(<ProductGrid onAddToCart={vi.fn()} onQuickView={vi.fn()} />)

    // initial page shows 8 of 16
    expect(screen.getAllByRole('article')).toHaveLength(8)
    await user.click(screen.getByRole('button', { name: 'Load More' }))
    expect(screen.getAllByRole('article')).toHaveLength(16)
    expect(screen.queryByRole('button', { name: 'Load More' })).not.toBeInTheDocument()
  })

  it('resets the page when the filter changes', async () => {
    const user = userEvent.setup()
    render(<ProductGrid onAddToCart={vi.fn()} onQuickView={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Load More' }))
    expect(screen.getAllByRole('article')).toHaveLength(16)

    await user.click(screen.getByRole('button', { name: 'Shoes' }))
    const shoes = products.filter((product) => product.category === 'shoes')
    expect(screen.getAllByRole('article')).toHaveLength(shoes.length)
  })
})
