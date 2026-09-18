import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section title', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Michael Ross')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Wilson')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    expect(screen.getByText('Founder & CEO')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Lead Architect')).toBeInTheDocument()
    expect(screen.getByText('Site Supervisor')).toBeInTheDocument()
  })

  it('renders member images', () => {
    render(<Team />)
    expect(screen.getByRole('img', { name: 'Michael Ross' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Sarah Johnson' })).toBeInTheDocument()
  })
})
