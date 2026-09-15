import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders team heading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders all 6 team members', () => {
    render(<Team />)
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('Bob Carry')).toBeInTheDocument()
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
    expect(screen.getByText('Sarah Wells')).toBeInTheDocument()
    expect(screen.getByText('Tom Hardy')).toBeInTheDocument()
    expect(screen.getByText('Lisa Chen')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Mining Expert')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
