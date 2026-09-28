import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FoodMenu } from './FoodMenu'

describe('FoodMenu', () => {
  it('renders the section heading and all 6 food cards', () => {
    render(<FoodMenu />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/We serve/i)
    expect(heading.textContent).toMatch(/delicious/i)

    expect(screen.getByRole('heading', { name: 'Grilled Beef' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Grilled Chicken' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Seafood Platter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pasta Carbonara' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fresh Salad' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chocolate Cake' })).toBeInTheDocument()
  })

  it('displays prices for each dish', () => {
    render(<FoodMenu />)

    expect(screen.getByText('$20.00')).toBeInTheDocument()
    expect(screen.getByText('$15.00')).toBeInTheDocument()
    expect(screen.getByText('$30.00')).toBeInTheDocument()
    expect(screen.getByText('$18.00')).toBeInTheDocument()
    expect(screen.getByText('$12.00')).toBeInTheDocument()
    expect(screen.getByText('$10.00')).toBeInTheDocument()
  })
})
