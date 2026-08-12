import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shop } from './Shop'
import { PRODUCTS } from '../data'

describe('Shop', () => {
  it('renders the heading and four products with prices', () => {
    render(<Shop />)
    expect(screen.getByRole('heading', { level: 2, name: "Let's Shop" })).toBeInTheDocument()
    for (const product of PRODUCTS) {
      expect(screen.getByRole('heading', { level: 3, name: product.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$300.00')).toHaveLength(4)
  })

  it('shows the Dumbell sale price with a struck-through original', () => {
    render(<Shop />)
    const dumbell = screen.getByRole('heading', { level: 3, name: 'Dumbell' }).closest('div')!
    expect(dumbell).toHaveTextContent('$199.00')
    const sale = document.querySelector('.line-through')
    expect(sale).toHaveTextContent('$300.00')
  })

  it('renders hover cart bars with uppercase links', () => {
    render(<Shop />)
    expect(screen.getAllByRole('link', { name: 'Add to Cart' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'View' })).toHaveLength(4)
  })
})
