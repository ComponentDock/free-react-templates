import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and the member cards with names and roles', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Interactive Team Mates' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Randy Weaver' })).toBeInTheDocument()
    expect(screen.getByText('Senior Barrister at law')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Marvel Maison' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Diana Cole' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Ethan Marsh' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThan(0)
  })
})
