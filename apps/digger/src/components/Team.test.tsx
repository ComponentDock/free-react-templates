import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders all team members', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('Bob Carry')).toBeInTheDocument()
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Operations Director')).toBeInTheDocument()
    expect(screen.getByText('Chief Engineer')).toBeInTheDocument()
  })
})
