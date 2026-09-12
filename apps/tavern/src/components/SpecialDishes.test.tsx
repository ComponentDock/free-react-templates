import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SpecialDishes } from './SpecialDishes'

describe('SpecialDishes', () => {
  it('renders section heading', () => {
    render(<SpecialDishes />)
    expect(screen.getByRole('heading', { name: 'Special Dishes' })).toBeInTheDocument()
  })

  it('renders all dish names', () => {
    render(<SpecialDishes />)
    expect(screen.getByText('Organic tomato salad, gorgonzola cheese, capers')).toBeInTheDocument()
    expect(screen.getByText('Baked broccoli')).toBeInTheDocument()
    expect(screen.getByText('Spicy meatballs')).toBeInTheDocument()
    expect(screen.getByText('Eggplant parmigiana')).toBeInTheDocument()
  })

  it('renders dish prices', () => {
    render(<SpecialDishes />)
    expect(screen.getByText('$11.50')).toBeInTheDocument()
    expect(screen.getAllByText('$12.00').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$11.00')).toBeInTheDocument()
  })

  it('renders dish images', () => {
    render(<SpecialDishes />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })
})
