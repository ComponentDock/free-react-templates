import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuSection } from './MenuSection'

describe('MenuSection', () => {
  it('shows the Specialties heading pair and the View All Menu button', () => {
    render(<MenuSection />)

    expect(screen.getByText('Specialties')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Menu')
    expect(screen.getByRole('link', { name: 'View All Menu' })).toBeInTheDocument()
  })

  it('renders six menu columns with three priced dishes each', () => {
    render(<MenuSection />)

    for (const heading of ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Wine Card', 'Drinks']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('listitem')).toHaveLength(18)
    expect(screen.getByText('Grilled Beef with potatoes')).toBeInTheDocument()
    expect(screen.getByText('Grilled Crab with Onion')).toBeInTheDocument()
    expect(screen.getAllByText('$29')).toHaveLength(1)
  })
})
