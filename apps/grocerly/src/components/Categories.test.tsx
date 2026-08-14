import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { categories } from '../data'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders all five category cards with their labels', () => {
    render(<Categories />)

    expect(screen.getAllByRole('link')).toHaveLength(categories.length)

    for (const category of categories) {
      expect(screen.getAllByRole('link', { name: category.label }).length).toBeGreaterThan(0)
    }
  })

  it('links each card to the shop section', () => {
    render(<Categories />)

    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('href', '#shop')
    }
  })

  it('handles a click on a category card without navigating', () => {
    render(<Categories />)

    fireEvent.click(screen.getAllByRole('link')[0]!)
  })
})
