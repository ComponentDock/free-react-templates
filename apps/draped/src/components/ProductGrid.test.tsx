import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductGrid } from './ProductGrid'

describe('ProductGrid', () => {
  it('renders 3 product cards', () => {
    render(<ProductGrid />)
    expect(screen.getByText('The Shoe')).toBeInTheDocument()
    expect(screen.getByText('Marc Jacobs Bag')).toBeInTheDocument()
    expect(screen.getByText('The Belt')).toBeInTheDocument()
  })

  it('renders sale badge on discounted product', () => {
    render(<ProductGrid />)
    const saleElements = screen.getAllByText('Sale')
    expect(saleElements.length).toBeGreaterThanOrEqual(1)
  })

  it('renders prices for all products', () => {
    render(<ProductGrid />)
    const prices = screen.getAllByText('$9.50')
    expect(prices.length).toBe(3)
  })
})
