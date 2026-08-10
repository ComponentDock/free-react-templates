import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products, products } from './Products'

describe('Products', () => {
  it('renders the heading and at least four product tiles', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { name: /Our Products/ })).toBeInTheDocument()
    const tiles = screen.getAllByRole('img', { name: 'Young Woman Wearing Dress' })
    expect(tiles.length).toBeGreaterThanOrEqual(4)
    expect(tiles.length).toBe(products.length)
  })

  it('offers an Add to cart link per tile', () => {
    render(<Products />)
    expect(screen.getAllByRole('link', { name: 'Add to cart' }).length).toBe(products.length)
  })
})
