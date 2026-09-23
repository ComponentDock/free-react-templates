import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet our team')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders all 3 team members', () => {
    render(<Team />)
    expect(screen.getByText('Dolores Webster')).toBeInTheDocument()
    expect(screen.getByText('Dana Vaughn')).toBeInTheDocument()
    expect(screen.getByText('Jonathan Mcdaniel')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    const architects = screen.getAllByText('Architect')
    expect(architects.length).toBe(2)
  })

  it('renders the View All button', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()
  })

  it('renders social links for each member', () => {
    render(<Team />)
    expect(screen.getByLabelText('Dolores Webster on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Dana Vaughn on Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Jonathan Mcdaniel on Instagram')).toBeInTheDocument()
  })
})
