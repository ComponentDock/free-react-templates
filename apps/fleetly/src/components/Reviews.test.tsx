import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders the heading and six review cards', () => {
    render(<Reviews />)

    expect(screen.getByText('Some Features that Made us Unique')).toBeInTheDocument()

    for (const name of [
      'John Doe',
      'Jane Smith',
      'Bob Johnson',
      'Alice Brown',
      'Charlie Wilson',
      'Diana Lee',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(6)
  })

  it('renders star ratings for each review', () => {
    const { container } = render(<Reviews />)

    const ratingGroups = container.querySelectorAll('[aria-label="3 out of 5 stars"]')
    expect(ratingGroups).toHaveLength(6)

    for (const group of ratingGroups) {
      const stars = group.querySelectorAll('svg')
      expect(stars).toHaveLength(5)
    }
  })
})
