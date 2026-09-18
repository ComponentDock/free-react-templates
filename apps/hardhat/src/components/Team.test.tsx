import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading and three team members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Our team' })).toBeInTheDocument()
    expect(screen.getByText('Ethan Welch')).toBeInTheDocument()
    expect(screen.getByText('Jessica Parker')).toBeInTheDocument()
    expect(screen.getByText('Daniel Ross')).toBeInTheDocument()
  })

  it('renders team member roles and social links', () => {
    render(<Team />)

    expect(screen.getByText('UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Site Engineer')).toBeInTheDocument()

    expect(screen.getAllByLabelText(/Ethan Welch on Twitter/)).toHaveLength(1)
    expect(screen.getAllByLabelText(/Jessica Parker on Facebook/)).toHaveLength(1)
    expect(screen.getAllByLabelText(/Daniel Ross on LinkedIn/)).toHaveLength(1)
  })
})
