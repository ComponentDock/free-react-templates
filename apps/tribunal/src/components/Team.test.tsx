import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: /our attorneys/i })).toBeInTheDocument()
  })

  it('renders three team members', () => {
    render(<Team />)
    expect(screen.getByText('Myla Smith')).toBeInTheDocument()
    expect(screen.getByText('Aldin Powell')).toBeInTheDocument()
    expect(screen.getByText('Clarice Clark')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    expect(screen.getByText('Counsel')).toBeInTheDocument()
    expect(screen.getByText('Head of International Practice')).toBeInTheDocument()
    expect(screen.getByText('Managing Partner, Attorney')).toBeInTheDocument()
  })

  it('renders member photos', () => {
    render(<Team />)
    expect(screen.getByAltText('Myla Smith')).toBeInTheDocument()
    expect(screen.getByAltText('Aldin Powell')).toBeInTheDocument()
    expect(screen.getByAltText('Clarice Clark')).toBeInTheDocument()
  })
})
