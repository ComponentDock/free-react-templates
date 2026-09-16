import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Team/i)
  })

  it('renders 5 team members', () => {
    render(<Team />)
    const members = screen.getAllByRole('article')
    expect(members).toHaveLength(5)
  })

  it('renders team member names', () => {
    render(<Team />)
    expect(screen.getByText('David Droga')).toBeInTheDocument()
    expect(screen.getByText('Jhonthan Smith')).toBeInTheDocument()
    expect(screen.getByText('Kristiana Bownty')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', { name: /follow/i })
    expect(socialLinks.length).toBeGreaterThanOrEqual(5)
  })
})
