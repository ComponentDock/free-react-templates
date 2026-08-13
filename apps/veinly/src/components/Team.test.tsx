import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'
import { teamMembers } from '../data'
import { socialLinks } from './social-icons'

describe('Team', () => {
  it('renders the heading and three member cards with photo, role and blurb', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Our Leadership')
    expect(screen.getByText('Our Team')).toBeInTheDocument()

    const cards = screen.getAllByTestId('team-card')
    expect(cards).toHaveLength(3)

    for (const member of teamMembers) {
      expect(screen.getByRole('heading', { name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      expect(screen.getByText(member.blurb)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: member.name })).toHaveAttribute('src', member.image)
    }
  })

  it('renders a bordered rounded card and a social icon row per member', () => {
    render(<Team />)

    const firstCard = screen.getAllByTestId('team-card')[0]
    expect(firstCard).toBeDefined()
    expect(firstCard?.className).toContain('border')
    expect(firstCard?.className).toContain('rounded')

    for (const social of socialLinks) {
      expect(screen.getAllByRole('link', { name: social.label }).length).toBeGreaterThanOrEqual(3)
    }
  })
})
