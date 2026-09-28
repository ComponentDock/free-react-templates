import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the section heading', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Favourite Menu')
  })

  it('renders all menu items', () => {
    render(<Menu />)
    const items = screen.getAllByRole('heading', { level: 3 })
    expect(items).toHaveLength(6)
  })

  it('displays menu item names', () => {
    render(<Menu />)
    expect(screen.getByText('Wonton with French Fries')).toBeInTheDocument()
    expect(screen.getByText('Roasted Red Potatoes with Rosemary')).toBeInTheDocument()
    expect(screen.getByText('Bacon-Wrapped Shrimp with Garlic')).toBeInTheDocument()
  })

  it('displays prices alongside items', () => {
    render(<Menu />)
    const prices = screen.getAllByText('$5.00')
    expect(prices.length).toBeGreaterThanOrEqual(2)
  })
})
