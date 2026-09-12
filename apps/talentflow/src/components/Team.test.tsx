import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders The Leadership heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'The Leadership' })).toBeInTheDocument()
  })

  it('renders three team members', () => {
    render(<Team />)
    expect(screen.getByText('Bob Miller')).toBeInTheDocument()
    expect(screen.getByText('Jean Smith')).toBeInTheDocument()
    expect(screen.getByText('David Wilson')).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    const roles = screen.getAllByText('CEO and Co-Founder')
    expect(roles).toHaveLength(3)
  })

  it('renders bio text for each member', () => {
    render(<Team />)
    const bios = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(bios).toHaveLength(3)
  })

  it('has team section id', () => {
    render(<Team />)
    expect(document.getElementById('team')).toBeInTheDocument()
  })

  it('renders member images', () => {
    render(<Team />)
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(3)
  })
})
