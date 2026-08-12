import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the title and four member cards with names and roles', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Team Member' })).toBeInTheDocument()
    for (const [name, role] of [
      ['ROBERTO PE', 'Developer'],
      ['AMELIA JONES', 'Designer'],
      ['LIAM CHEN', 'Marketer'],
      ['SOPHIA KIM', 'Support'],
    ] as const) {
      expect(screen.getByRole('heading', { level: 4, name })).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
      expect(screen.getByAltText(name)).toBeInTheDocument()
    }
  })
})
