import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: /meet our dedicated team/i }),
    ).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Team />)
    expect(screen.getByText('Our lawyers')).toBeInTheDocument()
  })

  it('renders three team members', () => {
    render(<Team />)
    expect(screen.getByText('Ethan Welch')).toBeInTheDocument()
    expect(screen.getByText('Trevor Stanley')).toBeInTheDocument()
    expect(screen.getByText('Allen Guzman')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    expect(screen.getByText('Chief Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Junior Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Senior Lawyer')).toBeInTheDocument()
  })

  it('renders member photos', () => {
    render(<Team />)
    expect(screen.getByAltText('Ethan Welch')).toBeInTheDocument()
    expect(screen.getByAltText('Trevor Stanley')).toBeInTheDocument()
    expect(screen.getByAltText('Allen Guzman')).toBeInTheDocument()
  })
})
