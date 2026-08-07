import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'The Best Team We Have Ever Had' }),
    ).toBeInTheDocument()
  })

  it('shows the three members with roles and photos', () => {
    render(<Team />)

    const members = [
      { name: 'Jhon Sunsa', role: 'Designer' },
      { name: 'Smith J White', role: 'Architect' },
      { name: 'Jayson Brouni', role: 'Engineer' },
    ]
    for (const { name, role } of members) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img').length).toBe(3)
  })
})
