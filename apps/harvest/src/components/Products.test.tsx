import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('shows the heading and at least four product cards', () => {
    render(<Products />)

    expect(
      screen.getByRole('heading', { name: 'Our Product Are Highest Quality' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fresh Organic Strawberries' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Farm Eggs (Dozen)' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Organic Raw Honey' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Heirloom Tomato Basket' })).toBeInTheDocument()
  })

  it('shows prices and a Go to Store button for every product', () => {
    render(<Products />)

    expect(screen.getByText('$17.99')).toBeInTheDocument()
    expect(screen.getByText('$9.99')).toBeInTheDocument()
    expect(screen.getByText('$59.99')).toBeInTheDocument()
    expect(screen.getByText('$19.99')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Go to Store' })).toHaveLength(4)
  })

  it('marks the discounted product with a Sale badge and strikethrough price', () => {
    render(<Products />)

    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toHaveClass('line-through')
  })
})
