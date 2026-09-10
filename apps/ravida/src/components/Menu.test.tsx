import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders section title and subtitle', () => {
    render(<Menu />)
    expect(screen.getByText('Popular Menu')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /delicious food menu/i })).toBeInTheDocument()
  })

  it('displays all six food items', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { name: 'Pork Sandwich' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Roasted Marrow' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Summer Cooking' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Easter Delight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tiener Schnitze' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chicken Roast' })).toBeInTheDocument()
  })

  it('shows prices for each item', () => {
    render(<Menu />)
    const prices = screen.getAllByText('From $40.00')
    expect(prices).toHaveLength(6)
  })

  it('renders food item images', () => {
    render(<Menu />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
