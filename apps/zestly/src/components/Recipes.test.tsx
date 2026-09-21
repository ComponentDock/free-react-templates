import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Recipes } from './Recipes'

describe('Recipes', () => {
  it('renders three recipe cards with title, category, time, and link', () => {
    render(<Recipes />)

    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
    expect(headings[0]?.textContent).toBe('Egg Manchurian')
    expect(headings[1]?.textContent).toBe('Pure Vegetable Bowl')
    expect(headings[2]?.textContent).toBe('Egg Masala Ramen')

    expect(screen.getAllByText('Appetizer')).toHaveLength(3)
    expect(screen.getAllByText(/Time Needs: 30 Mins/)).toHaveLength(3)

    const links = screen.getAllByText('View Full Recipe')
    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
  })
})
