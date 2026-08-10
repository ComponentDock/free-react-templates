import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Popular } from './Popular'

describe('Popular', () => {
  it('shows the "Popular Products" heading', () => {
    render(<Popular />)

    expect(screen.getByRole('heading', { level: 2, name: 'Popular Products' })).toBeInTheDocument()
  })

  it('renders the six product tiles', () => {
    render(<Popular />)

    for (const name of [
      'Gray Shoe',
      'Blue Shoe High Heels',
      'Denim Jacket',
      'Leather Green Bag',
      'Smooth Cloth',
      'Yellow Jacket',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
