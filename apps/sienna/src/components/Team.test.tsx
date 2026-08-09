import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the section heading and two member cards', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { name: 'Experience Staff Change Your Look' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Daniel Mateno' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Julian Parsian' })).toBeInTheDocument()
  })

  it('shows a role and a portrait for each member', () => {
    render(<Team />)

    expect(screen.getByText('Master Barber')).toBeInTheDocument()
    expect(screen.getByText('Style Artist')).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /Portrait of/ })).toHaveLength(2)
  })
})
