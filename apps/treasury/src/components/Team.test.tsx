import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Team')).toBeInTheDocument()
  })

  it('renders all team members', () => {
    render(<Team />)
    expect(screen.getByText('Kaiara Spencer')).toBeInTheDocument()
    expect(screen.getByText('Dave Simpson')).toBeInTheDocument()
    expect(screen.getByText('Ben Thompson')).toBeInTheDocument()
    expect(screen.getByText('Kyla Stewart')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Financial Advisor')).toBeInTheDocument()
    expect(screen.getByText('Investment Analyst')).toBeInTheDocument()
    expect(screen.getByText('Risk Manager')).toBeInTheDocument()
    expect(screen.getByText('Account Executive')).toBeInTheDocument()
  })
})
