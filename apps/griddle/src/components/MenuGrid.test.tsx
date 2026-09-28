import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuGrid } from './MenuGrid'
import { MENU_ITEMS } from '../data'

describe('MenuGrid', () => {
  it('renders the section title', () => {
    render(<MenuGrid />)
    expect(screen.getByText('Burger Menu')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Best Ever Burgers' })).toBeInTheDocument()
  })

  it('renders all four menu items', () => {
    render(<MenuGrid />)
    for (const item of MENU_ITEMS) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
      // All items have $5 price — use getAllByText
      expect(screen.getAllByText(item.price).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders images with correct seeds', () => {
    const { container } = render(<MenuGrid />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(MENU_ITEMS.length)
    MENU_ITEMS.forEach((item, i) => {
      expect(images[i]).toHaveAttribute('src', `https://picsum.photos/seed/${item.seed}/200/200`)
    })
  })
})
