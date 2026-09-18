import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section subtitle and heading', () => {
    render(<Team />)
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders all three team members', () => {
    render(<Team />)
    expect(screen.getByText('John Rooster')).toBeInTheDocument()
    expect(screen.getByText('Mark Red')).toBeInTheDocument()
    expect(screen.getByText('Peter Grey')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('Design & Creative')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    expect(screen.getByAltText('John Rooster')).toBeInTheDocument()
    expect(screen.getByAltText('Mark Red')).toBeInTheDocument()
    expect(screen.getByAltText('Peter Grey')).toBeInTheDocument()
  })
})
