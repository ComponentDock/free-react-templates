import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /team members/i })).toBeInTheDocument()
  })

  it('renders all team members', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'Jhon Smith' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emma Bunton' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bunton Jonathon' })).toBeInTheDocument()
  })

  it('renders team member titles', () => {
    render(<Team />)
    expect(screen.getByText('Senior Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Professional Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Top Rated Lawyer')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
