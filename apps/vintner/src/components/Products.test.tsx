import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section heading, sub-line, and view-all link', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Products' })).toBeInTheDocument()
    expect(screen.getByText(/hand-selected vintages/i)).toBeInTheDocument()
    const viewAll = screen.getByRole('link', { name: /View All Products/ })
    expect(viewAll).toHaveAttribute('href', '#wines')
  })

  it('renders three product cards with name, sale price, and original price', () => {
    const { container } = render(<Products />)
    expect(screen.getAllByText('$629.00')).toHaveLength(6)
    expect(screen.getAllByText('$900.00')).toHaveLength(3)
    for (const name of ['Cabernet Sauvignon 2019', 'Merlot Reserve 2018', 'Rosé Cuvée 2021']) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0)
    }
    expect(container.querySelectorAll('[data-product]')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('shows a rating and an Add to Cart button on each card overlay', () => {
    const { container } = render(<Products />)
    expect(screen.getAllByRole('button', { name: 'Add to Cart' })).toHaveLength(3)
    expect(screen.getAllByLabelText('Rated 4 out of 5 stars')).toHaveLength(3)
    expect(container.querySelectorAll('[data-overlay]')).toHaveLength(3)
  })
})
