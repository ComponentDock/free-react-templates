import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Team' })).toBeInTheDocument()
  })

  it('renders all 3 team members with names and roles', () => {
    render(<Team />)

    const members = [
      { name: 'Jake Mitchell', role: 'Head Coach' },
      { name: 'Sarah Rodriguez', role: 'Community Manager' },
      { name: 'Marcus Chen', role: 'Content Director' },
    ]

    for (const member of members) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
    }
  })

  it('renders team member images with correct alt text', () => {
    render(<Team />)

    expect(screen.getByAltText('Jake Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Rodriguez')).toBeInTheDocument()
    expect(screen.getByAltText('Marcus Chen')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: 'Jake Mitchell Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Jake Mitchell Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Jake Mitchell YouTube' })).toBeInTheDocument()
  })
})
