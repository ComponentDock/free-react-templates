import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the section heading and a View all link', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Our Instructors/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View all' })).toHaveAttribute('href', '#instructors')
  })

  it('renders instructor cards with names and roles', () => {
    render(<Team />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('David Warner')).toBeInTheDocument()
    expect(screen.getAllByText('Instructor').length).toBeGreaterThanOrEqual(2)
  })
})
