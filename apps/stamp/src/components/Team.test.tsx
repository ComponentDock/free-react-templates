import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Experienced Professional')).toBeInTheDocument()
  })

  it('renders 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Andrew Flentop')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Crawford')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('System Engineer')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Quality Inspector')).toBeInTheDocument()
    expect(screen.getByText('Operations Lead')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /Andrew Flentop (Facebook|Twitter|LinkedIn|Instagram)/,
    })
    expect(socialLinks.length).toBe(4)
  })
})
