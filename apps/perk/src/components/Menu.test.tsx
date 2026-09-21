import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the section title', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/what kind of coffee/i)
  })

  it('renders all 9 menu items', () => {
    render(<Menu />)
    const items = [
      'Cappuccino',
      'Americano',
      'Espresso',
      'Macchiato',
      'Mocha',
      'Coffee Latte',
      'Piccolo Latte',
      'Ristretto',
      'Affogato',
    ]
    items.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders prices', () => {
    render(<Menu />)
    const prices = screen.getAllByText('$49')
    expect(prices).toHaveLength(9)
  })
})
