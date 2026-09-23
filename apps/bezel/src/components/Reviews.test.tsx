import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders 6 review cards with star ratings', () => {
    render(<Reviews />)
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText('Cody Hines')).toBeInTheDocument()
    expect(screen.getByText('Chad Herrera')).toBeInTheDocument()
    expect(screen.getByText('Andre Gonzalez')).toBeInTheDocument()
    expect(screen.getByText('Jon Banks')).toBeInTheDocument()
    expect(screen.getByText('Landon Houston')).toBeInTheDocument()
    expect(screen.getByText('Nelle Wade')).toBeInTheDocument()
  })

  it('star ratings display correct filled/unfilled stars', () => {
    render(<Reviews />)
    const srLabels = screen.getAllByText(/out of 5 stars/)
    expect(srLabels).toHaveLength(6)
    // Multiple reviewers have 3 stars; verify at least one exists
    expect(screen.getAllByText('3 out of 5 stars').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('2 out of 5 stars').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('4 out of 5 stars').length).toBe(1)
  })
})
