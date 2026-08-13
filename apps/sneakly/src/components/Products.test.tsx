import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Products } from './Products'
import { products } from '../data'

describe('Products', () => {
  it('renders the section heading and eight product cards', () => {
    render(<Products />)

    expect(screen.getByRole('heading', { name: 'New Shoes Arrival' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(8)
    expect(screen.getByTestId('products')).toHaveClass('bg-light')
  })

  it('shows category, stars, name and price on every card', () => {
    render(<Products />)

    expect(screen.getAllByText('Lifestyle')).toHaveLength(8)
    for (const product of products) {
      expect(screen.getByRole('heading', { name: product.name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img', { name: /Nike/ })).toHaveLength(8)
    expect(screen.getAllByText('$120.00')).toHaveLength(6)
  })

  it('renders sale pricing with strikethrough original on sale items', () => {
    render(<Products />)

    const saleProducts = products.filter((product) => product.oldPrice)
    expect(saleProducts).toHaveLength(3)
    for (const product of saleProducts) {
      const card = screen.getByRole('heading', { name: product.name }).closest('article')!
      expect(within(card).getByText(product.oldPrice!)).toHaveClass('line-through')
      expect(within(card).getByText(product.price)).toBeInTheDocument()
    }
  })

  it('renders the gold status ribbon only on ribboned items', () => {
    render(<Products />)

    expect(screen.getAllByText('50% Off')).toHaveLength(2)
    const ribboned = products.filter((product) => product.ribbon)
    expect(ribboned).toHaveLength(2)
  })

  it('provides add-to-cart and buy-now actions on every card', () => {
    render(<Products />)

    const firstCard = screen.getAllByRole('article')[0]!
    expect(within(firstCard).getByRole('button', { name: 'Add to cart' })).toBeInTheDocument()
    expect(within(firstCard).getByRole('button', { name: 'Buy now' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Add to cart' })).toHaveLength(8)
  })

  it('renders five outline stars per card', () => {
    const { container } = render(<Products />)

    expect(container.querySelectorAll('svg')).toHaveLength(8 * 5)
  })
})
