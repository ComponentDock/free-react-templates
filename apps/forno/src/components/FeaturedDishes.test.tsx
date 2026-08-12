import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedDishes } from './FeaturedDishes'

describe('FeaturedDishes', () => {
  it('renders four featured dish cards with photos, names and ingredients', () => {
    const { container } = render(<FeaturedDishes />)

    for (const name of [
      'Roasted Coffee Beef',
      'Honey Glazed Duck',
      'Berry Compote Tart',
      'Herbal Tea Pairing',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getAllByRole('img').length).toBe(4)
    expect(screen.getByText(/Beef,/)).toBeInTheDocument()
    expect(screen.getByText(/Potatoes,/)).toBeInTheDocument()
    expect(container.textContent).toContain('Duck, Honey, Thyme, Pepper')
  })
})
