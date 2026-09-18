import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularOrders } from './PopularOrders'

describe('PopularOrders', () => {
  it('renders the section heading', () => {
    render(<PopularOrders />)
    expect(screen.getByRole('heading', { name: /popular orders/i })).toBeInTheDocument()
  })

  it('renders all 6 meal cards', () => {
    render(<PopularOrders />)
    expect(screen.getByText('Western Set Meal 01')).toBeInTheDocument()
    expect(screen.getByText('Western Set Meal 02')).toBeInTheDocument()
    expect(screen.getByText('Western Set Meal 03')).toBeInTheDocument()
    expect(screen.getByText('Eastern Set Meal 01')).toBeInTheDocument()
    expect(screen.getByText('Eastern Set Meal 02')).toBeInTheDocument()
    expect(screen.getByText('Eastern Set Meal 03')).toBeInTheDocument()
  })

  it('renders price badges', () => {
    render(<PopularOrders />)
    expect(screen.getByText('$10.00')).toBeInTheDocument()
    expect(screen.getByText('$12.00')).toBeInTheDocument()
  })

  it('renders Order Now buttons', () => {
    render(<PopularOrders />)
    const buttons = screen.getAllByText('Order Now!')
    expect(buttons.length).toBe(6)
  })
})
