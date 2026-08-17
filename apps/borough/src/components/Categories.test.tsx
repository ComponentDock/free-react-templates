import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'
import { categories } from '../data'

describe('Categories', () => {
  it('renders twelve category cards with names and red count chips', () => {
    render(<Categories />)

    const grid = screen.getByRole('region', { name: 'Browse categories' })
    // The category cards are links inside the section.
    const cards = within(grid).getAllByRole('link')
    expect(cards).toHaveLength(12)

    for (const category of categories) {
      expect(
        within(grid).getByRole('heading', { level: 2, name: category.name }),
      ).toBeInTheDocument()
      expect(within(grid).getAllByText(category.count.toString()).length).toBeGreaterThan(0)
    }
    expect(within(grid).getAllByText('Listings')).toHaveLength(12)
  })

  it('marks exactly the Hotels card as active with the red brand state', () => {
    render(<Categories />)
    const grid = screen.getByRole('region', { name: 'Browse categories' })
    const hotels = within(grid).getByRole('heading', { level: 2, name: 'Hotels' }).closest('a')
    expect(hotels).toHaveClass('bg-brand')
    expect(hotels).toHaveClass('text-white')

    const foodDrink = within(grid)
      .getByRole('heading', { level: 2, name: 'Food & Drink' })
      .closest('a')
    expect(foodDrink).not.toHaveClass('bg-brand')
  })

  it('links every category card to the listing section', () => {
    render(<Categories />)
    const grid = screen.getByRole('region', { name: 'Browse categories' })
    for (const link of within(grid).getAllByRole('link')) {
      expect(link).toHaveAttribute('href', '#listing')
    }
  })
})
