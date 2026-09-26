import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders all three team members', () => {
    render(<Team />)
    expect(screen.getByText('Milani Mou')).toBeInTheDocument()
    expect(screen.getByText('Jasmine Pinky')).toBeInTheDocument()
    expect(screen.getByText('Piya Zosoldos')).toBeInTheDocument()
  })

  it('renders the role for each member', () => {
    render(<Team />)
    const roles = screen.getAllByText('Photographer')
    expect(roles.length).toBe(3)
  })

  it('renders team member images', () => {
    render(<Team />)
    expect(screen.getByAltText('Milani Mou')).toBeInTheDocument()
    expect(screen.getByAltText('Jasmine Pinky')).toBeInTheDocument()
    expect(screen.getByAltText('Piya Zosoldos')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    expect(screen.getByLabelText('Milani Mou Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Milani Mou Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Milani Mou Instagram')).toBeInTheDocument()
  })
})
