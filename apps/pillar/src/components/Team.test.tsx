import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Meet Our Team' })).toBeInTheDocument()
  })

  it('renders six team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Cloe Marena' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'John Rooster' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Will Turner' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nicolas Stainer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'George Brook' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emely Hopson' })).toBeInTheDocument()
  })

  it('renders roles for team members', () => {
    render(<Team />)
    const architects = screen.getAllByText('Architect')
    expect(architects.length).toBe(2)
    const designers = screen.getAllByText('Designer')
    expect(designers.length).toBe(3)
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
