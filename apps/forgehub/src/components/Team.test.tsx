import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders 3 team members', () => {
    render(<Team />)
    expect(screen.getByText('John Rooster')).toBeInTheDocument()
    expect(screen.getByText('Tom Sharp')).toBeInTheDocument()
    expect(screen.getByText('Winston Hodson')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Team />)
    expect(screen.getByText('Co-Founder, President')).toBeInTheDocument()
    expect(screen.getByText('Co-Founder, COO')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('renders social icons for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /facebook|twitter|linkedin|instagram/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(4)
  })
})
