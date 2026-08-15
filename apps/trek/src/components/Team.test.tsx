import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { socials, teamMembers, teamTitle } from '../data'
import { Team } from './Team'

describe('Team', () => {
  it('renders three staff cards with photos, names, captions, bios, and social links', () => {
    const { container } = render(<Team />)

    expect(screen.getByRole('heading', { level: 3, name: teamTitle })).toBeInTheDocument()

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(teamMembers.length)
    expect(container.querySelectorAll('img')).toHaveLength(teamMembers.length)
    expect(screen.getAllByText('Staff')).toHaveLength(teamMembers.length)

    for (const member of teamMembers) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.bio)).toBeInTheDocument()
      for (const social of socials) {
        expect(
          screen.getByRole('link', { name: `${member.name} on ${social.label}` }),
        ).toBeInTheDocument()
        expect(screen.getAllByRole('img', { name: social.label })).toHaveLength(teamMembers.length)
      }
    }
  })
})
