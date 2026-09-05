import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Our Great Team/i })).toBeInTheDocument()
  })

  it('displays all 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Suzeo deago')).toBeInTheDocument()
    expect(screen.getByText('Alex deago')).toBeInTheDocument()
    expect(screen.getByText('Pol Biz')).toBeInTheDocument()
    expect(screen.getByText('Alex Jeson')).toBeInTheDocument()
  })

  it('displays member roles', () => {
    render(<Team />)
    expect(screen.getByText('Interior designer')).toBeInTheDocument()
    expect(screen.getByText('Web designer')).toBeInTheDocument()
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText('CEO and Founder')).toBeInTheDocument()
  })
})
