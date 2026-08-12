import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { TEAM_HEADING, TEAM_INTRO, TEAM_MEMBERS } from '../data'

describe('Team', () => {
  it('renders the leadership heading, intro, and three member cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: TEAM_HEADING })).toBeInTheDocument()
    expect(screen.getByText(TEAM_INTRO)).toBeInTheDocument()
    for (const member of TEAM_MEMBERS) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      expect(screen.getByText(member.blurb)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${member.name}` })).toBeInTheDocument()
    }
  })

  it('renders three orange social buttons per member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', { name: /on (Facebook|Twitter|Instagram)/ })
    expect(socialLinks).toHaveLength(TEAM_MEMBERS.length * 3)
  })
})
