import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders three team members', () => {
    render(<Team />)
    expect(screen.getByText('John Rooster')).toBeInTheDocument()
    expect(screen.getByText('Tom Sharp')).toBeInTheDocument()
    expect(screen.getByText('Winston Hodson')).toBeInTheDocument()
  })

  it('renders member titles', () => {
    render(<Team />)
    expect(screen.getByText('Co-Founder, President')).toBeInTheDocument()
    expect(screen.getByText('Co-Founder, COO')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    expect(screen.getAllByLabelText(/on Facebook/).length).toBe(3)
    expect(screen.getAllByLabelText(/on Twitter/).length).toBe(3)
    expect(screen.getAllByLabelText(/on LinkedIn/).length).toBe(3)
    expect(screen.getAllByLabelText(/on Instagram/).length).toBe(3)
  })
})
