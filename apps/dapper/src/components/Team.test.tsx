import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and three barber cards with names and roles', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'We Have All Famous Barbers' })).toBeInTheDocument()
    const expected = [
      ['Peter Baker', 'Head Hair Cut Specialist'],
      ['Nancy Holmes', 'Spa & Makeup Specialist'],
      ['Gavin Hansen', 'Hair Styling Expert'],
    ] as const
    for (const [name, role] of expected) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByText(role)).toBeInTheDocument()
    }
  })

  it('renders initials avatars for each barber', () => {
    render(<Team />)
    for (const initials of ['PB', 'NH', 'GH']) {
      expect(screen.getByText(initials)).toBeInTheDocument()
    }
  })
})
