import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Our Architect Team/i })).toBeInTheDocument()
  })

  it('renders team member names', () => {
    render(<Team />)
    expect(screen.getByText('David Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Architect')).toBeInTheDocument()
    expect(screen.getByText('Interior Designer')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Landscape Architect')).toBeInTheDocument()
  })

  it('has social media links for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /Twitter|Facebook|LinkedIn|Instagram/i,
    })
    expect(socialLinks.length).toBe(16)
  })
})
