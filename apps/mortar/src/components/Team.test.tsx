import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Team } from './Team'
import { team } from '../data'

describe('Team', () => {
  it('renders the kicker and heading', () => {
    render(<Team />)
    expect(screen.getByText(team.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: team.heading })).toBeInTheDocument()
  })

  it('renders the four engineer cards with name and role', () => {
    render(<Team />)
    for (const member of team.members) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: member.name })).toBeInTheDocument()
    }
    expect(screen.getAllByText(team.role)).toHaveLength(4)
  })

  it('renders the social icon overlay links with accessible labels', () => {
    render(<Team />)
    expect(
      screen.getByRole('link', { name: `${team.members[0].name} on Twitter` }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: `${team.members[0].name} on Google+` }),
    ).toBeInTheDocument()
  })
})
