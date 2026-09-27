import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /OUR Team/i })).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Lead Videographer')).toBeInTheDocument()
    expect(screen.getByText('Editor')).toBeInTheDocument()
    expect(screen.getByText('Motion Designer')).toBeInTheDocument()
    expect(screen.getByText('Director')).toBeInTheDocument()
  })

  it('has the team section with an ID', () => {
    render(<Team />)
    expect(document.getElementById('team')).toBeInTheDocument()
  })

  it('renders social links for each team member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(4)
  })
})
