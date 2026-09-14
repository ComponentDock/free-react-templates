import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuSection } from './MenuSection'

describe('MenuSection', () => {
  it('renders section heading', () => {
    render(<MenuSection />)
    expect(screen.getByText('Our')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
  })

  it('renders at least 4 menu items', () => {
    render(<MenuSection />)
    const items = ['Grilled Chicken', 'Lasagne Pasta', 'Pepperoni Pizza', 'Caesar Salad']
    for (const item of items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })

  it('displays prices for items', () => {
    render(<MenuSection />)
    expect(screen.getAllByText('$32').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$16')).toBeInTheDocument()
  })

  it('renders Add to Cart buttons', () => {
    render(<MenuSection />)
    const cartButtons = screen.getAllByText('Add to Cart')
    expect(cartButtons.length).toBeGreaterThanOrEqual(4)
  })

  it('has correct section id', () => {
    render(<MenuSection />)
    expect(document.getElementById('menu')).toBeInTheDocument()
  })
})
