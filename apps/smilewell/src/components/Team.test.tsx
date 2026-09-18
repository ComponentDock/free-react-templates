import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Team />)
    expect(screen.getByText('Expert Doctors')).toBeInTheDocument()
  })

  it('renders all 3 team members', () => {
    render(<Team />)
    expect(screen.getByText('Bob Carry')).toBeInTheDocument()
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    const doctors = screen.getAllByText('Doctor')
    expect(doctors.length).toBe(2)
    expect(screen.getByText('Dentist')).toBeInTheDocument()
  })

  it('renders member descriptions', () => {
    render(<Team />)
    expect(screen.getByText(/Experienced dental surgeon/)).toBeInTheDocument()
  })

  it('renders social icons for each member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(3)
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
