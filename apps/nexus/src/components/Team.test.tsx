import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Office and team' })).toBeInTheDocument()
  })

  it('renders the office subheading', () => {
    render(<Team />)
    expect(screen.getByText('Our Office')).toBeInTheDocument()
  })

  it('renders the team subheading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders all three team members', () => {
    render(<Team />)
    expect(screen.getByText('Bradley Costa')).toBeInTheDocument()
    expect(screen.getByText('Chanice Muir')).toBeInTheDocument()
    expect(screen.getByText('Alisha Ellison')).toBeInTheDocument()
  })

  it('renders social links for each team member', () => {
    render(<Team />)
    expect(screen.getByLabelText('Bradley Costa Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Bradley Costa Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Bradley Costa LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Chanice Muir Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Chanice Muir Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Chanice Muir LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Alisha Ellison Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Alisha Ellison Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Alisha Ellison LinkedIn')).toBeInTheDocument()
  })
})
