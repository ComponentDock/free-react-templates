import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the heading, three drink categories, and at least nine priced items', () => {
    render(<Menu />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()
    expect(screen.getByText(/Handcrafted drinks/)).toBeInTheDocument()

    for (const category of ['Espresso Drinks', 'Pour Overs', 'Cold Drinks']) {
      expect(screen.getByRole('heading', { level: 3, name: category })).toBeInTheDocument()
    }

    const items = [
      'Espresso',
      'Cortado',
      'Cappuccino',
      'Ethiopian Yirgacheffe',
      'Colombian Huila',
      'Guatemalan Antigua',
      'Cold Brew',
      'Iced Latte',
      'Nitro Cold Brew',
    ]
    for (const item of items) {
      expect(screen.getByRole('heading', { level: 4, name: item })).toBeInTheDocument()
    }

    expect(screen.getByText('$3.50')).toBeInTheDocument()
    expect(screen.getAllByText('$6.00').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Popular').length).toBeGreaterThan(0)
  })
})
