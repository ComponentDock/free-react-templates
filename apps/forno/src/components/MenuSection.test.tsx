import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MenuSection } from './MenuSection'

describe('MenuSection', () => {
  it('renders six distinct dishes with price, ingredients and order buttons', () => {
    render(<MenuSection />)

    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()
    expect(screen.getByText('Specialties')).toBeInTheDocument()

    const dishes = [
      ['Grilled Beef', '$29'],
      ['Roast Chicken', '$24'],
      ['Seafood Pasta', '$32'],
      ['Veggie Bowl', '$19'],
      ['Steak Frites', '$35'],
      ['Tiramisu', '$12'],
    ] as const

    for (const [name, price] of dishes) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByText(price)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'Order now' })).toHaveLength(6)
  })
})
