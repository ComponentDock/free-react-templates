import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section title', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Team')
  })

  it('renders 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Anna Martinez')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
    expect(screen.getByText('Lisa Thompson')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('CTO')).toBeInTheDocument()
    expect(screen.getByText('Lead Analyst')).toBeInTheDocument()
    expect(screen.getByText('Head of Marketing')).toBeInTheDocument()
  })

  it('renders social icon links for each member', () => {
    render(<Team />)
    const twitterLinks = screen.getAllByLabelText(/on Twitter$/)
    expect(twitterLinks).toHaveLength(4)
    const linkedinLinks = screen.getAllByLabelText(/on LinkedIn$/)
    expect(linkedinLinks).toHaveLength(4)
    const facebookLinks = screen.getAllByLabelText(/on Facebook$/)
    expect(facebookLinks).toHaveLength(4)
  })

  it('renders team member images', () => {
    render(<Team />)
    expect(screen.getByAltText('James Wilson')).toBeInTheDocument()
    expect(screen.getByAltText('Anna Martinez')).toBeInTheDocument()
  })
})
