import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductGrid } from './ProductGrid'

describe('ProductGrid', () => {
  it('renders nine product cards', () => {
    render(<ProductGrid />)
    const cards = screen.getAllByRole('link')
    expect(cards).toHaveLength(9)
  })

  it('displays all product names', () => {
    render(<ProductGrid />)
    const names = [
      'Minimalistic Plant Pot',
      'Night Stand',
      'Plant Pot',
      'Small Table',
      'Metallic Chair',
      'Modern Rocking Chair',
      'Home Deco',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Modern Chair')).toHaveLength(2)
  })
})
