import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Team from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Best Team')).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByText('Alex Jeson')).toBeInTheDocument()
    expect(screen.getByText('Connor Charles')).toBeInTheDocument()
    expect(screen.getByText('Robert Kyle')).toBeInTheDocument()
    expect(screen.getByText('Brayden Shar')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('Founder')).toBeInTheDocument()
    expect(screen.getByText('Sales Head')).toBeInTheDocument()
    expect(screen.getByText('The Boss')).toBeInTheDocument()
  })

  it('renders social icons for each member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(4)
  })
})
