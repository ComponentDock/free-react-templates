import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { team } from '../data'

describe('Team', () => {
  it('renders the heading and four person cards with name, blue role and social strip', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Team' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)
    for (const member of team) {
      expect(screen.getByRole('heading', { level: 3, name: member.name })).toBeInTheDocument()
      expect(screen.getByText(member.role)).toBeInTheDocument()
      for (let i = 1; i <= 4; i += 1) {
        expect(
          screen.getByRole('link', { name: `${member.name} on social network ${i}` }),
        ).toBeInTheDocument()
      }
    }
  })
})
