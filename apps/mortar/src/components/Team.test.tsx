import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading and both team members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Meet Our Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Alex Morgan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Jordan Rivera' })).toBeInTheDocument()
  })

  it('shows roles, bios, social links, and member images', () => {
    render(<Team />)

    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Lead Developer')).toBeInTheDocument()

    expect(screen.getByText(/over a decade of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/full-stack engineering expert/)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /portrait of alex morgan/i })).toHaveAttribute(
      'src',
      expect.stringContaining('mortar-team-1'),
    )

    const socialLabels = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']
    for (const label of socialLabels) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })
})
