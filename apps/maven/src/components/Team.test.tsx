import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the heading and three team cards with names, roles, and socials', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Creative work for client' }),
    ).toBeInTheDocument()

    for (const name of ['Jhosef Williams', 'Daniel Hancock', 'Bernard Perales']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getAllByText('Web Developer')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'facebook' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'twitter' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'skype' })).toHaveLength(3)
  })
})
