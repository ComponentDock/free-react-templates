import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading and all team members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()

    const names = ['Sarah Mitchell', 'James Carter', 'Emily Chen', 'David Park']
    for (const name of names) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('shows roles for each team member', () => {
    render(<Team />)

    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Lead Developer')).toBeInTheDocument()
    expect(screen.getByText('UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Marketing Strategist')).toBeInTheDocument()
  })

  it('has the correct section landmark', () => {
    render(<Team />)
    expect(screen.getByRole('region', { name: 'Team' })).toBeInTheDocument()
  })
})
