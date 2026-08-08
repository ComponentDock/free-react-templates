import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and at least three barber cards with names and roles', () => {
    render(<Team />)

    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Your Barbers' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Marcus Johnson' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Jake Rivera' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Tony Chen' })).toBeInTheDocument()

    expect(screen.getByText(/Master Barber/)).toBeInTheDocument()
    expect(screen.getByText(/Senior Barber/)).toBeInTheDocument()
    expect(screen.getByText(/Style Specialist/)).toBeInTheDocument()
  })
})
