import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
  })

  it('renders all 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Glenn Watson')).toBeInTheDocument()
    expect(screen.getByText('Eva Yates')).toBeInTheDocument()
    expect(screen.getByText('Ethan Hopkins')).toBeInTheDocument()
    expect(screen.getByText('Maud Graham')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Managing Director (Sales)')).toBeInTheDocument()
    expect(screen.getByText('Managing Director (Marketing)')).toBeInTheDocument()
  })

  it('renders social links for each team member', () => {
    render(<Team />)
    expect(screen.getByLabelText('Glenn Watson on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Eva Yates on Twitter')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    expect(screen.getByAltText('Glenn Watson')).toBeInTheDocument()
    expect(screen.getByAltText('Eva Yates')).toBeInTheDocument()
  })
})
