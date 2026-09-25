import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Our Team/i })).toBeInTheDocument()
  })

  it('renders all team member names', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'John Rooster' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tom Sharp' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Winston Hodson' })).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Co-Founder President')).toBeInTheDocument()
    expect(screen.getByText('Co-Founder COO')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    expect(screen.getByRole('img', { name: 'John Rooster' })).toHaveAttribute(
      'src',
      expect.stringContaining('makely-team-1'),
    )
  })
})
