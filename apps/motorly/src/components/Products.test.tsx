import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders the section title and four product cards with prices and cart buttons', () => {
    render(<Products />)
    expect(screen.getByRole('heading', { name: /Our Products/i })).toBeInTheDocument()
    for (const product of [
      'High Flow Fuel',
      'Revolution Wheels',
      'Tone Interior Kit',
      'Matte Gunmetal',
    ]) {
      expect(screen.getByRole('heading', { name: product })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: /Add To Cart/i })).toHaveLength(4)
    expect(screen.getAllByText(/\$800\.00/)).toHaveLength(4)
  })
})
