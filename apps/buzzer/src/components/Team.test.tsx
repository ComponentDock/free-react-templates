import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Meet with our amazing team/i })).toBeInTheDocument()
  })

  it('renders 3 team member cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Alex Morgan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jessica Park' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'David Kim' })).toBeInTheDocument()
  })

  it('renders roles for each team member', () => {
    render(<Team />)
    expect(screen.getByText('Lead Consultant')).toBeInTheDocument()
    expect(screen.getByText('Strategy Director')).toBeInTheDocument()
    expect(screen.getByText('Marketing Head')).toBeInTheDocument()
  })

  it('renders social link buttons for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', { name: /on (Twitter|Facebook|Pinterest)/i })
    expect(socialLinks.length).toBe(9)
  })
})
