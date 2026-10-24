import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Designer & Developer/i)
  })

  it('displays all four team members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 3, name: 'John McArthur' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Mark Sky' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Kyle Becker' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Alan Nortwood' })).toBeInTheDocument()
  })

  it('shows role titles for team members', () => {
    render(<Team />)

    const roles = screen.getAllByText(/(Designer|Developer|Web Designer|Photographer)/i)
    expect(roles.length).toBeGreaterThanOrEqual(4)
  })
})
