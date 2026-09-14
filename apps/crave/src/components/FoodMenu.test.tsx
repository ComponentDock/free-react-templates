import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FoodMenu } from './FoodMenu'

describe('FoodMenu', () => {
  it('renders the section heading', () => {
    render(<FoodMenu />)
    expect(screen.getByRole('heading', { level: 4, name: 'Food Menu' })).toBeInTheDocument()
  })

  it('renders all 8 menu items', () => {
    render(<FoodMenu />)
    const items = [
      'Roasted Marrow',
      'Grilled Salmon',
      'Truffle Risotto',
      'Wagyu Steak',
      'Lobster Ravioli',
      'Mushroom Soup',
      'Caesar Salad',
      'Tiramisu',
    ]
    items.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('displays prices for each menu item', () => {
    render(<FoodMenu />)
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$38')).toBeInTheDocument()
    expect(screen.getByText('$28')).toBeInTheDocument()
    expect(screen.getByText('$52')).toBeInTheDocument()
    expect(screen.getByText('$34')).toBeInTheDocument()
    expect(screen.getByText('$16')).toBeInTheDocument()
    expect(screen.getByText('$18')).toBeInTheDocument()
    expect(screen.getByText('$14')).toBeInTheDocument()
  })

  it('has the menu section id', () => {
    const { container } = render(<FoodMenu />)
    expect(container.querySelector('#menu')).toBeInTheDocument()
  })
})
