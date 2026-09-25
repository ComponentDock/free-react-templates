import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading and 6 team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument()
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    expect(screen.getByText('Cloe Marena')).toBeInTheDocument()
    expect(screen.getByText('John Rooster')).toBeInTheDocument()
    expect(screen.getByText('Will Turner')).toBeInTheDocument()
    expect(screen.getByText('Nicolas Stainer')).toBeInTheDocument()
    expect(screen.getByText('George Brook')).toBeInTheDocument()
    expect(screen.getByText('Emely Hopson')).toBeInTheDocument()
  })

  it('shows role for each member', () => {
    render(<Team />)
    expect(screen.getByText('Architect')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('has social icon links for each member', () => {
    render(<Team />)
    const fbLinks = screen.getAllByLabelText(/on Facebook/)
    expect(fbLinks).toHaveLength(6)
  })
})
