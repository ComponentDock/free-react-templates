import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shop } from './Shop'

describe('Shop', () => {
  it('renders the beauty products heading and four product tiles', () => {
    render(<Shop />)

    expect(screen.getByRole('heading', { name: 'Beauty products' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Leather shopper bag' })).toHaveLength(4)
    expect(screen.getAllByText('$49.00')).toHaveLength(4)
    expect(screen.getAllByText('Palettes')).toHaveLength(4)
    expect(screen.getByRole('link', { name: /view all products/i })).toHaveAttribute(
      'href',
      '#shop',
    )
  })

  it('renders hover actions for each product', () => {
    render(<Shop />)

    expect(screen.getAllByRole('button', { name: 'Add Leather shopper bag to cart' })).toHaveLength(
      4,
    )
    expect(
      screen.getAllByRole('button', { name: 'Keep an eye on Leather shopper bag' }),
    ).toHaveLength(4)
    expect(screen.getAllByRole('button', { name: 'Love Leather shopper bag' })).toHaveLength(4)
  })
})
