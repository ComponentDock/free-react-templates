import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('shows 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Roberto Peo')).toBeInTheDocument()
    expect(screen.getByText('Jhon Doe')).toBeInTheDocument()
    expect(screen.getByText('Jakia Khan')).toBeInTheDocument()
    expect(screen.getByText('Jack Kalis')).toBeInTheDocument()
  })

  it('shows roles', () => {
    render(<Team />)
    expect(screen.getByText('SEO Expert')).toBeInTheDocument()
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Programmer')).toBeInTheDocument()
  })

  it('has social link buttons for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', { name: /Facebook|X|LinkedIn|Instagram/ })
    expect(socialLinks.length).toBeGreaterThanOrEqual(4)
  })
})
