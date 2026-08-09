import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and five member cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Makeup Artist' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Danica Lewis' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nicole Simon' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cloe Meyer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Rachel Clinton' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dave Buff' })).toBeInTheDocument()
  })

  it('shows a role for every member', () => {
    render(<Team />)

    const roles = screen
      .getAllByText(/Artist|Stylist|Specialist/)
      .filter((node) => node.tagName === 'P')
    expect(roles).toHaveLength(5)
  })
})
