import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { TEAM_MEMBERS } from '../data'

describe('Team', () => {
  it('renders the Leadership heading and all three members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Leadership' })).toBeInTheDocument()

    for (const member of TEAM_MEMBERS) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      expect(screen.getByText(member.quote)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${member.name}` })).toBeInTheDocument()
    }
  })
})
