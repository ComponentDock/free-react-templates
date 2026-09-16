import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
  })

  it('renders team members', () => {
    render(<Team />)
    expect(screen.getByText('Alex Johnson')).toBeInTheDocument()
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('David Lee')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Lead Engineer')).toBeInTheDocument()
    expect(screen.getByText('Architect')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByRole('link', { name: /facebook/i })
    expect(facebookLinks.length).toBeGreaterThanOrEqual(4)
  })
})
