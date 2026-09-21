import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the menu heading', () => {
    render(<Menu />)

    expect(screen.getByText(/We serve/)).toBeInTheDocument()
    expect(screen.getByText(/delicious food/)).toBeInTheDocument()
  })

  it('displays all 6 food items with names', () => {
    render(<Menu />)

    expect(screen.getByText('Mexican Eggrolls')).toBeInTheDocument()
    expect(screen.getByText('Chicken Burger')).toBeInTheDocument()
    expect(screen.getByText('Tofu Lasagne')).toBeInTheDocument()
    expect(screen.getByText('Pepper Potatoes')).toBeInTheDocument()
    expect(screen.getByText('Bean Salad')).toBeInTheDocument()
    expect(screen.getByText('Beetball Hoagie')).toBeInTheDocument()
  })

  it('displays prices for all items', () => {
    render(<Menu />)

    // $14.50 appears twice (Mexican Eggrolls and Pepper Potatoes)
    expect(screen.getAllByText('$14.50').length).toBe(2)
    expect(screen.getByText('$9.50')).toBeInTheDocument()
    expect(screen.getByText('$12.50')).toBeInTheDocument()
    expect(screen.getByText('$8.50')).toBeInTheDocument()
    expect(screen.getByText('$11.50')).toBeInTheDocument()
  })

  it('has the menu section id', () => {
    render(<Menu />)

    expect(document.getElementById('menu')).toBeInTheDocument()
  })

  it('has 6 food item images', () => {
    render(<Menu />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
