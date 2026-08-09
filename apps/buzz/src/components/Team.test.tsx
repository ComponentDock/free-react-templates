import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and three barber cards with roles', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Barber' })).toBeInTheDocument()
    for (const name of ['Jhon Smith', 'Jems Smith', 'Thomas J Watson']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Junior Barber')).toHaveLength(3)
  })

  it('shows initials avatars for the barbers', () => {
    const { container } = render(<Team />)
    const avatars = container.querySelectorAll('.rounded-full')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('TW')).toBeInTheDocument()
  })
})
