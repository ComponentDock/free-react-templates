import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shop } from './Shop'

describe('Shop', () => {
  it('renders the heading, three products with prices, and add-to-cart buttons', () => {
    render(<Shop />)

    expect(screen.getByRole('heading', { level: 2, name: 'Take It Home' })).toBeInTheDocument()
    expect(screen.getByText(/Fresh-roasted beans/)).toBeInTheDocument()

    for (const product of ['House Blend', 'Single Origin - Ethiopia', 'Decaf Blend']) {
      expect(screen.getByRole('heading', { level: 3, name: product })).toBeInTheDocument()
    }

    expect(screen.getByText('$18.00')).toBeInTheDocument()
    expect(screen.getByText('$22.00')).toBeInTheDocument()
    expect(screen.getByText('$19.00')).toBeInTheDocument()

    expect(screen.getAllByText('/ 12oz bag').length).toBe(3)
    expect(screen.getAllByRole('button', { name: 'Add to Cart' }).length).toBe(3)
    expect(screen.getByText('Bestseller')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop All Coffee' })).toBeInTheDocument()
  })
})
