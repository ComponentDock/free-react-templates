import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { describe, it, expect } from 'vitest'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders team member names', () => {
    render(<Team />)
    expect(screen.getByText('John Wilson')).toBeInTheDocument()
    expect(screen.getByText('Mark Smith')).toBeInTheDocument()
    expect(screen.getByText('Jessica Cole')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Cleaning Expert')).toBeInTheDocument()
    expect(screen.getByText('Window Specialist')).toBeInTheDocument()
    expect(screen.getByText('Carpet Cleaner')).toBeInTheDocument()
  })

  it('renders social media links for each member', () => {
    render(<Team />)
    const twitterLinks = screen.getAllByLabelText('Twitter')
    expect(twitterLinks.length).toBe(3)
  })
})
